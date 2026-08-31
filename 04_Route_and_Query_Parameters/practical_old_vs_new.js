// ========================================= Old vs New: Parameters & Queries ======================================= //

const http = require('http');
const url = require('url'); // Raw Node.js me query nikalne ke liye ye lagta tha!
const express = require('express');

const runComparison = () => {

    // ========================================================================================= //
    // TARIKA 1: Old Style (Raw Node.js) - URL module se parse karna padta tha
    // ========================================================================================= //
    const oldServer = http.createServer((req, res) => {
        // req.url ko parse karna padta hai query nikalne ke liye
        const parsedUrl = url.parse(req.url, true); 
        const path = parsedUrl.pathname;
        const query = parsedUrl.query; // Yahan milti hai query (jaise ?name=tausif)

        if (path === '/search') {
            res.end(Old Style Search: Aapne search kiya =  + query.keyword);
        } else {
            res.end("Path: " + path);
        }
    });

    oldServer.listen(3001, () => {
        console.log("Old Style Param Server on http://localhost:3001");
    });

    // ========================================================================================= //
    // TARIKA 2: New Style (Express.js) - Sab kuch bana banaya milta hai req object me!
    // ========================================================================================= //
    const app = express();

    // Route Parameter (Dynamic URL) - e.g., http://localhost:3002/user/105
    app.get('/user/:id', (req, res) => {
        const userId = req.params.id; // Express khud nikal kar dega!
        res.send(New Style Route Param: User ID mili =  + userId);
    });

    // Query Parameter - e.g., http://localhost:3002/search?keyword=laptop
    app.get('/search', (req, res) => {
        const searchQuery = req.query.keyword; // Express khud query parse kar deta hai!
        res.send(New Style Query Param: Aapne search kiya =  + searchQuery);
    });

    app.listen(3002, () => {
        console.log("New Style Param Server on http://localhost:3002");
    });
};

runComparison();
