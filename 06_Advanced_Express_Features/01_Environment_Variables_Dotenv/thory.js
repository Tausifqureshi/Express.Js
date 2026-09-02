// ========================================= ENVIRONMENT VARIABLES (.env) ======================================= //
// ChatGPT Se Liya Hua Syntex --->
// Jab hum code ko Github par daalte hain, toh hum apna Database password ya Secret Key sabko nahi dikhana chahte.
// 
// 1. .env File: Hum ek choti si file banate hain jiska naam sirf .env hota hai (iska koi naam nahi, sirf extension hai).
// 2. dotenv Package: Ye package us .env file ko padh kar saara data process.env me daal deta hai.
// 3. .gitignore: Hum hamesha apni .env file ko .gitignore me likhte hain taaki wo Github par upload na ho.

const dotenvExample = () => {
    // Isko chalane ke liye NPM package chahiye: npm install dotenv
    // require('dotenv').config();

    const express = require('express');
    const app = express();

    app.get('/', (req, res) => {
        // Asli code me hum port ko process.env.PORT se uthate hain
        const key = process.env.SECRET_KEY || "Default_Key_If_Not_Found"; res.status(200).send("Secret Key is hidden in env file! " + key);
    });

    app.use((req, res) => res.status(404).json({ error: "404 Route Not Found" }));

    // const PORT = process.env.PORT || 3021;
    // const server = app.listen(PORT, () => console.log("Env Server running on http://localhost: + PORT)");
    // server.on('error', (err) => { if (err.code === 'EADDRINUSE') console.log("Port busy hai!"); });
};
// dotenvExample();


