// ========================================= BASIC EXPRESS ROUTING & REAL-WORLD DATA ======================================= //
// Real-World Scenario: Client website ke alag-alag URLs (/ Home, /about About Us, /api/services Services Data) par real data aur HTML deliver karna.

const express = require('express');
const app = express();

// 1. REAL-WORLD ROUTE: Home Page (HTML Response with navigation links)
app.get('/', (req, res) => {
    const clientIp = req.ip || '127.0.0.1';
    
    res.status(200).send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Express.js Routing Hub</title>
            <style>
                body { font-family: Arial, sans-serif; margin: 40px; background-color: #f4f7f6; color: #333; }
                .card { background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.1); }
                h1 { color: #007bff; }
                a { color: #28a745; text-decoration: none; font-weight: bold; margin-right: 15px; }
            </style>
        </head>
        <body>
            <div class="card">
                <h1>🏠 Welcome to Express Routing Portal</h1>
                <p>Request Method: <strong>${req.method}</strong> | Request Path: <strong>${req.url}</strong> | Client IP: <strong>${clientIp}</strong></p>
                <hr>
                <nav>
                    <a href="/about">About Us Page</a>
                    <a href="/api/services">Services API (JSON)</a>
                    <a href="/api/contact">Contact Info API</a>
                </nav>
            </div>
        </body>
        </html>
    `);
});

// 2. REAL-WORLD ROUTE: About Page (HTML Response)
app.get('/about', (req, res) => {
    res.status(200).send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>About Us - Express</title>
            <style>
                body { font-family: Arial, sans-serif; margin: 40px; background-color: #eef2f5; }
                .box { background: white; padding: 25px; border-left: 5px solid #007bff; border-radius: 5px; }
            </style>
        </head>
        <body>
            <div class="box">
                <h2>ℹ️ About Tausif's Express Architecture</h2>
                <p>This server handles dynamic routing, HTTP status codes (200 OK), and semantic HTML rendering.</p>
                <a href="/">&larr; Back to Home</a>
            </div>
        </body>
        </html>
    `);
});

// 3. REAL-WORLD ROUTE: Services Data API (JSON Response)
app.get('/api/services', (req, res) => {
    res.status(200).json({
        success: true,
        statusCode: 200,
        totalServices: 3,
        data: [
            { id: 1, title: "REST API Development", status: "Active" },
            { id: 2, title: "Express Middleware Pipeline", status: "Active" },
            { id: 3, title: "Database Architecture", status: "Active" }
        ]
    });
});

// 4. REAL-WORLD ROUTE: Contact Info API (JSON Response)
app.get('/api/contact', (req, res) => {
    res.status(200).json({
        success: true,
        statusCode: 200,
        contactDetails: {
            developer: "Tausif Qureshi",
            email: "support@tausif.com",
            location: "India"
        }
    });
});

// 5. REAL-WORLD 404 Catch-All Middleware
app.use((req, res) => {
    res.status(404).send(`
        <div style="font-family: Arial; text-align: center; margin-top: 50px;">
            <h1 style="color: #dc3545;">404 Error: Page Not Found</h1>
            <p>The requested URL <strong>${req.url}</strong> was not found on this server.</p>
            <a href="/" style="color: #007bff; font-weight: bold;">Return to Home Page</a>
        </div>
    `);
});

const PORT = 3003;
app.listen(PORT, () => {
    console.log("🚀 Routing Server running on http://localhost:" + PORT);
}).on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
        console.log("❌ ERROR: Port " + PORT + " pehle se busy hai!");
    } else {
        console.log("❌ SERVER ERROR: " + err.message);
    }
});
