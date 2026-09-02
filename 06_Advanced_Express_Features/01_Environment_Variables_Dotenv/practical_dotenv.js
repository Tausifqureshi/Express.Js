require('dotenv').config();
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    const secret = process.env.MY_SECRET || "DefaultSecretKey";
    res.status(200).send("<h1>Secret Key: " + secret + "</h1>");
});

app.use((req, res) => res.status(404).json({ error: "404 Route Not Found" }));

const PORT = process.env.PORT || 6021;
const server = app.listen(PORT, () => console.log("🚀 Dotenv Server running on http://localhost:" + PORT));
server.on('error', (err) => { if (err.code === 'EADDRINUSE') console.log("❌ ERROR: Port " + PORT + " busy hai!"); });
