// ========================================= BUILT-IN MIDDLEWARE PRACTICAL ======================================= //
const express = require('express');
const app = express();

// 1. express.json() - Body parser for JSON
app.use(express.json());
// 2. express.urlencoded() - Form data parser
app.use(express.urlencoded({ extended: true }));

app.post('/api/submit-form', (req, res) => {
    const { name, email } = req.body;
    if (!name || !email) {
        return res.status(400).json({ success: false, message: "400 Bad Request: Name and Email required!" });
    }
    res.status(200).json({ success: true, message: "Form data parsed successfully!", data: { name, email } });
});

app.use((req, res) => res.status(404).json({ success: false, message: "404 Error: Route Not Found!" }));

const PORT = 3007;
app.listen(PORT, () => {
    console.log("🚀 Built-in Middleware Server running on http://localhost: + PORT");
}).on('error', (err) => {
    if (err.code === 'EADDRINUSE') console.log("❌ ERROR: Port  + PORT +  pehle se busy hai!");
    else console.log("❌ SERVER ERROR:", err.message");
});

