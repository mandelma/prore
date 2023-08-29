const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')

const mongoKey = require('./utils/config')
const googleKey = require('./config/keys')

const logger = require("./utils/logger");


const session = require('express-session');

app.use(session({
    secret: 'somesuperdupersecret',
    resave: true,
    saveUninitialized: true
}))

mongoose.set('strictQuery', false)

//app.use(express.urlencoded({extended: true}));
//app.use(express.json());

const history = require('connect-history-api-fallback')
//const serveStatic = require('serve-static')

const userRouter = require('./routers/users')
const loginRouter = require('./routers/login')
const provideRouter = require('./routers/providers')
const recipientRouter = require('./routers/recipients')
const mapRouter = require('./routers/maps')
const bookingRouter = require('./routers/calendarBookings')
const timeOfferRouter = require('./routers/calendarOffers')
const uploadRouter = require('./routers/images')
const chatRouter = require('./routers/chat')
const messageRouter = require('./routers/messages')
const config = require("./utils/config");



// (node:26584) [MONGOOSE] DeprecationWarning: Mongoose: the `strictQuery` option will be switched back to `false` by default in Mongoose 7. Use `mongoose.set('strictQuery', false);` if you want to prepare for this change. Or use `mongoose.set('strictQuery', true);` to suppress this warning.
// (Use `node --trace-deprecation ...` to show where the warning was created)

//mongoKey.MONGODB_URL

//console.log("xxxx " + mongoKey.MONGODB_URL_PUBLIC)
//console.log("Google " + googleKey.GOOGLE_MAP)
// keys.mongoDB
// 'mongodb+srv://mandlimarko:llFFCsW6CG6qnXTN@cluster0.el43xlc.mongodb.net/prore?retryWrites=true&w=majority'
const connected = mongoose.connect(mongoKey.MONGODB_URL_PUBLIC, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    //strictPopulate: false
    //useCreateIndex: true,
    //useFindAndModify: false
})


if (connected) {
    console.log('mongo database is connected')
}else {
    console.log('error: mongo database is not connected')
}

const corsOptions ={
    //origin: true,
    origin: '*',
    credentials: true,            //access-control-allow-credentials:true
    optionSuccessStatus: 200,
}

// test

app.use(cors(corsOptions))
//app.use(cors())





// Serve static assets from the build client (images, etc)
//app.use(serveStatic(path.join(__dirname, '/dist')))


//const staticFileMiddleware = express.static(path.join(__dirname + '/dist'))


app.use(express.static('dist'))


//app.use(bodyParser.json())

//app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

// changes

app.use('/api/users', userRouter);
app.use('/api/login', loginRouter);
app.use('/api/providers', provideRouter);
app.use('/api/recipients', recipientRouter);
app.use('/api/map', mapRouter);
app.use('/api/booking', bookingRouter);
app.use('/api/offers', timeOfferRouter);
app.use('/api/upload', uploadRouter);
app.use('/api/agora', chatRouter);
app.use('/api/messages', messageRouter);

/*app.post('/api/join-chat', (req, res) => {
    // store username in session
    req.session.username = req.body.username;
    res.json('Joined');
});

app.post('/api/join-private-chat', (req, res) => {
    // store username in session
    req.session.username = req.body.username;
    res.json('Joined');
});*/

/*app.post('/api/pusher/auth', (req, res) => {
    const socketId = req.body.socket_id;
    const channel = req.body.channel_name;
    const userId = req.session.username;


    console.log("Username here.... " + userId)
    // Retrieve username from session and use as presence channel user_id

    const presenceData = {
        user_id: req.session.username
    };
    //const auth = pusher.authenticate(socketId, channel, presenceData);
    const auth = pusher.authorizeChannel(socketId, channel, presenceData)
    res.send(auth);

});*/

/*
app.post('/api/send-message', (req, res) => {
    // 'presence-test'
    pusher.trigger('private-channel-' + req.body.otherUser, 'message', {
        username: req.session.username,
        message:  req.body.message
    });

    pusher.trigger('private-channel-' + req.body.username, 'message', {
        username: req.session.username,
        message:  req.body.message
    });

    res.send('Message sent');
});
*/


app.get('/api/test', (req, res) => {
    res.send("<h1>Hey Socket.io</h1>")
})

const http = require('http').createServer(app);


const server = require('http').Server(app);
const io = require('socket.io')(server, {
    cors: {

        //origin: 'http://localhost:8080',
        origin: '*',
        methods: ["GET", "POST"],
        transports: ['websocket'],

        credentials: true,
        // origins: [
        //     'http://localhost:8080'
        //  //   '*'
        // ]
    },
    allowEIO3: true,

});

//io.set('origins', '*:*');

const crypto = require("crypto");
const randomId = () => crypto.randomBytes(8).toString("hex");

const { InMemorySessionStore } = require("./sessionStore");
const sessionStore = new InMemorySessionStore();

//const {createServer} = require("http");


// jwt secret
//asdfghj


const formatMessage = require("./utils/messages");

const {
    userJoin,
    getCurrentUser,
    removeUser,
    userLeave,
    getRoomUsers,
} = require("./utils/users");

const Users = require('./utils/UsersClass')

let users = [];

const botName = "ChatCord Bot";

const userList = new Users();

const Msg = require('./models/ChatMessages')

const rooms = ["123", "1234", "12345"]

/*const getMessages = async (room) => {
    // await Msg.find({room: room}, (err, res) => {
    //     if (err) throw err;
    //     console.log("Room message info " + res)
    //     u = res
    //
    // })
    const msg = await Msg.find({room: room})
    u = msg
    return msg
}*/

const initMessages = async (socket, room) => {
    await Msg.find({room: room}, (err, res) => {
        if (err) throw err
        //socket.emit("init messages", res)
        socket.emit("init messages", res)
    })
}

io.use((socket, next) => {
    const sessionID = socket.handshake.auth.sessionID;
    if (sessionID) {
        const session = sessionStore.findSession(sessionID);
        if (session) {
            socket.sessionID = sessionID;
            socket.userID = session.userID;
            socket.username = session.username;
            socket.room = session.room;
            return next();
        }
    }
    const username = socket.handshake.auth.username;
    const room = socket.handshake.auth.room;

    if (!username) {
        return next(new Error("invalid username"));
    }
    if (!room) {
        return next(new Error("invalid room"));
    }


    roomx = room

    socket.sessionID = randomId();
    socket.userID = randomId();
    socket.username = username;
    socket.room = room;
    next();
});

let messages = [];


io.on("connection", (socket) => {
    // sss

    let uu = userJoin(socket.userID, socket.username, socket.room, true);

    socket.join(uu.room);

    console.log("Current user room in start " + socket.room)


    Msg.find({room: uu.room}, (err, res) => {
        if (err) throw err
        messages = res

    })


    io.emit("init messages" ,{
        //room: messages.room,
        messages: messages
    })

    // persist session
    sessionStore.saveSession(socket.sessionID, {
        userID: socket.userID,
        username: socket.username,
        room: socket.room,
        connected: true,
    });

    // emit session details
    socket.emit("session", {
        sessionID: socket.sessionID,
        userID: socket.userID,
    });


    socket.join(socket.userID);

    // fetch existing users
    let users = [];

    // yee
    sessionStore.findAllSessions().forEach((session) => {

        // ---
        userJoin(session.userID, session.username, session.roomName, session.connected);
        //users.push(user);

        userList.addUserData(session.userID, session.username, session.room)

    });
    //users = userList.getUserList("test")
    const usersxx = userList.getUserList(socket.room)


    // aaa

    //currentRoom = uu.room;

    // uu.room
    console.log("User room " + uu.room)
    io.to(uu.room).emit("get room users", {
        room: uu.room,
        users: getRoomUsers(uu.room)    //userList.getUserList(uu.room)
    })
    // aaa

    socket.to(uu.room).emit("user connected", {
        userID: socket.userID,
        username: socket.username,
        room: socket.room,
        //messaages: [{content: "Tere siit serverist"}],
        connected: true,
    });

    // forward the private message to the right recipient (and to other tabs of the sender)
    socket.on("private message", ({ content, date, to }) => {

        /*let message = new Msg({
            room: uu.room,
            content: content,
            username: socket.username,
            date: date

        })
        message.save();*/

        socket.to(to).to(socket.userID).emit("private message", {
            content,
            from: socket.userID,
            to,
        });

    });

    socket.on('joinAllRooms', () => {
        // aaa
        const activeRooms = () => {
            const arr = Array.from(io.sockets.adapter.rooms);
            // [['room1', Set(2)], ['room2', Set(2)]]
            const filtered = arr.filter(room => !room[1].has(room[0]))
            // ['room1', 'room2']
            const res = filtered.map(i => i[0]);
            return res;
        }

        const rooms = activeRooms()

        if (rooms) {
            rooms.forEach((element) => {
                let user = {}
                if (element.toString() === "111" || element.toString() === "222") {
                    socket.join(element.toString());
                    console.log("Room joining test: " + element.toString())
                    socket.room = element.toString()

                    user = userJoin(socket.userID, socket.username, socket.room, true);


                    socket.emit("updateChat", "INFO", "You have joined " + user.room + " room");

                    sessionStore.saveSession(socket.sessionID, {
                        userID: socket.userID,
                        username: socket.username,
                        room: socket.room,
                        connected: true,
                    });


                }

            });



            //socket.join(socket.username);
        }
    })


    // aaa

    socket.on("joinAllClientRooms" , (rooms) => {
        socket.join(rooms)

        rooms.forEach((element, i) => {

            //socket.join(element);
            console.log("Room joining test: room " +  element)
            //socket.room = element
            let room = rooms[i]

            // aaa

            let userJoinRoom = userJoin(socket.userID, socket.username, room, true);

            socket.emit("updateChat", "INFO", "You have joined " + userJoinRoom.room + " room");

            io.to(userJoinRoom.room).emit("get room users", {
                room: userJoinRoom.room,
                users: getRoomUsers(userJoinRoom.room)
            })


        });

        // sss
        console.log("Current user room in end " + socket.room)
        socket.room = getCurrentUser(socket.userID).room
        //socket.room = user.room;

    })

    socket.on("updateRoom", function (room) {
        const user = removeUser(socket.userID);

        socket
            .to(user.room)
            .emit("updateChat", "INFO", user.username + " left room");
        socket.leave(user.room);

        socket.room = room;
        let newRoomUser = userJoin(socket.userID, socket.username, socket.room, true);

        //io.socketsJoin(newRoomUser.room);
        //io.in(newRoomUser.room).socketsJoin("222");
        //io.socketsJoin(newRoomUser.room);

        //socket.join(newRoomUser.room);
        socket.emit("updateChat", "INFO", "You have joined " + newRoomUser.room + " room");


        io.to(newRoomUser.room).emit("get room users", {
            room: newRoomUser.room,
            users: getRoomUsers(newRoomUser.room)    //userList.getUserList(uu.room)
        })



        socket
            .to(room)
            .emit(
                "updateChat",
                "INFO",
                socket.username + " has joined " + room + " room"
            );

    });


    // aa
    socket.on('unsubscribe', async function(){
        try{
            const user = removeUser(socket.userID);
            // eee
            //console.log('[socket]','leave room :', user.room);
            socket.leave(user.room);
            socket.leave(socket.room)

            if (user) {
                io.to(user.room).emit('user left', socket.userID);
                io.to(user.room).emit("get room users", {
                    room: user.room,
                    users: getRoomUsers(user.room)
                })
            }

            const matchingSockets = await io.in(socket.userID).allSockets();
            const isDisconnected = matchingSockets.size === 0;
            if (isDisconnected) {
                // notify other users
                socket.broadcast.emit("user disconnected", socket.userID);
                // update the connection status of the session
                sessionStore.saveSession(socket.sessionID, {
                    userID: socket.userID,
                    username: socket.username,
                    room: socket.room,
                    connected: false,
                });

                io.to(user.room).emit("get room users", {
                    room: user.room,
                    users: getRoomUsers(user.room)
                })
            }

            socket.leave(socket.userID)

        }catch(e){
            console.log('[error]','leave room :', e);
            socket.emit('error','couldnt perform requested action');
        }
    })

    socket.on('room users account', () => {
        socket.emit('get room users account', {
            room: socket.room,
            users: getRoomUsers(socket.room)
        })
    })



    // notify users upon disconnection
    socket.on("disconnect", async () => {
        const user = removeUser(socket.userID);
        if (user) {
            io.to(user.room).emit("get room users", {
                room: user.room,
                users: getRoomUsers(user.room)
            })
        }



        const matchingSockets = await io.in(socket.userID).allSockets();
        const isDisconnected = matchingSockets.size === 0;
        if (isDisconnected) {
            // notify other users
            socket.broadcast.emit("user disconnected", socket.userID);
            // update the connection status of the session
            sessionStore.saveSession(socket.sessionID, {
                userID: socket.userID,
                username: socket.username,
                room: socket.room,
                connected: false,
            });
        }

    });
});

let user = {}


//module.exports = server
module.exports = server;