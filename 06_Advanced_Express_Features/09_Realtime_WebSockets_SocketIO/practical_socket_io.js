const express = require('express');
const http = require('http');

const app = express();
const server = http.createServer(app);

app.get('/', (req, res) => {
    res.status(200).send("Socket.io Server Active");
});

app.use((req, res) => res.status(404).json({ error: "404 Route Not Found" }));

const PORT = 6027;
server.listen(PORT, () => console.log("🚀 Socket.io Server running on http://localhost:" + PORT));
server.on('error', (err) => { if (err.code === 'EADDRINUSE') console.log("❌ ERROR: Port " + PORT + " busy hai!"); });
