const express = require('express')
const app = express()
const path = require('path')
const twilio = require('twilio');
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const fs = require("fs")
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const multer = require('multer');

const cookieSession = require('cookie-session');

const mongoKey = require('./utils/config')
const googleKey = require('./config/keys')

const twilioConfig = require("./utils/config")


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
const proHistoryRouter = require('./routers/pro_history')
const clientHistoryRouter = require('./routers/client_history')
const offerRouter = require('./routers/offers')

const keys = require("./utils/config");


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

app.use(express.static('dist'))

app.use(express.static('uploads'));

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
app.use('/api/pro_history', proHistoryRouter);
app.use('/api/client_history', clientHistoryRouter);
app.use('/api/offer', offerRouter);


require('./models/googleUser');
require('./services/passport');
//
// app.use(
//     cookieSession({
//         maxAge: 30 * 24 * 60 * 60 * 1000,
//         keys: keys.COOKIE_KEY
//     })
// );
app.use(passport.initialize());
app.use(passport.session());
//
//
//
//
require('./routers/googleAuth')(app);



// app.get('/api/test', (req, res) => {
//     res.send("<h1>Hey Socket.io</h1>")
// })


const http = require('http').createServer(app);


const server = require('http').Server(app);
const io = require('socket.io')(server, {
    maxHttpBufferSize: 1e8, // 100 MB
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
const Booking =require('./models/recipients')

const nodemailer = require("nodemailer");
const ChatMessage = require("./models/chatMessages");
//const {CONSTRUCTOR} = require("core-js/internals/promise-constructor-detection");



const rooms = ["123", "1234", "12345"]

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

const sendSms = () => {
    const client = new twilio(twilioConfig.TWILIO_SID, twilioConfig.TWILIO_AUTH_TOKEN);
    return client.messages
        .create({
            body: 'Hey, here is message!',
            from: twilioConfig.TWILIO_PHONE_NUMBER,
            to: '+358407775290'
        })
        .then(sms => console.log(sms, "SMS saatmine õnnestus!"))
        .catch(err => console.log(err, "SMS saatmine ei õnnestunud!"))
}
const router = require('express').Router();

const createMessageImage = (id) => {

    const storage =  {
        dest:  './uploads/chat_images'
    }
    const upload = multer(storage);
    router.post(`/api/create-msg-image`, upload.single('file'), async (req, res) => {
        const url = req.protocol + '://' + req.get('host')
        console.log('filename:', req.file.filename)
        console.log("Chat message id: " + req.params.message_id);
        try {
            const message = await ChatMessage.findByIdAndUpdate(
                id, {image: req.file.filename}, {new: true}
            )
            res.send(message);
        } catch (err) {
            console.lgo("Error: " + err);
            res.status(500).json({
                error: err
            })
        }
    })
}


io.on("connection", (socket) => {
    socket.emit("get current credentials")
    socket.on("current credentials", async (data) => {

        socket.userID = data.userID;
        socket.username = data.username;

        io.emit("user connected",  socket.userID, socket.username);




        socket.emit("get socketID", socket.userID);

        socket.join(socket.userID);
        // Get chat rooms and users in where user is participant to log in user in chat
        let initUsers = [];
        if (socket.userID) {
            await User.findOneAndUpdate({_id: socket.userID}, {isOnline: true}, {new: true});
            
            await ChatUser.updateMany(
                { "member.userID": socket.userID },
                { "$set": { 'member.$.isOnline': true }}
            )

            await ChatUser.find({"member.userID": socket.userID})
                .then(chat => {
                    chat.map(chatRoom => {
                        chatRoom.member.map(async member => {
                            initUsers = [
                                ...initUsers,
                                {
                                    userID: member.userID,
                                    username: member.username,
                                    room: chatRoom.room,
                                    connected: member.isOnline
                                }
                            ]
                        })
                    })





                })
            io.to(socket.userID).emit("userOnline", {
                room: "Space",
                users: initUsers,         //userlist.getRoomUsers(socket.room),
                //messages: messages,
            })
        }



        await Msg.find({receiverID: socket.userID})
            .then(msg => {
                io.to(socket.userID).emit("init new messages", msg)

            })

    })
    // For client to create room and provider in room
    socket.on("create room users", async (data) => {

        const members = new ChatUser({
            room: data.room,
            proID: data.providerID,
            pro: data.pro,
            member: [
                {
                    userID: socket.userID,
                    username: socket.username,
                    isOnline: true
                },
                {
                    userID: data.providerID,
                    username: data.providerUsername,
                    isOnline: true
                }
            ]
        })

        await ChatUser.findOne({room: data.room})
            .then(async item => {
                console.log("What is item??? " + item);
                if (!item) {
                    await members.save();
                }

            })

        socket.room = data.room;
        socket.join(socket.room)



    })

    console.log("Socket room " + socket.room)

    socket.on("update room", async (room, id, username) => {
        console.log("Update xxx")
        //await sendSms();

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


        await ChatUser.find({room: socket.room})
            .then(user => {
                user.map(us => {
                    let room = user.room

                    us.member.map(async rm => {
                        prevRoom = [
                            ...prevRoom,
                            {
                                userID: rm.userID,
                                username: rm.username,
                                room: room,
                                connected: rm.isOnline
                            }
                        ]
                    })

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
                                connected: x.isOnline
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

        socket.to(id).to(socket.userID).emit("accept recipient booking", {
            id,
            booking
        })

    })

    socket.on("send created booking", async (proIdArr, booking) => {
        proIdArr.forEach(id => {
            console.log("Pro id is " + id)
            socket.to(id).to(socket.userID).emit("send booking for order", booking);
        })
    })

    socket.on("send offer", (booking) => {
        console.log("Send offer to: " + booking.user.id);
        socket.to(booking.user.id).to(socket.userID).emit("send offer", booking);
    })

    socket.on("confirm offer", (id, booking) => {
        socket.to(id).to(socket.userID).emit("confirm sent offer", booking)
    })

    socket.on("archive booking", ({id, room, booking}) => {
        console.log("Roomxxx " + room);
        socket.to(id).to(socket.userID).emit("remove archived chat nav user", {
            room,
            booking
        })
    })

    socket.on("reject booking by pro", async ({id, room, pro, booking, reason}) => {
        console.log("xxxxxxx " + id)
        socket.to(id).to(socket.userID).emit("reject recipient booking", {
            id,
            room,
            pro,
            booking,
            reason
        })
    })

    socket.on("reject booking by client", async ({id, room, booking, reason}) => {
        console.log("booking rejected by client " + booking.id);
        // const recipient = await Booking.findOne({_id: booking.id})
        //     .then(item => {
        //         item.populate('user');
        //         console.log("Recipient username - " + item.user.username);
        //     })

        socket.to(id).to(socket.userID).emit("booking rejected by client", {
            id,
            room,
            booking,
            reason
        })
    })

    socket.on("map search report", (data) => {
        data.forEach(pid => {
            console.log("...... " + pid.id)
            //const content = `Juuri nyt: Etsitaan ammattilaista - ${pid.pro} - ${pid.dist} km päässä sijainnistasi!`
            socket.to(pid.id).to(socket.userID).emit("map pro search", pid);
        })

    })



    socket.on("private server message", async ({ content, img, file, date, to }) => {
        console.log("Message file " + file)

        // const data = new FormData();
        // data.append('file', file, file.name)

        let inlineMessage;
        let chatIndex;
        await User.findOne({_id: to})
            .then(async user => {
                if (user.isOnline) {
                    console.log("User " + user.username + " is online now!")
                    let sent_message = new Msg({
                        room: socket.room,
                        userID: socket.userID,
                        receiverID: to,
                        username: socket.username,
                        //content: content.body,
                        content: {msg_status: content.msg_status, body: content.body},
                        //image: file !== null ? file : null,
                        image: file !== null ? file : null,
                        is_db_image: file !== null ? true : false,
                        date: date,
                        status: "sent"
                    });
                   inlineMessage = chatIndex =  await sent_message.save()

                } else {
                    console.log("User " + user.username + " is not online now!")
                    let unsent_message = new Msg({
                        room: socket.room,
                        userID: socket.userID,
                        receiverID: to,
                        username: socket.username,
                        //content: content.body,
                        content: {msg_status: content.msg_status, body: content.body},
                        image: file !== null ? file : null,
                        is_db_image: file !== null ? true : false,
                        date: date,
                        status: "unsent"
                    });
                    chatIndex = await unsent_message.save()

                    const message = `${socket.username} on lähettänyt uuden viestin. Voit katsoa sen <a href="www.delfi.ee">täältä</a>.`
                    const html = "<p><a href='http://www.delfi.ee'>Täällä</a></p>"
                    await emailMessage (user.email, socket.username, message, html);
                    
                }


            })
        // to(to).to(socket.userID)
        //console.log("inline id ....... " + inlineMessage.id);
        if (content.msg_status === "file") {
            //const buffer = Buffer.from(content.blob)
            //require('./routers/chatMessages/')(app);
            //createMessageImage(chatIndex);
        }
        const chatImg = content.msg_status === "file" ? img.toString('base64') : null;
        socket.to(socket.room).emit("private message", {
            content,
            chatImg,
            is_db_image: false,
            username: socket.username,
            date,
            from: socket.userID,
            to,
        });
        socket.to(to).to(socket.userID).emit("new message", {
            id: inlineMessage.id,
            inline: true,
            room: socket.room,
            username: socket.username,
            userID: socket.userID,
            receiverID: to,
            content: content.body,
            chatImg,
            date: date
        });


    });

    socket.on("chat image", async image => {
        socket.to(socket.room).emit('image', image.toString('base64'));
    })

    socket.on("user leave", async () => {

        await User.findOneAndUpdate({_id: socket.userID}, {isOnline: false}, {new: true});
        await ChatUser.updateMany(
            { "member.userID": socket.userID },
            { "$set": { 'member.$.isOnline': false }}
        )

        socket.leave(socket.userID);

    })

    socket.on("disconnect", async () => {


        await User.findOneAndUpdate({_id: socket.userID}, {isOnline: false}, {new: true});
        await ChatUser.updateMany(
            { "member.userID": socket.userID },
            { "$set": { 'member.$.isOnline': false }}
        )

        io.emit("userLeft",  socket.userID, socket.username, socket.room);

    });
});

module.exports = server