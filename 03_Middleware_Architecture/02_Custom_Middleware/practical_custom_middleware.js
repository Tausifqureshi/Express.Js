// ========================================= CUSTOM MIDDLEWARE PRACTICAL ======================================= //
const express = require('express');
const app = express();

// Custom Logger Middleware
const loggerMiddleware = (req, res, next) => {
    console.log("[LOG]  + new Date().toISOString() +  | Method:  + req.method +  | Path:  + req.url");
    next(); // Move to next handler
};

// Custom Auth Middleware
const checkAuthHeader = (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) {
        return res.status(401).json({ success: false, message: "401 Unauthorized: Authorization header missing!" });
    }
    next();
};

app.use(loggerMiddleware);

app.get('/public', (req, res) => {
    res.status(200).json({ success: true, message: "Public Route accessible by everyone!" });
});

app.get('/protected', checkAuthHeader, (req, res) => {
    res.status(200).json({ success: true, message: "Protected Route: Token verified!" });
});

app.use((req, res) => res.status(404).json({ success: false, message: "404 Error: Route Not Found!" }));

const PORT = 3009;
app.listen(PORT, () => {
    console.log("🚀 Custom Middleware Server running on http://localhost: + PORT");
}).on('error', (err) => {
    if (err.code === 'EADDRINUSE') console.log("❌ ERROR: Port  + PORT +  pehle se busy hai!");
    else console.log("❌ SERVER ERROR:", err.message");
});

