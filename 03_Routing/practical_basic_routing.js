// ========================================= BASIC ROUTING ======================================= //
const express = require('express');
const app = express();

app.get('/about', (req, res) => {
    res.send("<h1>ℹ️ About Us</h1><p>Express Routing is easy!</p>");
});

app.get('/contact', (req, res) => {
    res.send("<h1>📞 Contact Us</h1>");
});

// 404 Handle
app.use((req, res) => {
    res.status(404).send("<h1 style='color:red;'>404 Error: Page Not Found</h1>");
});

const PORT = 3003;
const server = app.listen(PORT, () => console.log("🚀 Basic Routing Server on http://localhost:" + PORT));
server.on('error', (err) => { if(err.code === 'EADDRINUSE') console.log("❌ ERROR: Port " + PORT + " busy hai!"); });
