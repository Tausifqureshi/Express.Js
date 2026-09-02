// ========================================= THE REQUEST OBJECT (req) ======================================= //
// ChatGPT Se Liya Hua Syntex --->
// Jab koi user website par click karta hai, toh wo server ko ek HTTP Request bhejta hai. Express is request ko 'req' object bana deta hai.
//
// 1. req.body: POST method se bheja gaya form data isme aata hai. (Needs express.json() middleware)
// 2. req.query & req.params: URL se data nikalne ke liye.
// 3. req.headers: Browser details aur tokens padhne ke liye.
// 4. req.cookies: Saved cookies padhne ke liye.

const requestObjectExample = () => {
    const express = require('express');
    const app = express();
    app.use(express.json());

    app.post('/data', (req, res) => {
        console.log("req.body"); res.status(200).send("Body mil gayi");
    });

    // app.listen(3006, () => console.log("Req Server running...");
};
// requestObjectExample();


