import { io } from "socket.io-client";

//const URL = "http://localhost:3001";
const URL = "https://line-app-pro.onrender.com/"

//const socket = io(URL, { autoConnect: false });

const connectionOptions = {
    "force new connection": true,
    "reconnectionAttempts": "Infinity",
    "timeout": 10000,
    "transports": ["websocket"]
};

// aaa

const socket = io.connect(URL, connectionOptions);

socket.onAny((event, ...args) => {
    console.log(event, args);
});

export default socket;