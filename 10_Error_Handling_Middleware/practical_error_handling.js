// ========================================================================================= //
// PRACTICAL: ERROR HANDLING MIDDLEWARE
// Run: node 10_Error_Handling_Middleware/practical.js
// ========================================================================================= //
const express = require('express');
const app = express();

app.get('/danger', (req, res, next) => {
    try {
        // Yahan jaan-boojh kar error banaya hai (undefined variable access)
        const myVar = kuchBhiVariable; 
        res.send("Ye kabhi chalega hi nahi");
    } catch (error) {
        // Error ko aage Error Middleware ko bhej diya
        next(error);
    }
});

// ERROR HANDLING MIDDLEWARE (Isme 4 params hote hain 'err' ke sath)
// Ye hamesha sabse END me likha jata hai
app.use((err, req, res, next) => {
    console.error("🔥 Error pakdi gayi:", err.message);
    res.status(500).json({ 
        success: false, 
        message: "Server me kuch gadbad hai!",
        error_detail: err.message
    });
});

app.listen(6004, () => console.log("🚀 Error Handle Server on http://localhost:6004/danger"));
