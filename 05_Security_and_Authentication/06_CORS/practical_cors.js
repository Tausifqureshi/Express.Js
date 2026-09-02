const express = require('express');
const app = express();

app.get('/api/data', (req, res) => {
    res.status(200).json({ message: "Hello React Frontend! CORS is configured." });
});

app.use((req, res) => res.status(404).json({ error: "404 Route Not Found" }));

const PORT = 6012;
const server = app.listen(PORT, () => console.log("🚀 CORS Server running on http://localhost:" + PORT));
server.on('error', (err) => { if (err.code === 'EADDRINUSE') console.log("❌ ERROR: Port " + PORT + " busy hai!"); });
