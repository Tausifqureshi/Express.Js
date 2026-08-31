// ========================================= COOKIES ======================================= //
// ChatGPT Se Liya Hua Syntex --->
// Frontend ko jab JWT milta hai toh usko kahan save karein?
//
// 1. HttpOnly Cookies: Ye sabse secure jagah hai. Hacker ki JavaScript inko chura (read) nahi sakti (Prevents XSS attacks).
// 2. Auto Attach: Cookies ka fayda ye hai ki jab bhi API call hoti hai, browser khud cookie laga deta hai.

const cookiesExample = () => {
    const express = require('express');
    const app = express();

    app.get('/login', (req, res) => {
        res.cookie('token', 'fake_token', { httpOnly: true });
        res.send("Cookie set!");
    });

    // app.listen(3015, () => console.log("Cookie Server..."));
};
// cookiesExample();
