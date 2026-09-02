const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.status(200).send("<h1>Static Files Server Active!</h1>");
});

app.use((req, res) => res.status(404).json({ error: "404 Route Not Found" }));

const PORT = 6022;
const server = app.listen(PORT, () => console.log("🚀 Static Server running on http://localhost:" + PORT));
server.on('error', (err) => { if (err.code === 'EADDRINUSE') console.log("❌ ERROR: Port " + PORT + " busy hai!"); });
