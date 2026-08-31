// ========================================= 1. Basic Express Server ======================================= //
// Ye Express.js ka sabse chota aur basic server hai.
// Isme sirf ek route banaya gaya hai. Node.js ke mukable ye kitna chota hai aap khud dekh sakte hain.

const express = require('express');
const app = express(); // 1. Express ka object (Server) banaya

// 2. Ek rasta (Route) banaya
app.get('/', (req, res) => {
    res.send("Hello Bhai! Ye Express ka sabse basic server hai.");
});

// 3. Server ko Start (Listen) kiya
const PORT = 3001;
app.use((req, res) => res.status(404).send("404 Error: Page Not Found!"));

const server = app.listen(PORT, () => {
    console.log(🚀 Basic Express Server chal raha hai 👉 http://localhost: + PORT);
});
server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') console.log(❌ ERROR: Port  + PORT +  pehle se busy hai!);
});

