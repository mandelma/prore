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
const chatUsers = require('./routers/chatUsers')
const messageRouter = require('./routers/messages')
const chatMessageRouter = require('./routers/chatMessages')
const resetAuthRouter = require('./routers/resetAuth')
const mailRouter = require('./routers/mailer')
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
//app.use(express.static(path.join(__dirname, 'uploads')));

// app.use((req,res,next)=>{
//     res.setHeader('Access-Control-Allow-Origin','*');
//     res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,PATCH,DELETE');
//     res.setHeader('Access-Control-Allow-Methods','Content-Type','Authorization');
//     next();
// })



// Serve static assets from the build client (images, etc)
//app.use(serveStatic(path.join(__dirname, '/dist')))


//const staticFileMiddleware = express.static(path.join(__dirname + '/dist'))

//app.use(express.static(__dirname + '/public'));

app.use(express.static('dist'))

app.use(express.static('uploads'));

//app.use('/uploads', express.static('uploads'));


//app.use(bodyParser.json())

//app.use(bodyParser.urlencoded({extended: true}));
//app.use(bodyParser.urlencoded({ extended: false }))
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
app.use('/api/chatusers', chatUsers);
app.use('/api/chatmessages', chatMessageRouter);
app.use('/api/reset_pw', resetAuthRouter);
app.use('/api/new_message', mailRouter);

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

//const { InMemorySessionStore } = require("./sessionStore");
//const sessionStore = new InMemorySessionStore();

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

const Msg = require('./models/chatMessages')
const User = require('./models/users')
const Provider = require('./models/providers')

const ChatUser = require('./models/chatUsers')
const Booking = require('./models/recipients')
const nodemailer = require("nodemailer");


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

const ChatUserSchema = mongoose.Schema({
    userID: String,
    room: String,
    username: String,
    avatar: String,
    current: Boolean,
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

const emailMessage =  async (mail, sender, message, html) => {
    const transporter = nodemailer.createTransport({
        //service: 'gmail',
        service: "Gmail",
        host: "smtp.gmail.com",
        port: 465,
        secure: false,
        auth: {
            user:  "prokeikkatori.info@gmail.com",     //'your-email@gmail.com',
            pass:  "wtcblhhdirwmnzfv"         //'your-email-password',
        },
    });
    const mailOptions = {
        from: "<prokeikkatori.info@gmail.com>",          //'your-email@gmail.com',
        to: mail,
        subject: `Uusi viesti käyttäjältä ${sender}`,
        text: message,
        html: html
    };
    await transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);

        } else {
            console.log(`Email sent: ${info.response}`);

        }
    });
}


let users = []
// aaa

let onlineUsers = {};

let roomUsers = [];

let conversation = [];

io.on("connection", (socket) => {
    socket.emit("get current credentials")
    socket.on("current credentials", async (data) => {
        //console.log("Is Avatar in credentials " + data.avatar)
       //ocket.avatar = data.avatar;
        socket.userID = data.userID;
        socket.username = data.username;

        console.log("Socket user ID " + socket.userID)

        //socket.to(data.userID).to(socket.userID).emit("connect user", socket.userID);



        //socket.room = data.room;

        //await chatUsers.
        await User.findOneAndUpdate({_id: socket.userID}, {isOnline: true}, {new: true});

        await ChatUser.updateMany({ username: socket.username }, { $set: { connected: true } });

        //await ChatUserModel.findOneAndUpdate({userID: socket.userID, room: socket.room}, {connected: true}, {new: true})
        //await ChatUserModel.find({userID: socket.userID}, {connected: true}, {new: true})


        let userRooms = [];

        await ChatUser.find({userID: data.userID})
            .then(participant => {
                userList.addUserData(participant.userID, participant.username, participant.room, connected)
                participant.map(section => {

                    userRooms = [
                        ...userRooms,
                        {
                            userID: section.userID,
                            username: section.username,
                            room: section.room,
                            connected
                        }
                    ]
                })

            })
        userRooms.forEach((item) => {
            console.log("All rooms: " + item.room)
            socket.join(item.room);
            io.to(item.room).emit("userOnline", {
                room: item.room,
                users: userRooms.filter(f => f.room === item.room)
            })
        })

        socket.emit("get socketID", socket.userID);


        //socket.join(socket.room)

        socket.join(socket.userID);

        await Msg.find({receiverID: socket.userID})
            .then(msg => {
                io.to(socket.userID).emit("init new messages", msg)

            })

    })
    // For client to create room and provider in room
    socket.on("create room users", async (data) => {

        // console.log("Provider chat name " + data.providerUsername)
        // console.log("Provider chat id " + data.providerID)
        // console.log("room --- " + data.room)

        const new_room = new ChatUser({
            room: data.room,
            self: {
                userID: socket.userID,
                username: socket.username
            },
            participant: {
                userID: data.providerID,
                username: data.providerUsername
            }
        })

        const members = new ChatUser({
            room: data.room,
            proID: data.status, //data.providerID,
            member: [
                {
                    userID: socket.userID,
                    username: socket.username
                },
                {
                    userID: data.providerID,
                    username: data.providerUsername
                }
            ]
        })


        // let me = new ChatUser({
        //     userID: socket.userID,
        //     room: data.room,
        //     username: socket.username
        // })
        //
        // let tmi = new ChatUser({
        //     userID: data.providerID,
        //     room: data.room,
        //     username: data.providerUsername
        // })

        // await ChatUser.findOne({userID: socket.userID, room: data.room})
        //     .then(async user => {
        //         if (!user) {
        //             await me.save();
        //         }
        //     })
        //
        // await ChatUser.findOne({userID: data.providerID, room: data.room})
        //     .then(async user => {
        //
        //         if (!user) {
        //             await tmi.save();
        //         }
        //     })

        await ChatUser.findOne({room: data.room})
            .then(async item => {

                if (!item) {
                    await members.save();
                    // const isRoomExcist = item.room === data.room;
                    // console.log("Rooooom " + isRoomExcist)
                    // if (!isRoomExcist) {
                    //     //await new_room.save();
                    //     //console.log("Rooooom " + item.room)
                    // }
                }

            })

        socket.room = data.room;
        socket.join(socket.room)

    })

    console.log("Socket room " + socket.room)

    // socket.on("avatar", async (avatar) => {
    //     socket.emit("update chat avatar", avatar);
    //
    //     let avatared = [];
    //     await ChatUser.find({room: socket.room})
    //         .then(user => {
    //             user.map(aa => {
    //                 avatared.push(aa)
    //             })
    //         })
    //     io.to(socket.userID).emit("user avatar update", {
    //         room: socket.room,
    //         users: avatared
    //     })
    //     socket.to(socket.userID).emit("get avatar blog", avatar)
    //
    // })




    socket.on("update room", async (room, id, username) => {

        // await ChatUser.findOneAndUpdate({userID: socket.userID, room: socket.room}, {connected: false}, {new: true})
        // await ChatUser.findOneAndUpdate({userID: socket.userID, room: room}, {connected: true}, {new: true})

        //await ChatUserModel.findOneAndUpdate({userID: socket.userID, room: room}, {avatar: socket.avatar}, {new: true})


        socket
            .to(socket.room)
            .emit("updateChat", "INFO", socket.username + " left room");
        socket.leave(socket.room);


        socket.join(room);


        socket
            .to(room)
            .emit(
                "updateChat",
                "INFO",
                socket.username + " has joined " + room + " room"


            );

        let prevRoom = []

        // let conn;
        // const member = await User.findOne({_id: });
        // // conn = member.isOnline;
        // console.log("Conn... " + member)

        await ChatUser.find({room: socket.room})
            .then(user => {
                user.map(us => {
                    let room = user.room

                    us.member.map(async rm => {
                        // let conn;
                        // const member = await User.findOne({_id: rm.userID});
                        // conn = member.isOnline;
                        prevRoom = [
                            ...prevRoom,
                            {
                                userID: rm.userID,
                                username: rm.username,
                                room: room,
                                //connected: true
                            }
                        ]
                    })

                    //prevRoom.push(us)
                })

            })

        io.to(socket.room).emit("userOnline", {
            room: socket.room,
            users: prevRoom,         //userlist.getRoomUsers(socket.room),
            //messages: messages,
        })

        let firstRoomMessages = []

        await Msg.find({room: socket.room}).then( res => firstRoomMessages = res)

        firstRoomMessages.forEach(frm => {
            if (frm.status === "unsent") {
                console.log("Unsent message " + frm.content)
            }
        })

        io.to(socket.room).emit('messages', {
            msg: firstRoomMessages
        });

        socket.room = room;

        //await ChatUser.findOneAndUpdate({userID: socket.userID, room: room}, {connected: true, avatar: socket.avatar}, {new: true})

        let nextRoom = []
        await ChatUser.find({room: room})
            .then(user => {
                user.map(aa => {
                    let room = aa.room

                    //nextRoom.push(aa)
                    aa.member.map(async x => {

                        nextRoom = [
                            ...nextRoom,
                            {
                                userID: x.userID,
                                username: x.username,
                                room: room,
                                //connected: true
                            }
                        ]
                    })

                })
            })


        io.to(room).emit("userOnline", {
            room: socket.room,
            users: nextRoom,         //userlist.getRoomUsers(room),
            messages: messages,
        })

        let secondRoomMessages = []

        await Msg.find({room: room}).then( res => secondRoomMessages = res)

        io.to(socket.room).emit('messages', {
            msg: secondRoomMessages
        });


    })

    socket.on("test", data => {
        console.log("about connection " + data)
    })

    socket.on("join multi rooms" , (room_list) => {
        //let rooms = [room, socket.room]
        socket.join(room_list)

        room_list.forEach((element, i) => {

            //socket.join(element);
            console.log("Joining room: " +  element)
            //socket.room = element
            let room = rooms[i]

            socket.emit("updateChat", "INFO", "You have joined " + room + " room");

            io.to(room).emit("userOnline", {
                room: room,
                users: userlist.getRoomUsers(room),
                messages: messages,
            })


        });

    })

    // Create chat user after log in if common room not yet exist
    socket.on("new chat user",  async (data) => {
        console.log("data usernname " + data.username)
        userList.addUserData(data.userID, data.username, data.room, connected)

        socket.join(userList.getRoom());

        let joinedUser = new ChatUserModel({
            userID: data.userID,
            room: data.room,
            username: data.username,
            connected: true
        })



        await ChatUserModel.findOne({userID: data.userID})
            .then(async user => {
                if (!user)
                    await joinedUser.save();
            })

        io.to(userList.getRoom()).emit("userOnline", {
            room: userList.getRoom(),
            users: userList.getRoomUsers(userList.getRoom())
        })
    });

    socket.on("accept provider", ({id, booking}) => {
        //console.log("Move in server to " + to)
        socket.to(id).to(socket.userID).emit("accept provider", {
            id,
            username: socket.username,
            from: socket.userID,
            booking: booking,
            //room
        })
    })

    socket.on("accept recipient booking", async ({id, booking}) => {
        console.log("Accept recipient " + id + " " + booking.header)
        //let recipientID;

        // await Booking.findOne({_id: booking.id})
        //     .then(deal => {
        //         recipientID = deal.user.id
        //
        //     })
        //console.log("Recipient id " + recipientID)
        socket.to(id).to(socket.userID).emit("accept recipient booking", {
            id,
            booking
        })
        // socket.to(id).to(socket.userID).emit("accept recipient", {
        //     id,
        //     booking
        // })
    })

    socket.on("reject recipient booking", async ({id, pro, booking}) => {
        console.log("xxxxxxx " + id)
        socket.to(id).to(socket.userID).emit("reject recipient booking", {
            id,
            pro,
            booking
        })
    })

    socket.on("map search report", (data) => {
        data.forEach(pid => {
            console.log("...... " + pid.id)
            //const content = `Juuri nyt: Etsitaan ammattilaista - ${pid.pro} - ${pid.dist} km päässä sijainnistasi!`
            socket.to(pid.id).to(socket.userID).emit("map pro search", pid);
        })

    })


    socket.on("private message", async ({ content, date, to }) => {

        await User.findOne({_id: to})
            .then(async user => {
                if (user.isOnline) {
                    console.log("User " + user.username + " is online now!")
                    let sent_message = new Msg({
                        room: socket.room,
                        userID: socket.userID,
                        receiverID: to,
                        username: socket.username,
                        content: content,
                        date: date,
                        status: "sent"
                    });
                    await sent_message.save()

                } else {
                    console.log("User " + user.username + " is not online now!")
                    let unsent_message = new Msg({
                        room: socket.room,
                        userID: socket.userID,
                        receiverID: to,
                        username: socket.username,
                        content: content,
                        date: date,
                        status: "unsent"
                    });
                    await unsent_message.save()

                    const message = `${socket.username} on lähettänyt uuden viestin. Voit katsoa sen <a href="www.delfi.ee">täältä</a>.`
                    const html = "<p><a href='http://www.delfi.ee'>Täällä</a></p>"
                    await emailMessage (user.email, socket.username, message, html);

                    // socket.to(to).to(socket.userID).emit("new message", {
                    //     id: randomId(),
                    //     inline: true,
                    //     room: socket.room,
                    //     username: socket.username,
                    //     userID: socket.userID,
                    //     receiverID: to,
                    //     content: content,
                    //     date: date
                    // });
                }
            })

        socket.to(to).to(socket.userID).emit("private message", {
            content,
            username: socket.username,
            date,
            from: socket.userID,
            to,
        });

        // socket.to(to).to(socket.userID).emit("new message", socket.room);
        socket.to(to).to(socket.userID).emit("new message", {
            id: randomId(),
            inline: true,
            room: socket.room,
            username: socket.username,
            userID: socket.userID,
            receiverID: to,
            content: content,
            date: date
        });

    });

    socket.on("user leave", async () => {
        // await User.findOneAndUpdate({_id: socket.userID, room: socket.room}, {isOnline: false}, {new: true});
        // await ChatUserModel.findOneAndUpdate({userID: socket.userID, room: socket.room}, {connected: false}, {new: true});
        //await ChatUser.updateMany({ username: socket.username }, { $set: { connected: false } });
        await User.findOneAndUpdate({_id: socket.userID}, {isOnline: false}, {new: true});


        socket.leave(socket.userID);

    })

    socket.on("disconnect", async () => {


        await User.findOneAndUpdate({_id: socket.userID}, {isOnline: false}, {new: true});

        //await ChatUserModel.findOneAndUpdate({userID: socket.userID, room: socket.room}, {connected: false}, {new: true});
        //await ChatUser.updateMany({ username: socket.username }, { $set: { connected: false } });
        io.emit("userLeft",  socket.userID, socket.username, socket.room);

    });
});

module.exports = server
//module.exports = server;