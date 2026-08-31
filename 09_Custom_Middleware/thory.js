// ========================================= CUSTOM MIDDLEWARE ======================================= //
// ChatGPT Se Liya Hua Syntex --->
// Apna khud ka banaya hua function jo Request aur Response ke beech me checks kare.
//
// 1. The Structure: (req, res, next) iske 3 parameters hote hain.
// 2. The next() Function: Agar checks pass ho gaye, toh 
ext() bulana lazmi hai warna request hang ho jayegi.
// 3. Usage: Auth check karne, logging karne, ya data modify karne me kaam aata hai.

const customMiddlewareExample = () => {
    const express = require('express');
    const app = express();

    const myGuard = (req, res, next) => {
        console.log("Checking User...");
        next(); // Sab theek hai, aage bhejo
    };

    app.use(myGuard); // Global use

    app.get('/', (req, res) => res.send("Welcome"));

    // app.listen(3012, () => console.log("Custom Middleware Server..."));
};
// customMiddlewareExample();
