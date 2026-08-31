// ========================================= THE RESPONSE OBJECT (res) ======================================= //
// ChatGPT Se Liya Hua Syntex --->
// Server jab apna logic complete kar leta hai, toh usko user ko jawab dena hota hai es object ke zariye.
//
// 1. res.send(): Text, HTML, ya Array bhejne ke liye.
// 2. res.json(): Proper JSON API banane ke liye (React apps ke liye).
// 3. res.status(): HTTP status code set karne ke liye (200, 404, 500).
// 4. res.sendFile(): Poori HTML/PDF file bhej dena.

const responseObjectExample = () => {
    const express = require('express');
    const app = express();

    app.get('/api', (req, res) => {
        res.status(200).json({ success: true, message: "Response Sent!" });
    });

    // app.listen(3007, () => console.log("Res Server running..."));
};
// responseObjectExample();
