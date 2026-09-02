const express = require('express');
const app = express();
app.use(express.json());

app.post('/register', (req, res) => {
    const { name, email } = req.body;
    if (!name || !email) {
        return res.status(400).json({ error: "Name and email required" });
    }
    res.status(201).json({ message: "User registered successfully!", data: req.body });
});

app.use((req, res) => res.status(404).json({ error: "404 Route Not Found" }));

const PORT = 6009;
const server = app.listen(PORT, () => console.log("🚀 Validation Server running on http://localhost:" + PORT));
server.on('error', (err) => { if (err.code === 'EADDRINUSE') console.log("❌ ERROR: Port " + PORT + " busy hai!"); });
