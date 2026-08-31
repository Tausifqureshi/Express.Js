// ========================================================================================= //
// Yahan hum practical karke dekh rahe hain ki Raw Node.js (Old Tarika) aur Express.js 
// (New Tarika) me server banane me asal me kitna fark hai!
// ========================================================================================= //

const http = require('http'); // (Old Style ke liye)
const express = require('express'); // (New Style ke liye)

const runIntroductionComparison = () => {
    console.log("=== Old vs New Server Practical Shuru ===\n");

    // ========================================================================================= //
    // TARIKA 1: Old Style (Raw Node.js) - Lamba aur Complex (if-else hell)
    // ========================================================================================= //
    const nodeServer = http.createServer((req, res) => {
        // Raste (URL) check karne ke liye if-else lagana padta hai
        if (req.url === '/') {
            // Header manually set karna padta hai
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end("<h1>Old Style Node.js Server Par Aapka Swagat Hai!</h1>");
        } else {
            // 404 Error bhi manually handle karna padta hai
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.end("<h1>404 - Page Not Found (Old Style)</h1>");
        }
    });

    nodeServer.listen(3001, () => {
        console.log("🚀 Old Style Node Server running on: http://localhost:3001");
    });


    // ========================================================================================= //
    // TARIKA 2: New Style (Express.js) - Short, Clean aur Modern
    // ========================================================================================= //
    const app = express(); // Express app ki machine chalu ki

    // Koi if-else nahi, direct rasta (route) bataya!
    app.get('/', (req, res) => {
        // 'res.send' khud Content-Type (HTML/Text/JSON) samajh leta hai!
        res.send("<h1>New Style Express.js Server Par Aapka Swagat Hai!</h1>");
    });

    // Agar koi aisi link par chala jaye jo humne nahi banayi (404 Not Found)
    // Toh sabse last me ye 'use' wala middleware chal jata hai
    app.use((req, res) => {
        res.status(404).send("<h1>404 - Page Not Found (New Style)</h1>");
    });

    app.listen(3002, () => {
        console.log("🚀 New Style Express Server running on: http://localhost:3002");
        console.log("\n✅ FARK DEKHA? Express ne hamara code kitna readable aur chhota kar diya!");
    });
};

runIntroductionComparison();
