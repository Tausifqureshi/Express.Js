// ========================================= Old Tarika vs New Tarika Practical ======================================= //
// Yahan hum dekhenge ki Raw Node.js (Old Tarika) aur Express.js (New Tarika) me server banane me kitna farq hai.

const http = require('http'); // Old Tarike ke liye
const express = require('express'); // New Tarike ke liye

const runComparison = () => {
    console.log("=== Old vs New Server Practical Shuru ===\n");

    // ========================================================================================= //
    // TARIKA 1: Old Style (Raw Node.js) - Lamba aur Complex if-else wala tarika
    // ========================================================================================= //
    const nodeServer = http.createServer((req, res) => {
        if (req.url === '/') {
            // Header khud set karna padta hai
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end("<h1>Old Style Node.js Server Par Aapka Swagat Hai!</h1>");
        } else {
            // 404 Error bhi manually set karna padta hai
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.end("<h1>404 - Page Not Found (Old Style)</h1>");
        }
    });

    nodeServer.listen(3001, () => {
        console.log("🚀 Old Style Node Server running on: http://localhost:3001");
    });


    // ========================================================================================= //
    // TARIKA 2: New Style (Express.js) - Short, Clean aur Modern tarika
    // ========================================================================================= //
    const app = express();

    // Koi if-else nahi, direct route define karo!
    app.get('/', (req, res) => {
        // Content-Type khud set ho jata hai, bas res.send() karo
        res.send("<h1>New Style Express.js Server Par Aapka Swagat Hai!</h1>");
    });

    // Agar koi aisi link dal de jo exist nahi karti (404 Error)
    app.use((req, res) => {
        res.status(404).send("<h1>404 - Page Not Found (New Style)</h1>");
    });

    app.listen(3002, () => {
        console.log("🚀 New Style Express Server running on: http://localhost:3002");
        console.log("\n✅ Success: Express ne hamara kaam kitna asaan kar diya!");
    });
};

runComparison();
