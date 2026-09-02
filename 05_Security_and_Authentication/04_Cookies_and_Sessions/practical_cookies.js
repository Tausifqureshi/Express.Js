const express = require('express');
const app = express();

app.get('/set-cookie', (req, res) => {
    res.cookie('username', 'TausifQureshi', { httpOnly: true, maxAge: 900000 });
    res.status(200).send("Cookie has been set!");
});

app.get('/get-cookie', (req, res) => {
    res.status(200).send("Reading Cookie from client request headers");
});

app.use((req, res) => res.status(404).json({ error: "404 Route Not Found" }));

const PORT = 6007;
const server = app.listen(PORT, () => console.log("🚀 Cookie Server running on http://localhost:" + PORT));
server.on('error', (err) => { if (err.code === 'EADDRINUSE') console.log("❌ ERROR: Port " + PORT + " busy hai!"); });
