// ========================================= Old vs New: Routing ======================================= //
// Yahan hum dekhenge Raw Node.js me routes if-else se kaise bante the, aur Express me kitna aasan hai.

const http = require('http');
const express = require('express');

const runRoutingComparison = () => {
    console.log("=== Routing Practical Start ===");

    // ========================================================================================= //
    // TARIKA 1: Old Style (Raw Node.js) - Bohot saare if-else!
    // ========================================================================================= //
    const oldServer = http.createServer((req, res) => {
        const path = req.url;
        const method = req.method;

        if (path === '/' && method === 'GET') {
            res.end("Home Page (Old)");
        } 
        else if (path === '/about' && method === 'GET') {
            res.end("About Page (Old)");
        } 
        else if (path === '/submit' && method === 'POST') {
            res.end("Form Submitted (Old)");
        } 
        else {
            res.writeHead(404);
            res.end("404 Not Found (Old)");
        }
    });

    oldServer.listen(3001, () => {
        console.log("Old Style Routing Server on http://localhost:3001");
    });

    // ========================================================================================= //
    // TARIKA 2: New Style (Express.js) - Clean aur Elegant
    // ========================================================================================= //
    const app = express();

    app.get('/', (req, res) => {
        res.send("Home Page (New)");
    });

    app.get('/about', (req, res) => {
        res.send("About Page (New)");
    });

    app.post('/submit', (req, res) => {
        res.send("Form Submitted (New)");
    });

    // 404 Handle karna (Agar upar ka koi route match na kare)
    app.use((req, res) => {
        res.status(404).send("404 Not Found (New)");
    });

    app.listen(3002, () => {
        console.log("New Style Routing Server on http://localhost:3002");
    });
};

runRoutingComparison();
