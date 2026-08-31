// ========================================================================================= //
// PRACTICAL: JWT GENERATION & VERIFICATION
// Note: npm install jsonwebtoken
// Run: node 14_JWT_JSON_Web_Tokens/practical.js
// ========================================================================================= //
const express = require('express');
const app = express();
// Isko uncomment karne se pehle 'npm install jsonwebtoken' karein
/*
const jwt = require('jsonwebtoken');
const SECRET_KEY = "my_super_secret_key";

app.get('/generate-token', (req, res) => {
    // Fake User Data
    const payload = { userId: 101, role: "admin" };
    
    // Token Banana (Sign)
    const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '1h' });
    res.json({ token: token });
});

app.get('/verify-token', (req, res) => {
    const token = req.headers.authorization;
    if(!token) return res.status(401).send("Token kahan hai?");
    
    try {
        // Token Padhna (Verify)
        const decodedData = jwt.verify(token, SECRET_KEY);
        res.json({ message: "Token Sahi Hai!", data: decodedData });
    } catch(err) {
        res.status(403).send("Token farzi (fake) hai ya expire ho gaya!");
    }
});
*/
app.get('/', (req, res) => res.send("Token ke code ko dekhne ke liye file read karein."));
app.listen(6006, () => console.log("🚀 JWT Server on http://localhost:6006"));
