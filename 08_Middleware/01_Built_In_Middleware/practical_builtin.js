// ========================================================================================= //
// PRACTICAL: BUILT-IN MIDDLEWARE
// Run: node 01_Built_In_Middleware/practical_builtin.js
// ========================================================================================= //

const express = require('express');
const path = require('path');
const app = express();

// Middleware 1: express.json()
// Ye middleware lagane ke baad hi hum POST request ka data eq.body se padh sakte hain
app.use(express.json());

// Middleware 2: express.urlencoded()
// URL encoded form data parse karne ke liye
app.use(express.urlencoded({ extended: true }));

// Test JSON Parsing (POSTMAN se JSON body bhejna)
app.post('/api/data', (req, res) => {
    console.log("JSON Data aaya:", req.body);
    res.json({ message: "Data mil gaya", data: req.body });
});

app.listen(4001, () => {
    console.log("🚀 Server running on http://localhost:4001");
    console.log("Test JSON: POSTMAN se POST request bhejo /api/data par");
});
