const express = require('express');
const app = express();

const reqUser = { id: 1, name: "Tausif", role: "user" };

const isAdmin = (req, res, next) => {
    if (reqUser.role === 'admin') {
        next();
    } else {
        res.status(403).json({ error: "Access Denied! You are not an Admin." });
    }
};

app.get('/public', (req, res) => {
    res.status(200).send("Public Page: Anyone can see this!");
});

app.get('/dashboard', isAdmin, (req, res) => {
    res.status(200).send("Admin Dashboard: Welcome Boss!");
});

app.use((req, res) => res.status(404).json({ error: "404 Route Not Found" }));

const PORT = 6008;
const server = app.listen(PORT, () => console.log("🚀 Role Server running on http://localhost:" + PORT));
server.on('error', (err) => { if (err.code === 'EADDRINUSE') console.log("❌ ERROR: Port " + PORT + " busy hai!"); });
