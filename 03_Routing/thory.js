// ========================================= ROUTING IN EXPRESS.JS ======================================= //
// ChatGPT Se Liya Hua Syntex --->
// Routing ka matlab hota hai ki jab user alag-alag URLs (jaise '/about', '/contact') par visit kare, toh server usko kya response dega.
//
// 1. HTTP Methods: GET (Dekhna), POST (Bhejna), PUT (Update karna), DELETE (Hatana).
// 2. Route Definition: Express me hum seedha method wale functions use karte hain: app.get('/about', callback).
// 3. The Callback (Handler): Jaise hi URL match hota hai, Express is function ko chala deta hai.

const routingExample = () => {
    const express = require('express');
    const app = express();

    app.get('/home', (req, res) => {
        res.send("Home Page");
    });

    app.post('/login', (req, res) => {
        res.send("Login Page");
    });

    // app.listen(3003, () => console.log("Routing Server running..."));
};
// routingExample();
