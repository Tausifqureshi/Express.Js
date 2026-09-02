const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.status(200).send("Multiple File Upload Endpoint");
});

app.use((req, res) => res.status(404).json({ error: "404 Route Not Found" }));

const PORT = 6018;
const server = app.listen(PORT, () => console.log("🚀 Multiple Upload Server running on http://localhost:" + PORT));
server.on('error', (err) => { if (err.code === 'EADDRINUSE') console.log("❌ ERROR: Port " + PORT + " busy hai!"); });
