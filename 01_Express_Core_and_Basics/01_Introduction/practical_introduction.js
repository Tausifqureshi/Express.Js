// ========================================= INTRODUCTION TO EXPRESS.JS ======================================= //
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    // Inspecting Request Properties
    const host = req.hostname;
    const protocol = req.protocol;

    res.status(200).send(
        <div style="font-family: Arial; padding: 20px;">
            <h2>🚀 Hello Express.js Introduction!</h2>
            <p><strong>Protocol:</strong>  + protocol + </p>
            <p><strong>Host:</strong>  + host + </p>
            <p>Status Code: <strong>200 OK</strong></p>
        </div>
    );
});

app.use((req, res) => {
    res.status(404).json({ success: false, message: "404 Error: Page Not Found on " + req.url });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log("🚀 Introduction Server running on http://localhost: + PORT");
}).on('error', (err) => {
    if (err.code === 'EADDRINUSE') console.log("❌ ERROR: Port  + PORT +  pehle se busy hai!");
    else console.log("❌ SERVER ERROR:", err.message");
});

