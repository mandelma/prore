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
const Messages = require('./utils/MessagesClass')

//let users = [];
let messages = []

const botName = "ChatCord Bot";

const userList = new Users();
const userlist = new Users();
const messageList = new Messages();

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

// io.use((socket, next) => {
//     const sessionID = socket.handshake.auth.sessionID;
//     if (sessionID) {
//         const session = sessionStore.findSession(sessionID);
//         if (session) {
//             socket.sessionID = sessionID;
//             socket.userID = session.userID;
//             socket.username = session.username;
//             socket.room = session.room;
//             return next();
//         }
//     }
//     const username = socket.handshake.auth.username;
//     const room = socket.handshake.auth.room;
//
//     if (!username) {
//         return next(new Error("invalid username"));
//     }
//     if (!room) {
//         return next(new Error("invalid room"));
//     }
//
//
//     roomx = room
//
//     socket.sessionID = randomId();
//     socket.userID = randomId();
//     socket.username = username;
//     socket.room = room;
//     next();
// });

// aa

const ChatUserSchema = mongoose.Schema({
    userID: String,
    room: String,
    username: String,
    connected: Boolean
})

const ChatUserModel = mongoose.model("chat-user", ChatUserSchema);

const ChatMessageSchema = mongoose.Schema({
    username: String,
    msg: String,
})

const ChatMessageModel = mongoose.model("message", ChatMessageSchema);


const initUsers = async (room) => {
    await ChatUserModel.find({room: room})
        .then(user => {
            console.log("Users++  " + user)
            users = user;
        })

}


let users = []
// aaa

let onlineUsers = {};

//Msg.find({}).then(res => messages = res)
// sss

const updateRoom = (id, room) => {
    let itemIndex = users.findIndex((item => item.userID === id));
    console.log("Before updating room " + users[itemIndex].room);
    users[itemIndex].room = room;
    console.log("After updating room " + this.users[itemIndex].room);

}

io.on("connection", (socket) => {



    socket.emit("get current credentials")
    socket.on("current credentials", async (data) => {

        socket.userID = data.userID;
        socket.username = data.username;



        //console.log("Current username is: " + data.username)


        await ChatUserModel.findOne({username: socket.username})
            .then(async (res) => {
                if (res) {
                    await ChatUserModel.findOneAndUpdate({userID: socket.userID}, {connected: true}, {new: true})
                    if (socket.username === res.username) {
                        console.log("Current room app " + res.room);
                        socket.room = res.room;

                        // userlist.addUserData(socket.userID, socket.username, socket.room, connected)
                    }

                } else {
                    socket.room = data.room;

                    //userlist.addUserData(socket.userID, socket.username, socket.room, connected)
                    // userList.addUserData(socket.userID, socket.username, socket.room, connected)
                    //
                    // socket.join(userList.getRoom());
                    //
                    // let joinedUser = new ChatUserModel({
                    //     userID: socket.userID,
                    //     room: socket.room,
                    //     username: socket.username,
                    //     connected: true
                    // })
                    //
                    // await joinedUser.save();

                    // io.to(userList.getRoom()).emit("userOnline", {
                    //     room: userList.getRoom(),
                    //     users: userList.getRoomUsers(userList.getRoom())
                    // })


                }
            })

        socket.emit("get socketID", socket.userID)

        //console.log("xxxxxx " + userList.getRoom())

        //socket.join(userList.getRoom())
        // socket.room = data.room;


        await Msg.find({room: socket.room}).then( res => messages = res)

        //await ChatModel.findOne({})
        let xxxxx = []
        await ChatUserModel.find({room: socket.room})
            .then(user => {
                //console.log("Users++ room  " + user[0].room)
                console.log("Users " + user.map(u => u.room))
                user.map(u => {
                    xxxxx.push(userlist.addUserData(u.userID, u.username, u.room, u.connected))
                    userJoin(socket.userID, socket.username, socket.room, true);

                })

                users = user;
            })

        //userList.addUserData(socket.userID, socket.username, socket.room, connected)
        //socket.join(userList.getRoom);


        socket.join(socket.room)
        socket.join(socket.userID);



        io.to(socket.room).emit("loggedIn", {
            users: xxxxx,             //userList.getRoomUsers(socket.room),
            messages: messages,
        })


        // io.to(socket.room).emit("loggedIn", {
        //     users: users,
        //     messages: messages,
        // })

    })


    socket.on("update room", async (room) => {
        let usersUpdate = [];

        await ChatUserModel.findOneAndUpdate({userID: socket.userID}, {room: room}, {new: true})

        socket
            .to(socket.room)
            .emit("updateChat", "INFO", socket.username + " left room");
        socket.leave(socket.room);
        //socket.leave(socket.userID)
        // await ChatUserModel.find({room: socket.room})
        //     .then(user => {
        //         usersUpdate = user;
        //     })
        // io.to(socket.room).emit("userOnline", {
        //     users: usersUpdate.filter(u => u.userID !== socket.userID),         //userList.getRoomUsers(socket.room),
        //     //messages: messages,
        // })

        // socket.room = room;

        socket.join(room);
        socket.emit("updateChat", "INFO", "You have joined " + socket.room + " room");


        socket
            .to(room)
            .emit(
                "updateChat",
                "INFO",
                socket.username + " has joined " + room + " room"
            );





        await ChatUserModel.find({room: room})
            .then(user => {
                usersUpdate = user
            })


        io.to(room).emit("userOnline", {
            users: usersUpdate,         //userList.getRoomUsers(socket.room),
            //messages: messages,
        })

    })




    socket.on('join all rooms', () => {
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
                if (element.toString() === "Oopersama" || element.toString() === "tvsama") {
                    socket.join(element.toString());
                    console.log("Room joining test: " + element.toString())
                    socket.room = element.toString()

                    user = userJoin(socket.userID, socket.username, socket.room, true);


                    socket.emit("updateChat", "INFO", "You have joined " + user.room + " room");

                }

            });

        }
    })



    // eee


    // if (socket.connected) {
    //     socket.emit( /* ... */ );
    // } else {
    //     // ...
    // }



    //oöjmfa'pgjoöedr
    socket.on("newUser", async (username, id, room) => {
        userList.addUserData(socket.userID, socket.username, socket.room, connected)

        socket.join(userList.getRoom());



        let joinedUser = new ChatUserModel({
            userID: socket.userID,
            room: socket.room,
            username: socket.username,
            connected: true
        })

        await ChatUserModel.findOne({userID: socket.userID})
            .then(async user => {
                if (!user)
                    await joinedUser.save();
            })



        // users.push({
        //     room: socket.room,
        //     userID: socket.userID,
        //     username: socket.username,
        //     connected: true
        //
        // });

        // io.emit("userOnline", socket.username);

        io.to(userList.getRoom()).emit("userOnline", {
            room: userList.getRoom(),
            users: userList.getRoomUsers(userList.getRoom())
        })
    });

    socket.on("msg", async (msg) => {
        let message = new Msg({
            room: socket.room,
            username: socket.username,
            content: msg,
        });

        messageList.addMessage(socket.room, socket.username, msg)

        //socket.join(messageList.getRoom());
        
        await message.save()
        messages.push(message)

        io.to(socket.room).emit("msg", {
            users: users,
            messages: messages
        });

        // messages.push(msg)
        // io.emit("msg", msg);


    });

    socket.on("private message", ({ content, date, to }) => {

        socket.to(to).to(socket.userID).emit("private message", {
            content,
            date,
            from: socket.userID,
            to,
        });

        // if only one users. giving error!!!

        socket.to(to).to(socket.userID).emit("new message");

    });

    // rr

    socket.on("disconnect", async () => {
        await ChatUserModel.findOneAndUpdate({userID: socket.userID}, {connected: false}, {new: true})
        io.emit("userLeft", socket.userID, socket.username, socket.room);
            const removeUser = userList.removeUser(socket.userID);
            if (removeUser) {
                io.to(socket.room).emit("userOnline", {
                    room: socket.room,
                    users: userList.getRoomUsers(socket.room)
                })
            }

        //users.splice(users.indexOf(socket), 1);
    });
});




// io.on("connection", (socket) => {
//     // sss
//
//     // let uu = userJoin(socket.userID, socket.username, socket.room, true);
//     //
//     // socket.join(uu.room);
//     //
//     // console.log("Current user room in start " + socket.room)
//     //
//     //
//     // Msg.find({room: uu.room}, (err, res) => {
//     //     if (err) throw err
//     //     messages = res
//     //
//     // })
//     //
//     //
//     // io.emit("init messages" ,{
//     //     //room: messages.room,
//     //     messages: messages
//     // })
//     //
//     // // persist session
//     // sessionStore.saveSession(socket.sessionID, {
//     //     userID: socket.userID,
//     //     username: socket.username,
//     //     room: socket.room,
//     //     connected: true,
//     // });
//     //
//     // // emit session details
//     // socket.emit("session", {
//     //     sessionID: socket.sessionID,
//     //     userID: socket.userID,
//     // });
//     //
//     //
//     // socket.join(socket.userID);
//     //
//     // // fetch existing users
//     // let users = [];
//     //
//     // // yee
//     // sessionStore.findAllSessions().forEach((session) => {
//     //
//     //     // ---
//     //     userJoin(session.userID, session.username, session.roomName, session.connected);
//     //     //users.push(user);
//     //
//     //     userList.addUserData(session.userID, session.username, session.room)
//     //
//     // });
//     //
//     // socket.to(uu.room).emit("user connected", {
//     //     userID: socket.userID,
//     //     username: socket.username,
//     //     room: socket.room,
//     //     //messaages: [{content: "Tere siit serverist"}],
//     //     connected: true,
//     // });
//     //
//     // socket.on('joinAllRooms', () => {
//     //     // aaa
//     //     const activeRooms = () => {
//     //         const arr = Array.from(io.sockets.adapter.rooms);
//     //         // [['room1', Set(2)], ['room2', Set(2)]]
//     //         const filtered = arr.filter(room => !room[1].has(room[0]))
//     //         // ['room1', 'room2']
//     //         const res = filtered.map(i => i[0]);
//     //         return res;
//     //     }
//     //
//     //     const rooms = activeRooms()
//     //
//     //     if (rooms) {
//     //         rooms.forEach((element) => {
//     //             let user = {}
//     //             if (element.toString() === "111" || element.toString() === "222") {
//     //                 socket.join(element.toString());
//     //                 console.log("Room joining test: " + element.toString())
//     //                 socket.room = element.toString()
//     //
//     //                 user = userJoin(socket.userID, socket.username, socket.room, true);
//     //
//     //
//     //                 socket.emit("updateChat", "INFO", "You have joined " + user.room + " room");
//     //
//     //                 sessionStore.saveSession(socket.sessionID, {
//     //                     userID: socket.userID,
//     //                     username: socket.username,
//     //                     room: socket.room,
//     //                     connected: true,
//     //                 });
//     //
//     //
//     //             }
//     //
//     //         });
//     //
//     //     }
//     // })
//     //
//     //
//     // // aaa
//     //
//     // socket.on("joinAllClientRooms" , (rooms) => {
//     //     socket.join(rooms)
//     //
//     //     rooms.forEach((element, i) => {
//     //
//     //         //socket.join(element);
//     //         console.log("Room joining test: room " +  element)
//     //         //socket.room = element
//     //         let room = rooms[i]
//     //
//     //         // aaa
//     //
//     //         let userJoinRoom = userJoin(socket.userID, socket.username, room, true);
//     //
//     //         socket.emit("updateChat", "INFO", "You have joined " + userJoinRoom.room + " room");
//     //
//     //         io.to(userJoinRoom.room).emit("get room users", {
//     //             room: userJoinRoom.room,
//     //             users: getRoomUsers(userJoinRoom.room)
//     //         })
//     //
//     //
//     //     });
//     //
//     //     // sss
//     //     console.log("Current user room in end " + socket.room)
//     //     socket.room = getCurrentUser(socket.userID).room
//     //     //socket.room = user.room;
//     //
//     // })
//     //
//     // socket.on("updateRoom", function (room) {
//     //     const user = removeUser(socket.userID);
//     //
//     //     socket
//     //         .to(user.room)
//     //         .emit("updateChat", "INFO", user.username + " left room");
//     //     socket.leave(user.room);
//     //     //socket.leave(socket.userID)
//     //
//     //     socket.room = room;
//     //     let newRoomUser = userJoin(socket.userID, socket.username, socket.room, true);
//     //
//     //     socket.join(newRoomUser.room);
//     //     socket.emit("updateChat", "INFO", "You have joined " + newRoomUser.room + " room");
//     //
//     //
//     //     socket
//     //         .to(room)
//     //         .emit(
//     //             "updateChat",
//     //             "INFO",
//     //             socket.username + " has joined " + room + " room"
//     //         );
//     //
//     // });
//     //
//     // io.to(socket.room).emit("get room users", {
//     //     room: socket.room,
//     //     users: getRoomUsers(socket.room)
//     // })
//     //
//     // io.to(socket.room).emit('get updated room users',  {
//     //     room: socket.room,
//     //     users: getRoomUsers(socket.room)
//     // })
//     //
//     //
//     //
//     // // aa
//     // socket.on('unsubscribe', async function(){
//     //     try{
//     //         const user = removeUser(socket.userID);
//     //         // eee
//     //         //console.log('[socket]','leave room :', user.room);
//     //         socket.leave(user.room);
//     //         socket.leave(socket.room)
//     //
//     //         if (user) {
//     //             io.to(user.room).emit('user left', socket.userID);
//     //             io.to(user.room).emit("get room users", {
//     //                 room: user.room,
//     //                 users: getRoomUsers(user.room)
//     //             })
//     //         }
//     //
//     //         const matchingSockets = await io.in(socket.userID).allSockets();
//     //         const isDisconnected = matchingSockets.size === 0;
//     //         if (isDisconnected) {
//     //             // notify other users
//     //             socket.broadcast.emit("user disconnected", socket.userID);
//     //             // update the connection status of the session
//     //             sessionStore.saveSession(socket.sessionID, {
//     //                 userID: socket.userID,
//     //                 username: socket.username,
//     //                 room: socket.room,
//     //                 connected: false,
//     //             });
//     //
//     //             io.to(user.room).emit("get room users", {
//     //                 room: user.room,
//     //                 users: getRoomUsers(user.room)
//     //             })
//     //         }
//     //
//     //         socket.leave(socket.userID)
//     //
//     //     }catch(e){
//     //         console.log('[error]','leave room :', e);
//     //         socket.emit('error','couldnt perform requested action');
//     //     }
//     // })
//     //
//     // socket.on('room users account', () => {
//     //     socket.emit('get room users account', {
//     //         room: socket.room,
//     //         users: getRoomUsers(socket.room)
//     //     })
//     // })
//     //
//     //
//     // // forward the private message to the right recipient (and to other tabs of the sender)
//     // socket.on("private message", ({ content, date, to }) => {
//     //
//     //     /*let message = new Msg({
//     //         room: uu.room,
//     //         content: content,
//     //         username: socket.username,
//     //         date: date
//     //
//     //     })
//     //     message.save();*/
//     //
//     //
//     //     socket.to(to).to(socket.userID).emit("private message", {
//     //         content,
//     //         date,
//     //         from: socket.userID,
//     //         to,
//     //     });
//     //
//     // });
//     // aaa
//
//
//
//     // ---------------------- Uus osa --------------------------
//
//
//     // ChatUserModel.findOne({username: socket.username})
//     //     .then(async user => {
//     //         if (user) {
//     //             console.log("Username already excist!");
//     //
//     //             await ChatUserModel.find({room: socket.room})
//     //                 .then(users => {
//     //                     console.log("Users++++  " + user)
//     //                     //users = user;
//     //                     io.emit("loggedIn", {
//     //                         users: users,  //.map(u => u.username),
//     //                         messages: messages,
//     //                     });
//     //                 })
//     //
//     //
//     //
//     //         }
//     //         if (!user) {
//     //             let user = new ChatUserModel({
//     //                 userID: userID,
//     //                 room: room,
//     //                 username: username,
//     //                 connected: true
//     //             })
//     //
//     //             await user.save();
//     //
//     //             io.emit("userOnline", {
//     //                 room: room,
//     //                 users: userList.getRoomUsers(room)
//     //             });
//     //         }
//     //     })
//     // aaa
//
//     // await ChatUserModel.find({room: data.room})
//     //     .then(user => {
//     //         console.log("Users++  " + user)
//     //         //users = user;
//     //         io.emit("loggedIn", {
//     //             users: user,  //.map(u => u.username),
//     //             messages: messages,
//     //         });
//     //     })
//
//
//     // aaa
//     let username = "";
//     let room = "";
//     let userID = "";
//
//
//
//     socket.on('credentials', async (data) => {
//         //console.log("Room " + data.room)
//         //console.log("username " + data.username)
//         //initUsers(data.room);
//
//         // socket.userID = data.userID;
//         // socket.room = data.room;
//         // socket.username = data.username;
//         // www
//
//
//     })
//
//     // kusedrhgiolöeadhqr
//
//     //initUsers("app");
//
//     //userList.addUserData(userID, username, room, true)
//
//     socket.emit('Username ', socket.username)
//
//
//
//
//     // aaa
//
//
//
//     socket.on("newUser", async (userID, username, room) => {
//         // socket.userID = userID;
//         // socket.username = username;
//         // socket.room = room;
//
//
//
//         io.emit("userOnline", {
//             room: room,
//             users: userList.getRoomUsers(room)
//         });
//
//
//
//         //socket.join(socket.room)
//
//         io.emit("userOnline", {
//             room: room,
//             users: userList.getRoomUsers(room)
//         });
//
//     });
//
//     // ss
//     // aa
//
//     socket.on("msg", async (msg) => {
//         // aaa
//
//
//         console.log("Message: " + msg)
//         console.log("Username " + socket.username)
//         let message = new Msg({
//             user: socket.username,
//             content: msg
//
//         })
//
//         await message.save();
//
//         messages.push(message);
//
//         io.emit("msg", message);
//
//     });
//
//
//     socket.on("disconnect", () => {
//         io.emit("userLeft", socket.username);
//         //console.log("socket.userID " + socket.userID)
//         //users.splice(users.indexOf(socket), 1);
//     });






    // --------------------------------------------






    // notify users upon disconnection
    // socket.on("disconnect", async () => {
    //     const user = removeUser(socket.userID);
    //     if (user) {
    //         io.to(user.room).emit("get room users", {
    //             room: user.room,
    //             users: getRoomUsers(user.room)
    //         })
    //     }
    //
    //
    //
    //     const matchingSockets = await io.in(socket.userID).allSockets();
    //     const isDisconnected = matchingSockets.size === 0;
    //     if (isDisconnected) {
    //         // notify other users
    //         socket.broadcast.emit("user disconnected", socket.userID);
    //         // update the connection status of the session
    //         sessionStore.saveSession(socket.sessionID, {
    //             userID: socket.userID,
    //             username: socket.username,
    //             room: socket.room,
    //             connected: false,
    //         });
    //     }
    //
    // });
//});

// const port = 3011
// server.listen(port, () => {
//     console.log(`Server running on port ${port}`);
// });

module.exports = server
//module.exports = server;