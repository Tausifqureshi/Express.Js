const express = require('express');
const app = express();

const asyncHandler = (fn) => (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
};

app.get('/users', asyncHandler(async (req, res) => {
    res.status(200).json({ success: true, users: [{ id: 1, name: "Tausif" }] });
}));

app.use((req, res) => res.status(404).json({ error: "404 Route Not Found" }));

const PORT = 6025;
const server = app.listen(PORT, () => console.log("🚀 Async Handler Server running on http://localhost:" + PORT));
server.on('error', (err) => { if (err.code === 'EADDRINUSE') console.log("❌ ERROR: Port " + PORT + " busy hai!"); });
