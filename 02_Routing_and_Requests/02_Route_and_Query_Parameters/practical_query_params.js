// ========================================= REAL-WORLD QUERY PARAMETERS PRACTICAL ======================================= //
// Real-World Scenario: E-Commerce store me category search, price filtering, and pagination query params (?category=mobile&minPrice=10000&page=1).

const express = require('express');
const app = express();

// Real-world API: Search Products with Query Parameters
app.get('/api/products/search', (req, res) => {
    // Extracting query parameters from req.query
    const category = req.query.category || 'all';
    const minPrice = req.query.minPrice || 0;
    const page = req.query.page || 1;

    console.log("[SEARCH REQ] Category: " + category + " | MinPrice: " + minPrice + " | Page: " + page);

    res.status(200).json({
        success: true,
        statusCode: 200,
        queryFilters: {
            category: category,
            minPrice: Number(minPrice),
            page: Number(page)
        },
        matchedProducts: [
            { id: 101, title: "Smartphone 5G (" + category + ")", price: 25000 },
            { id: 102, title: "Wireless Headphones", price: 4500 }
        ]
    });
});

// 404 Catch-All Middleware
app.use((req, res) => {
    res.status(404).json({
        success: false,
        statusCode: 404,
        error: "Not Found",
        message: "Endpoint " + req.url + " does not exist!"
    });
});

const PORT = 6013;
app.listen(PORT, () => {
    console.log("🚀 Query Params API Server running on http://localhost:" + PORT);
}).on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
        console.log("❌ ERROR: Port " + PORT + " pehle se busy hai!");
    } else {
        console.log("❌ SERVER ERROR: " + err.message);
    }
});
