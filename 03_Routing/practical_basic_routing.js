// ========================================= BASIC ROUTING ======================================= //
// Node.js me if-else lagana padta tha, Express me direct methods hain.
const express = require('express');
const app = express();

app.get('/about', (req, res) => {
    res.send("<h1>ℹ️ About Us</h1><p>Express Routing is easy!</p>");
});

app.get('/contact', (req, res) => {
    res.send("<h1>📞 Contact Us</h1>");
});

app.listen(3003, () => console.log("🚀 Basic Routing Server on http://localhost:3003"));
