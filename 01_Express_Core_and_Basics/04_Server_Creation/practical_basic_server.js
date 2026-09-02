// ========================================= 1. Basic Express Server (Real-World Use Case) ======================================= //
// Real-World Scenario: Express.js me basic HTTP server setup me req (Request) object se client data read karna aur clean HTML / JSON response bhejti hai.

const express = require('express');
const app = express();

// REAL-WORLD USE CASE: Home Endpoint ('/') returning HTML response & inspecting req properties
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
            </div>
        </body>
        </html>
    `);
});

// REAL-WORLD USE CASE: 404 Catch-All Middleware for Invalid URLs
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
    console.log("🚀 Basic Express Server running on http://localhost:" + PORT);
}).on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
        console.log("❌ ERROR: Port " + PORT + " pehle se busy hai!");
    } else {
        console.log("❌ SERVER ERROR: " + err.message);
    }
});
