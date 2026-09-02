// ========================================= REALTIME WEBSOCKETS (SOCKET.IO) ======================================= //
// ChatGPT Se Liya Hua Syntex --->
// Normal HTTP me client request bhejta hai tabhi server response deta hai. Lekin Real-time apps (jaise WhatsApp, Live Cricket Scores) me Server khud client ko Bina Request ke data bhejta hai.
//
// 1. WebSockets: Full-duplex bidirectional communication channel.
// 2. Integration: Node ka native http module banakar Express app ko server me pass karte hain aur us par socket.io bind karte hain.

const socketIoExample = () => {
    const express = require('express');
    const http = require('http');
    
    const app = express();
    const server = http.createServer(app);
    
    // npm install socket.io zaroori hai
    // const { Server } = require("socket.io");
    // const io = new Server(server);

    // io.on('connection', (socket) => {
    //     console.log('User connected with ID:', socket.id");
    //     socket.on('chatMessage', (msg) => io.emit('message', msg));
    // });

    app.get('/', (req, res) => { res.status(200).send("Express Server with Socket.io Integration Ready!");
    });

    app.use((req, res) => res.status(404).json({ error: "404 Route Not Found" }));

    const PORT = 3027;
    // server.listen(PORT, () => console.log("Socket.io Server running on http://localhost: + PORT)");
    // server.on('error', (err) => { if (err.code === 'EADDRINUSE') console.log("Port busy hai!"); });
};
// socketIoExample();

