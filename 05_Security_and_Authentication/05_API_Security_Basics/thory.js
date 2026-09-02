// ========================================= API SECURITY BASICS ======================================= //
// ChatGPT Se Liya Hua Syntex --->
// Live APIs ko hackers target karte hain. Isliye unhe protect karna bohot zaroori hai.
//
// 1. Hashing (Bcrypt): Password ko KABHI direct save mat karo. Bcrypt use karo.
// 2. Helmet: Ye package extra security headers laga deta hai.
// 3. Rate Limiting: 1 second me 1000 request bhej kar server down karne (DDoS) se bachata hai.

const securityExample = () => {
    const express = require('express');
    const app = express();

    // Requires: npm install helmet express-rate-limit
    // const helmet = require('helmet');
    // const rateLimit = require('express-rate-limit');

    // 1. Helmet setup for headers
    // app.use(helmet()); 

    // 2. Rate Limiting Setup
    // const limiter = rateLimit({
    //     windowMs: 15 * 60 * 1000, // 15 mins
    //     max: 100, // Sirf 100 requests per IP allow karega
    //     message: "Aapne had se zyada requests ki hain. Baad me aayiye!"
    // });
    // app.use(limiter);

    app.get('/', (req, res) => { res.status(200).send("API is Secure Now!");
    });

    // const PORT = 3019;
    // app.listen(PORT, () => {
    //     console.log("Security Server is running on http://localhost:");
    // });
};
// securityExample();

