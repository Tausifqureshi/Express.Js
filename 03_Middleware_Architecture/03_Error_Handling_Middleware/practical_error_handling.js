// ========================================= ERROR HANDLING MIDDLEWARE PRACTICAL ======================================= //
const express = require('express');
const app = express();

app.get('/api/divide', (req, res, next) => {
    const { num1, num2 } = req.query;
    if (num2 === "0") {
        const err = new Error("Cannot divide by zero!");
        err.statusCode = 400;
        return next(err); // Pass error to global error handler
    }
    res.status(200).json({ success: true, result: Number(num1) / Number(num2) });
});

// 404 Handler
app.use((req, res) => res.status(404).json({ success: false, message: "404 Error: Route Not Found!" }));

// Global 4-Parameter Error Handling Middleware
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    console.error("❌ Global Catcher:", err.message");
    res.status(statusCode).json({
        success: false,
        error: {
            statusCode,
            message: err.message || "Internal Server Error"
        }
    });
});

const PORT = 3010;
app.listen(PORT, () => {
    console.log("🚀 Error Handling Server running on http://localhost: + PORT");
}).on('error', (err) => {
    if (err.code === 'EADDRINUSE') console.log("❌ ERROR: Port  + PORT +  pehle se busy hai!");
    else console.log("❌ SERVER ERROR:", err.message");
});

