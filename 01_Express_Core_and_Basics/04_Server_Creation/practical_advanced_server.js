// ========================================= 2. Advanced Core Express Server Practical ======================================= //
// Express.js me req.body, req.url, req.method aur headers ko Advanced Level par handle karna.

const express = require('express');

const runAdvancedExpressServer = () => {
    console.log("=== Advanced Express.js Server Ka Asli Use ===\n");

    const app = express();
    
    // Middleware setup for JSON parsing
    app.use(express.json());

    // GET Route with Explicit req.url & req.method inspection
    app.get('/', (req, res) => {
        const requestMethod = req.method;
        const requestUrl = req.url;

        console.log("[GET REQUEST] Method:  + requestMethod +  | URL:  + requestUrl");

        res.status(200).json({
            server: "Express.js (Modern)",
            status: "Running Successfully",
            requestMethod: requestMethod,
            requestUrl: requestUrl,
            developer: "Tausif"
        });
    });

    // POST Route with Explicit req.body validation & req.headers inspection
    app.post('/api/login', (req, res) => {
        const requestMethod = req.method;
        const requestUrl = req.url;
        const contentType = req.headers['content-type'];

        // Extracting data from req.body
        const { username, password } = req.body;

        console.log("[POST REQUEST] Method:  + requestMethod +  | URL:  + requestUrl +  | Content-Type:  + contentType");

        if (!username || !password) {
            return res.status(400).json({ success: false, message: "400 Bad Request: Username and password required!" });
        }
        
        if (username === "admin" && password === "1234") {
            res.status(200).json({
                success: true,
                message: "200 OK: Login successful!",
                loggedInUser: username,
                requestPath: requestUrl
            });
        } else {
            res.status(401).json({ success: false, message: "401 Unauthorized: Invalid credentials" });
        }
    });

    // 404 Route Catch-All
    app.use((req, res) => {
        console.log("[404 NOT FOUND] Unknown Path:  + req.url +  | Method:  + req.method");
        res.status(404).json({ success: false, message: "404 Error: Route " + req.url + " not found!" });
    });

    const PORT = 3005;

    app.listen(PORT, () => {
        console.log("🚀 Modern Express Server is running!");
        console.log("👉 Home API check karein: http://localhost: + PORT");
        console.log("👉 POST API ke liye Postman use karein: http://localhost: + PORT + /api/login");
    }).on('error', (err) => {
        if (err.code === 'EADDRINUSE') {
            console.log("❌ ERROR: Port  + PORT +  pehle se busy hai!");
        } else {
            console.log("❌ SERVER ERROR:" + err.message);
        }
    });
};

runAdvancedExpressServer();

