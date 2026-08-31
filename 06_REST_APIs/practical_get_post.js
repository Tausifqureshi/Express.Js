// ========================================= GET & POST API ======================================= //
const express = require('express');
const app = express();
app.use(express.json());

let users = [{ id: 1, name: "Tausif" }];

// GET Method (Data Padhna)
app.get('/api/users', (req, res) => {
    res.json(users);
});

// POST Method (Data Banana)
app.post('/api/users', (req, res) => {
    const newUser = { id: users.length + 1, name: req.body.name };
    users.push(newUser);
    res.status(201).json(newUser);
});

app.listen(6015, () => console.log("🚀 GET/POST Server on http://localhost:6015"));
