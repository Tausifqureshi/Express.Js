// ========================================= EXPRESS SETUP & BOILERPLATE ======================================= //
const express = require('express');
const app = express();

app.use(express.json());

app.get('/api/health', (req, res) => {
    res.status(200).json({ status: "OK", timestamp: new Date().toISOString() });
});

app.use((req, res) => {
    res.status(404).json({ success: false, message: "404 Error: Route Not Found!" });
});

const PORT = 3002;
app.listen(PORT, () => {
    console.log("🚀 Setup Server running on http://localhost: + PORT");
}).on('error', (err) => {
    if (err.code === 'EADDRINUSE') console.log("❌ ERROR: Port  + PORT +  pehle se busy hai!");
    else console.log("❌ SERVER ERROR:", err.message");
});

