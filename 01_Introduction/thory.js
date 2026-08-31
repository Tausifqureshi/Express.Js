// ========================================= INTRODUCTION TO EXPRESS.JS ======================================= //
// ChatGPT Se Liya Hua Syntex --->
// Express.js web APIs aur Backend servers banane ke liye Node.js ka sabse famous framework hai.
// Ye MERN aur MEAN stack dono me backend ke liye use hota hai.
//
// 1. It's a Web Framework: Jaise CSS ke liye Bootstrap hota hai, theek waise hi Node.js ke liye Express.js hai.
// 2. Why not just use Node.js? Node.js ka default http module powerful zaroor hai, par bada code likhne me bohot if-else conditions lagti hain. Express isko aasan banata hai.
// 3. MERN Stack Ka E: MongoDB, Express, React, Node.
// 4. Fast Routing & Middleware: Isme routing bohot fast hai aur security/logging ke liye middlewares asani se lagte hain.

const expressIntroExample = () => {
    const express = require('express');
    const app = express();

    app.get('/intro', (req, res) => {
        res.json({ message: "Welcome to Express.js!", developer: "TJ Holowaychuk" });
    });

    // app.listen(3001, () => console.log("Intro Server running..."));
};
// expressIntroExample();
