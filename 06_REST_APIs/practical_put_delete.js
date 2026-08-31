// ========================================= PUT & DELETE API ======================================= //
const express = require('express');
const app = express();
app.use(express.json());

let users = [{ id: 1, name: "Tausif" }];

// PUT Method (Data Update Karna)
app.put('/api/users/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if(user) {
        user.name = req.body.name;
        res.json(user);
    } else {
        res.status(404).json({ error: "Not Found" });
    }
});

// DELETE Method (Data Delete Karna)
app.delete('/api/users/:id', (req, res) => {
    users = users.filter(u => u.id !== parseInt(req.params.id));
    res.json({ message: "User Deleted" });
});

app.listen(6016, () => console.log("🚀 PUT/DELETE Server on http://localhost:6016"));
