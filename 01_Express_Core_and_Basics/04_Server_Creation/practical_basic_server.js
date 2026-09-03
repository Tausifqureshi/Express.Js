// ========================================= 1. Basic Express Server (HTML Webpage & JSON API) ======================================= //
// Real-World Scenario: Express me HTML Webpage (res.send) aur JSON API (res.json({ success: true })) dono ka real-world use case.

const express = require('express');
const app = express();

// 1. REAL-WORLD ROUTE: Webpage Endpoint returning HTML (res.send) & inspecting req properties
app.get('/', (req, res) => {
    // 1. req.method -> Client GET method se request bhej raha hai ya POST se
    const method = req.method;

    // 2. req.url -> Client dwara maanga gaya URL path ('/')
    const url = req.url;

    // 3. req.ip -> Security tracking ke liye Client IP Address
    const clientIp = req.ip || '127.0.0.1';

    // 4. req.headers['user-agent'] -> Client Device/Browser Info
    const browserInfo = req.headers['user-agent'] || 'Unknown Browser';

    // 5. req.query -> URL Query String preference (?theme=dark)
    const theme = req.query.theme || 'light';

    console.log("[INCOMING REQ] Method: " + method + " | Path: " + url + " | IP: " + clientIp);

    // Responding via res.status(200).send() with HTML content
    res.status(200).send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Basic Express Server - Home</title>
            <style>
                body { font-family: Arial, sans-serif; margin: 40px; background-color: #f4f6f9; color: #333; }
                .card { background: white; padding: 25px; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.1); }
                h1 { color: #007bff; margin-bottom: 10px; }
                .info-box { background: #e9ecef; padding: 15px; border-radius: 5px; margin-top: 15px; }
                code { color: #d63384; font-weight: bold; }
                a { color: #28a745; font-weight: bold; text-decoration: none; }
            </style>
        </head>
        <body>
            <div class="card">
                <h1>🏠 Welcome to Tausif's Express Home Page</h1>
                <p>Status: <strong>200 OK</strong> | Basic Server Chal Raha Hai!</p>
                
                <div class="info-box">
                    <h3>🔍 Request (req) Details Inspected:</h3>
                    <ul>
                        <li>HTTP Method (<code>req.method</code>): ${method}</li>
                        <li>URL Path (<code>req.url</code>): ${url}</li>
                        <li>Client IP (<code>req.ip</code>): ${clientIp}</li>
                        <li>User Agent (<code>req.headers</code>): ${browserInfo}</li>
                        <li>Selected Theme (<code>req.query</code>): ${theme}</li>
                    </ul>
                </div>
                <hr>
                <p>👉 Agar React/Mobile App ke liye JSON API Data chahiye toh click karein: <a href="/api/info">/api/info (JSON API)</a></p>
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
            clientIp: req.ip || '127.0.0.1',            // req.ip -> Client IP Address
            userBrowser: req.headers['user-agent']      // req.headers -> User Agent
        }
    });
});

// 3. REAL-WORLD 404 Catch-All Middleware for Invalid URLs
app.use((req, res) => {
    console.log("[404 ERROR] Client tried accessing non-existent URL: " + req.url);
    res.status(404).send(`
        <div style="font-family: Arial; text-align: center; margin-top: 50px;">
            <h1 style="color: #dc3545;">404 Not Found</h1>
            <p>Req URL <strong>${req.url}</strong> does not exist on this server!</p>
            <a href="/" style="color: #007bff; font-weight: bold;">Go Back to Home Page</a>
        </div>
    `);
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
