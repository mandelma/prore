const app = require('./app')
//import app from './app'
//const http = require('./http')

const config = require('./utils/config')
const logger = require('./utils/logger')





const PORT = process.env.port || 3001


// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`)
// })

// config.PORT
app.listen(PORT, () => {
    logger.info(`Server running on port ${PORT}`)

})


// const io = require('socket.io')(server, {
//     cors: {
//
//         //origin: 'http://localhost:8080',
//         methods: ["GET", "POST"],
//         transports: ['websocket'],
//         credentials: true,
//         // origins: [
//         //     'http://localhost:8080'
//         //  //   '*'
//         // ]
//     },
//     allowEIO3: true,
// });
//
// const crypto = require("crypto");
// const randomId = () => crypto.randomBytes(8).toString("hex");
//
// const { InMemorySessionStore } = require("./sessionStore");
// const sessionStore = new InMemorySessionStore();
//
// const formatMessage = require("./utils/messages");
//
// const {
//     userJoin,
//     getCurrentUser,
//     userLeave,
//     getRoomUsers,
// } = require("./utils/users");
//
// const botName = "ChatCord Bot";
//
// io.use((socket, next) => {
//     const sessionID = socket.handshake.auth.sessionID;
//
//     if (sessionID) {
//         const session = sessionStore.findSession(sessionID);
//         if (session) {
//             socket.sessionID = sessionID;
//             socket.roomName =   session.roomName;      //session.roomID;
//             socket.userID = session.userID;
//             socket.username = session.username;
//             return next();
//         }
//     }
//     // ------------
//
//     // -----------
//     const username = socket.handshake.auth.username;
//     const room = socket.handshake.auth.room;
//
//     if (!username) {
//         return next(new Error("invalid username"));
//     }
//     socket.sessionID = randomId();
//
//     socket.userID = randomId();
//     socket.username = username;
//     socket.roomName = room
//     next();
// });
//
// io.on("connect", async (socket) => {
//
//     //console.log(io.of("/").adapter);
//
//     //socket.join(socket.userID)
//     socket.on("joinRoom", ({ username, room }) => {
//         //const user = userJoin(socket.id, username, room);
//         const user = userJoin(socket.userID, socket.username, socket.roomName);
//         user.connected = true;
//         //console.log("User room " + user.room)
//         socket.join(user.room);
//         socket.join(socket.userID)
//
//         // Welcome current user
//         socket.emit("message", formatMessage(botName, "Welcome to ChatCord!"));
//
//         // Broadcast when a user connects
//         socket.broadcast
//             .to(user.room)
//             .emit(
//                 "message",
//                 formatMessage(botName, `${user.username} has joined the chat`)
//             );
//
//         // Send users and room info
//         io.to(user.room).emit("roomUsers", {
//             room: user.room,
//             users: getRoomUsers(user.room),
//         });
//         console.log("Users in server: " + getRoomUsers(user.room));
//     });
//
//     socket.on("private message", ({ content, date, to }) => {
//         const user = getCurrentUser(socket.UserID);
//
//         socket.to(to).emit("private message", {
//             content,
//             date,
//             // from: socket.userID,
//             from: socket.userID,
//             to,
//         });
//     });
//
//
//
//     socket.on("chatMessage", (msg) => {
//         const user = getCurrentUser(socket.UserID);
//
//         io.to(user.room).emit("message", formatMessage(user.username, msg));
//     });
//
//     // Runs when client disconnects
//     socket.on("disconnect", async () => {
//         const user = userLeave(socket.userID);
//         console.log("Uuuuuserr " + user.username)
//         if (user) {
//             io.to(user.room).emit(
//                 "message",
//                 formatMessage(botName, `${user.username} has left the chat`)
//             );
//
//             // Send users and room info
//             io.to(user.room).emit("roomUsers", {
//                 room: user.room,
//                 users: getRoomUsers(user.room),
//             });
//
//
//
//         }
//
//         const matchingSockets = await io.in(socket.userID).allSockets();
//         const isDisconnected = matchingSockets.size === 0;
//         if (isDisconnected) {
//             // notify other users
//
//             //socket.to.broadcast.emit("user disconnected", socket.userID);
//
//             //socket.leave(socket.userID)
//             // update the connection status of the session
//             sessionStore.saveSession(socket.sessionID, {
//                 userID: socket.userID,
//                 roomName: socket.roomName,
//                 username: socket.username,
//                 connected: false,
//             });
//
//         }
//
//     });
//
//
//     sessionStore.saveSession(socket.sessionID, {
//         userID: socket.userID,
//         roomName: socket.roomName,
//         username: socket.username,
//         connected: true,
//     });
//
//
//     // emit session details
//     socket.emit("session", {
//         sessionID: socket.sessionID,
//         //room: 5555,
//         roomName: socket.roomName,
//         userID: socket.userID,
//     });
//
//     //const users = [];
//
//     // abcdf
// });
