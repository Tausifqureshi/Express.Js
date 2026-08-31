// ========================================= Practical: Express Setup ======================================= //
// Ek baar express install ho jaye, toh server chalana sirf 4-5 line ka khel hai.

const express = require('express'); // 1. Express module ko bulaya
const app = express(); // 2. Express function ko call karke 'app' object banaya

// 3. Ek simple rasta (route) banaya
app.get('/', (req, res) => {
    res.send("<h1>Bhai Express Setup Successful Hai!</h1>");
});

// 4. Server ko chalu kiya (Listen)
app.listen(3000, () => {
    console.log("✅ Express Setup Server running at http://localhost:3000");
});
