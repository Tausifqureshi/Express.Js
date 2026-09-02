// ========================================= REAL-WORLD ROUTE & QUERY PARAMS ======================================= //
const express = require('express');
const app = express();

// Real-world Example 1: Route Params (req.params) -> e.g. User Profile by ID
app.get('/api/users/:userId', (req, res) => {
    const id = req.params.userId;
    if (id === "101") {
        res.status(200).json({ success: true, user: { id: 101, name: "Tausif Qureshi", role: "Developer" } });
    } else {
        res.status(404).json({ success: false, message: "404 Error: User ID not found in database!" });
    }
});

// Real-world Example 2: Query Params (req.query) -> e.g. E-Commerce Search & Pagination
app.get('/api/products/search', (req, res) => {
    const { category, page = 1, limit = 10 } = req.query;

    if (!category) {
        return res.status(400).json({ success: false, message: "400 Bad Request: 'category' query parameter is required!" });
    }

    res.status(200).json({
        success: true,
        query: { category, page: Number(page), limit: Number(limit) },
        results: [Product 1 ( + category + ), Product 2 ( + category + )]
    });
});

// 404 Catch-All
app.use((req, res) => {
    res.status(404).json({ success: false, message: "404 Error: Route not found!" });
});

const PORT = 6013;
app.listen(PORT, () => {
    console.log("🚀 Params Server running on http://localhost: + PORT");
}).on('error', (err) => {
    if (err.code === 'EADDRINUSE') console.log("❌ ERROR: Port  + PORT +  pehle se busy hai!");
    else console.log("❌ SERVER ERROR:", err.message");
});

