// ========================================= REAL-WORLD JWT AUTHENTICATION ======================================= //
const express = require('express');
const app = express();
app.use(express.json());

// In production, secret comes from process.env.JWT_SECRET
const JWT_SECRET = "super_secret_jwt_key_12345";

// Mock User DB
const users = [{ id: 1, email: "user@tausif.com", password: "password123", role: "admin" }];

// 1. POST /api/login (Generates JWT) -> 200 OK or 401 Unauthorized
app.post('/api/login', (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ success: false, message: "400 Bad Request: Email & Password required!" });
    }

    const user = users.find(u => u.email === email && u.password === password);
    if (!user) {
        return res.status(401).json({ success: false, message: "401 Unauthorized: Invalid credentials!" });
    }

    // In real app: const token = jwt.sign({ id: user.id, role: user.role }, JWT_SECRET, { expiresIn: '1h' });
    const mockToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.user_token_data";

    res.status(200).json({
        success: true,
        message: "200 OK: Authentication successful!",
        token: mockToken,
        user: { id: user.id, email: user.email, role: user.role }
    });
});

// 2. Protected Route with Token Verification Middleware -> 401 & 403 status codes
const verifyToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    if (!authHeader) {
        return res.status(401).json({ success: false, message: "401 Unauthorized: Bearer Token required!" });
    }

    const token = authHeader.split(' ')[1];
    if (token !== "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.user_token_data") {
        return res.status(403).json({ success: false, message: "403 Forbidden: Invalid or Expired Token!" });
    }

    req.user = { id: 1, email: "user@tausif.com", role: "admin" };
    next();
};

app.get('/api/protected-profile', verifyToken, (req, res) => {
    res.status(200).json({
        success: true,
        message: "200 OK: Access granted to protected profile!",
        userData: req.user
    });
});

// 404 Catch-All
app.use((req, res) => {
    res.status(404).json({ success: false, message: "404 Error: Endpoint Not Found!" });
});

const PORT = 6014;
app.listen(PORT, () => {
    console.log("🚀 JWT Auth Server running on http://localhost: + PORT");
}).on('error', (err) => {
    if (err.code === 'EADDRINUSE') console.log("❌ ERROR: Port  + PORT +  pehle se busy hai!");
    else console.log("❌ SERVER ERROR:", err.message");
});

