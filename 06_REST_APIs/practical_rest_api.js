// ========================================================================================= //
// PRACTICAL: REST APIs IN EXPRESS
// Run: node 06_REST_APIs/practical.js
// ========================================================================================= //
const express = require('express');
const app = express();
app.use(express.json());

let users = [{ id: 1, name: "Tausif" }];

// [C]REATE: POST Method
app.post('/api/users', (req, res) => {
    const newUser = { id: users.length + 1, name: req.body.name };
    users.push(newUser);
    res.status(201).json(newUser); // 201 Created
});

// [R]EAD: GET Method
app.get('/api/users', (req, res) => {
    res.json(users);
});

// [U]PDATE: PUT Method
app.put('/api/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);
    if(user) {
        user.name = req.body.name;
        res.json(user);
    } else {
        res.status(404).json({ error: "Not Found" });
    }
});

// [D]ELETE: DELETE Method
app.delete('/api/users/:id', (req, res) => {
    users = users.filter(u => u.id !== parseInt(req.params.id));
    res.json({ message: "User Deleted" });
});

app.listen(6001, () => console.log("🚀 REST API Server running on http://localhost:6001"));
