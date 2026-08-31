// ========================================================================================= //
// PRACTICAL: HTTP STATUS CODES
// Run: node 07_HTTP_Status_Codes/practical.js
// ========================================================================================= //
const express = require('express');
const app = express();

app.get('/success', (req, res) => {
    // Default 200 hota hai
    res.status(200).json({ message: "Ye 200 OK hai!" });
});

app.get('/bad-request', (req, res) => {
    // 400 Bad Request
    res.status(400).json({ error: "Aapne galat data bheja!" });
});

app.get('/unauthorized', (req, res) => {
    // 401 Unauthorized
    res.status(401).json({ error: "Pehle login karo!" });
});

app.get('/crash', (req, res) => {
    // 500 Internal Server Error
    res.status(500).json({ error: "Server fat gaya (Crash ho gaya)!" });
});

app.listen(6002, () => console.log("🚀 Status Code Server running on http://localhost:6002"));
