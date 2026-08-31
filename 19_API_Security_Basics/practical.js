// ========================================================================================= //
// PRACTICAL: API SECURITY BASICS
// Note: npm install helmet express-rate-limit bcrypt
// Run: node 19_API_Security_Basics/practical.js
// ========================================================================================= //
const express = require('express');
const app = express();

/*
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');

// 1. Helmet (Security Headers)
app.use(helmet()); 

// 2. Rate Limiting (Brute Force se bachna)
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Har user (IP) ko sirf 100 request ka limit
    message: "Aapne bohot zyada request bhej di hain, thodi der baad aana!"
});
app.use(limiter);
*/

app.get('/', (req, res) => res.send("Security Headers aur Rate Limiting active ho jayegi packages install karne par!"));
app.listen(6011, () => console.log("🚀 Security Server on http://localhost:6011"));
