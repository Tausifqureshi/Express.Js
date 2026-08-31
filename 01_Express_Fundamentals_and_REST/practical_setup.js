const express = require('express');
const app = express();

// ==========================================
// 1. Basic Server Setup
// ==========================================

// Jab koi Home page pe aayega
app.get('/', (req, res) => {
    res.send('<h1>Welcome to Express Fundamentals!</h1>');
});

// Server chalu karna
app.listen(3000, () => {
    console.log('✅ Express Server is running on http://localhost:3000');
});
