// ========================================= 1. Basic Express Server (HTML Webpage & JSON API) ======================================= //
// Real-World Scenario: Express me HTML Webpage (res.send) aur JSON API (res.json({ success: true })) dono ka real-world use case.

const express = require('express');
const app = express();

// 1. REAL-WORLD ROUTE: Webpage Endpoint returning HTML (res.send)
app.get('/', (req, res) => {
    res.status(200).send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Basic Express Server - Home</title>
            <style>
                body { font-family: Arial, sans-serif; margin: 40px; background-color: #f4f6f9; color: #333; }
                .card { background: white; padding: 25px; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.1); }
                h1 { color: #007bff; margin-bottom: 10px; }
                a { color: #28a745; font-weight: bold; text-decoration: none; }
            </style>
        </head>
        <body>
            <div class="card">
                <h1>Welcome to Tausif's Express Home Page</h1>
                <p>Status: <strong>200 OK</strong> | HTML Webpage Rendered!</p>
                <hr>
                <p>Agar React/Mobile App ke liye JSON API Data chahiye toh click karein: <a href="/api/info">/api/info (JSON API)</a></p>
            </div>
        </body>
        </html>
    `);
});

// 2. REAL-WORLD ROUTE: REST API Endpoint returning JSON Data with success flag (res.json)
app.get('/api/info', (req, res) => {
    // res.json({ success: true, ... }) -> Frontend/Mobile App (React/React Native) ke liye standard JSON response
    res.status(200).json({
        success: true,                                  // Standard API Flag: Request success hone par true
        statusCode: 200,                               // HTTP Status Code
        message: "Server Status & Details retrieved successfully!",
        serverDetails: {
            framework: "Express.js",
            environment: "Development",
            uptime: "Active"
        },
        requestMetadata: {
            method: req.method,                         // req.method -> HTTP Verb (GET)
            url: req.url,                               // req.url -> Endpoint Path (/api/info)
            clientIp: req.ip || '127.0.0.1'             // req.ip -> Client IP Address
        }
    });
});

// 3. REAL-WORLD 404 Catch-All Middleware (JSON Response for APIs)
app.use((req, res) => {
    console.log("[404 ERROR] Client tried accessing non-existent URL: " + req.url);
    res.status(404).json({
        success: false,                                 // Standard API Flag: Fail hone par false
        statusCode: 404,
        error: "404 Not Found",
        message: "Req URL '" + req.url + "' does not exist on this server!"
    });
});

const PORT = 3001;
app.listen(PORT, () => {
    console.log("[SERVER RUNNING] Basic Express Server running on http://localhost:" + PORT);
}).on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
        console.log("[ERROR] Port " + PORT + " pehle se busy hai!");
    } else {
        console.log("[SERVER ERROR] " + err.message);
    }
});
