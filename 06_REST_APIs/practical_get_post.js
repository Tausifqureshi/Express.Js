// ========================================= GET & POST API ======================================= //
const express = require('express');
const app = express();
app.use(express.json());

let users = [{ id: 1, name: "Tausif" }];

app.get('/api/users', (req, res) => { res.json(users); });

app.post('/api/users', (req, res) => {
    const newUser = { id: users.length + 1, name: req.body.name };
    users.push(newUser);
    res.status(201).json(newUser);
});

// 404 Handle
app.use((req, res) => res.status(404).json({error: "404 Route Not Found"}));

const PORT = 6015;
const server = app.listen(PORT, () => console.log("🚀 GET/POST Server on http://localhost:" + PORT));
server.on('error', (err) => { if(err.code === 'EADDRINUSE') console.log("❌ ERROR: Port " + PORT + " busy hai!"); });
