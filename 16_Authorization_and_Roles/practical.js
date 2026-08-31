// ========================================================================================= //
// PRACTICAL: AUTHORIZATION MIDDLEWARE (Roles)
// Run: node 16_Authorization_and_Roles/practical.js
// ========================================================================================= //
const express = require('express');
const app = express();

// Fake User (Man lo Token se ye data aaya hai)
const loggedInUser = { id: 1, name: "Tausif", role: "user" };

// Middleware for checking Admin Role
const isAdmin = (req, res, next) => {
    if (loggedInUser.role === 'admin') {
        next(); // Admin hai, jaane do
    } else {
        res.status(403).json({ error: "Access Denied! Tum admin nahi ho." });
    }
};

// Normal User ka Route (Koi bhi dekh sakta hai)
app.get('/profile', (req, res) => {
    res.send("Welcome to Normal Profile Page!");
});

// Admin Route (Sirf Admin dekh sakta hai, isliye 'isAdmin' lagaya hai)
app.get('/admin-panel', isAdmin, (req, res) => {
    res.send("Welcome to Top Secret Admin Panel!");
});

app.listen(6008, () => console.log("🚀 Role Server on http://localhost:6008"));
