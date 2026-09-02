// ========================================= AUTHENTICATION ======================================= //
// ChatGPT Se Liya Hua Syntex --->
// Authentication ka matlab hai: "Aap kaun hain?" (Pehchaan).
//
// 1. The Stateless Problem: REST APIs ki yaadash nahi hoti. Ek baar login kiya, अगली request par API bhool jayegi.
// 2. Tokens/Sessions: Isliye user ko login hone par ek "Digital Token" diya jata hai.
// 3. Flow: User login details deta hai -> Backend database se verify karta hai -> Agar theek hai, toh Token bhejta hai.

const authExample = () => {
    const express = require('express');
    const app = express();

    app.post('/login', (req, res) => {
        // DB check code here res.status(200).json({ message: "Login successful!" });
    });

    // app.listen(3014, () => console.log("Auth Server...");
};
// authExample();

