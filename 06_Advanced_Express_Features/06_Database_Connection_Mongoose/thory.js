// ========================================= MONGODB CONNECTION (MONGOOSE) ======================================= //
// ChatGPT Se Liya Hua Syntex --->
// Express.js ka sabse bada dost MongoDB hota hai (MERN stack). Express ko MongoDB se jodne ke liye mongoose naam ka package use hota hai.
//
// 1. Connection: mongoose.connect('mongodb://localhost:27017/my_database')
// 2. Mongoose Kyu?: Ye data ko structure deta hai (Schemas/Models) taaki koi galat data DB me na chala jaye.
// 3. Flow: Express API -> Mongoose -> MongoDB Database.

const mongooseExample = () => {
    const express = require('express');
    const app = express();
    
    // npm install mongoose
    // const mongoose = require('mongoose');

    // mongoose.connect('mongodb://127.0.0.1:27017/tausif_db')
    //     .then(() => console.log("Database Connected Successfully!");
    //     .catch((err) => console.log("DB Error:", err)");

    app.get('/', (req, res) => { res.status(200).send("Database connection happens behind the scenes!");
    });

    app.use((req, res) => res.status(404).json({ error: "404 Route Not Found" }));

    // const PORT = 3024;
    // const server = app.listen(PORT, () => console.log("DB Server running on http://localhost: + PORT)");
    // server.on('error', (err) => { if (err.code === 'EADDRINUSE') console.log("Port busy hai!"); });
};
// mongooseExample();


