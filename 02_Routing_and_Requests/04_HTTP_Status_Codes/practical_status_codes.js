// ========================================= HTTP STATUS CODES PRACTICAL ======================================= //
const express = require('express');
const app = express();
app.use(express.json());

// 1. 200 OK (GET Success)
app.get('/api/status/200', (req, res) => {
    console.log("[REQ 200] Fetching data for  + req.url");
    res.status(200).json({ success: true, statusCode: 200, message: "200 OK: Data retrieved successfully!" });
});

// 2. 201 Created (POST Success)
app.post('/api/status/201', (req, res) => {
    const { name } = req.body;
    if (!name) {
        // 400 Bad Request
        return res.status(400).json({ success: false, statusCode: 400, message: "400 Bad Request: Name field is required!" });
    }
    res.status(201).json({ success: true, statusCode: 201, message: "201 Created: Resource created!", createdItem: name });
});

// 3. 401 Unauthorized (Auth Failed)
app.get('/api/status/401', (req, res) => {
    const authHeader = req.headers['authorization'];
    if (!authHeader) {
        return res.status(401).json({ success: false, statusCode: 401, message: "401 Unauthorized: Authorization token missing in req.headers!" });
    }
    res.status(200).json({ success: true, message: "Authorized access granted!" });
});

// 4. 403 Forbidden (Permission Denied)
app.get('/api/status/403', (req, res) => {
    const role = req.query.role;
    if (role !== 'admin') {
        return res.status(403).json({ success: false, statusCode: 403, message: "403 Forbidden: Admin privileges required!" });
    }
    res.status(200).json({ success: true, message: "Welcome Admin!" });
});

// 5. 500 Internal Server Error
app.get('/api/status/500', (req, res) => {
    try {
        throw new Error("Simulated Database Crash");
    } catch (err) {
        res.status(500).json({ success: false, statusCode: 500, message: "500 Internal Server Error: " + err.message });
    }
});

// 404 Catch-All Handler
app.use((req, res) => {
    res.status(404).json({ success: false, statusCode: 404, message: "404 Not Found: Path " + req.url + " does not exist!" });
});

const PORT = 3012;
app.listen(PORT, () => {
    console.log("🚀 HTTP Status Codes Server running on http://localhost: + PORT");
}).on('error', (err) => {
    if (err.code === 'EADDRINUSE') console.log("❌ ERROR: Port  + PORT +  pehle se busy hai!");
    else console.log("❌ SERVER ERROR:", err.message");
});

