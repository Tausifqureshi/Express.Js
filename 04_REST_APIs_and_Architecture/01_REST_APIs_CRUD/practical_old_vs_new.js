// ========================================= Old vs New: JSON API (REST) ======================================= //
const http = require('http');
const express = require('express');

const runRestComparison = () => {
    // Data example
    const users = [{ id: 1, name: "Tausif" }, { id: 2, name: "Ali" }];

    // ========================================================================================= //
    // TARIKA 1: Old Style (Raw Node.js) - JSON bhejne me jaan nikal jati thi
    // ========================================================================================= //
    const oldServer = http.createServer((req, res) => {
        if (req.url === '/api/users' && req.method === 'GET') {
            // 1. Header set karo ki JSON de rahe hain
            res.writeHead(200, { 'Content-Type': 'application/json' });
            // 2. JSON.stringify karke bhejna padta tha (Kyunki res.end sirf string leta hai)
            res.end(JSON.stringify(users));
        }
    });
    oldServer.listen(3001, () => console.log("Old Style API on 3001");

    // ========================================================================================= //
    // TARIKA 2: New Style (Express.js) - Ek line me JSON ready!
    // ========================================================================================= //
    const app = express();

    app.get('/api/users', (req, res) => {
        // Express khud Header set karega, aur khud JSON.stringify bhi karega! res.status(200).json(users); 
    });

    app.listen(3002, () => console.log("New Style Express API on 3002");
};
runRestComparison();

