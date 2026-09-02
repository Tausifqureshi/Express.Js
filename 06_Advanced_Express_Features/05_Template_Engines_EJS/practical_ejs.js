const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.status(200).send("EJS Server Active");
});

app.use((req, res) => res.status(404).json({ error: "404 Route Not Found" }));

const PORT = 6023;
const server = app.listen(PORT, () => console.log("🚀 EJS Server running on http://localhost:" + PORT));
server.on('error', (err) => { if (err.code === 'EADDRINUSE') console.log("❌ ERROR: Port " + PORT + " busy hai!"); });
