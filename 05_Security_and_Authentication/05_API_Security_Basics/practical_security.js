const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.status(200).send("API Security Enabled with Helmet & Rate-Limiting!");
});

app.use((req, res) => res.status(404).json({ error: "404 Route Not Found" }));

const PORT = 6011;
const server = app.listen(PORT, () => console.log("🚀 Security Server running on http://localhost:" + PORT));
server.on('error', (err) => { if (err.code === 'EADDRINUSE') console.log("❌ ERROR: Port " + PORT + " busy hai!"); });
