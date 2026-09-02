// ========================================= RESTful CRUD API Practical ======================================= //
// Real-world scenario: Full REST API implementation for User Management (GET, POST, PUT, DELETE).

const express = require('express');

const runRestApiPractical = () => {
    console.log("=== RESTful CRUD API Ka Asli Use ===\n");

    const app = express();
    app.use(express.json());

    // Mock Database
    let users = [
        { id: 1, name: "Tausif Qureshi", role: "Backend Lead" },
        { id: 2, name: "Aman Sharma", role: "Frontend Dev" }
    ];

    // Real Case: GET (Fetch All Users)
    app.get('/api/users', (req, res) => {
        res.status(200).json({ success: true, count: users.length, data: users });
    });

    // Real Case: POST (Create New User)
    app.post('/api/users', (req, res) => {
        const { name, role } = req.body;
        if (!name || !role) {
            return res.status(400).json({ success: false, message: "400 Bad Request: Name and role required!" });
        }

        const newUser = { id: users.length + 1, name, role };
        users.push(newUser);
        res.status(201).json({ success: true, message: "201 Created: User added!", data: newUser });
    });

    // 404 Handler
    app.use((req, res) => {
        res.status(404).json({ success: false, message: "404 Error: API Endpoint not found!" });
    });

    const PORT = 6015;

    app.listen(PORT, () => {
        console.log("🚀 REST CRUD API Server is running! 👉 http://localhost: + PORT");
    }).on('error', (err) => {
        if (err.code === 'EADDRINUSE') {
            console.log("❌ ERROR: Port  + PORT +  pehle se busy hai!");
        } else {
            console.log("❌ SERVER ERROR:", err.message");
        }
    });
};

runRestApiPractical();

