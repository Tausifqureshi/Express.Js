// ========================================================================================= //
// PRACTICAL: SETTING HTTP-ONLY COOKIES
// Note: npm install cookie-parser
// Run: node 15_Cookies/practical.js
// ========================================================================================= //
const express = require('express');
const app = express();

app.get('/set-cookie', (req, res) => {
    // HttpOnly aur Secure flags lagane se hacker (XSS) is cookie ko chura nahi sakta
    res.cookie('token', 'eyJhbGciOiJIUzI1Ni...', { 
        httpOnly: true, 
        secure: false, // Localhost pe HTTP hota hai isliye false, Production(HTTPS) me True hoga
        maxAge: 3600000 // 1 hour
    });
    res.send("Cookie set ho gayi! Apne browser ke Application/Storage tab me check karo.");
});

app.get('/clear-cookie', (req, res) => {
    res.clearCookie('token');
    res.send("Cookie delete (Logout) ho gayi!");
});

app.listen(6007, () => console.log("🚀 Cookie Server on http://localhost:6007/set-cookie"));
