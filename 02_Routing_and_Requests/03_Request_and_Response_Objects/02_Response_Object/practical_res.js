// ========================================= REAL-WORLD EXPRESS RESPONSE OBJECT (res) ======================================= //
// Real-world scenario: Different response types (JSON data, HTML render, Status Codes) sent back to client via res.

const express = require('express');
const app = express();

const runResponseObjectPractical = () => {
    console.log("=== Real-World Response Object (res) Demo ===\n");

    // 1. res.status(200).json() -> API JSON Response
    app.get('/api/user-profile', (req, res) => {
        const userObj = {
            id: 101,
            name: "Tausif Qureshi",
            role: "Backend Architect",
            skills: ["Node.js", "Express.js", "MongoDB"]
        };
        res.status(200).json({ success: true, statusCode: 200, profile: userObj });
    });

    // 2. res.status(200).send() -> Render HTML Dashboard
    app.get('/dashboard', (req, res) => {
        const html = 
            <html>
                <head><title>Express Dashboard</title></head>
                <body style="font-family: sans-serif; text-align: center; margin-top: 50px;">
                    <h1 style="color: #28a745;">Admin Dashboard 🚀</h1>
                    <p>Returned via res.status(200).send() with text/html headers automatically!</p>
                </body>
            </html>
        ;
        res.status(200).send(html);
    });

    // 3. res.status(400).json() -> Bad Request Error Response
    app.get('/api/error-demo', (req, res) => {
        res.status(400).json({
            success: false,
            statusCode: 400,
            error: "Bad Request",
            message: "Missing parameter 'user_id' in request!"
        });
    });

    // 404 Catch-All
    app.use((req, res) => {
        res.status(404).json({
            success: false,
            statusCode: 404,
            error: "Page Not Found",
            message: "Path " + req.url + " not found on this server."
        });
    });

    const PORT = 3005;
    app.listen(PORT, () => {
        console.log("🚀 Response Object Server running on http://localhost: + PORT");
    }).on('error', (err) => {
        if (err.code === 'EADDRINUSE') console.log("❌ ERROR: Port  + PORT +  pehle se busy hai!");
        else console.log("❌ SERVER ERROR:", err.message");
    });
};

runResponseObjectPractical();

