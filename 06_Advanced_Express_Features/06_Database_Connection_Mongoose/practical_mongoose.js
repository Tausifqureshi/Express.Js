const express = require('express');
const app = express();

app.get('/api/status', (req, res) => {
    res.status(200).json({ message: "Express Server ready to connect to Mongoose Database" });
});

app.use((req, res) => res.status(404).json({ error: "404 Route Not Found" }));

const PORT = 6024;
const server = app.listen(PORT, () => console.log("🚀 Mongoose DB Server running on http://localhost:" + PORT));
server.on('error', (err) => { if (err.code === 'EADDRINUSE') console.log("❌ ERROR: Port " + PORT + " busy hai!"); });
