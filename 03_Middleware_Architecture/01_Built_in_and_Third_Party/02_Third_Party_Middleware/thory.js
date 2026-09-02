// ========================================= THIRD-PARTY MIDDLEWARE ======================================= //
// ChatGPT Se Liya Hua Syntex --->
// Duniya bhar ke developers ne NPM par bohot saare middleware daale hain jo Express me plug ho jate hain.
//
// 1. Morgan: Server requests ko terminal par print karta hai.
// 2. Helmet: Security headers lagata hai.
// 3. Cors: Cross-origin requests allow karta hai.

const thirdPartyExample = () => {
    const express = require('express');
    const app = express();
    
    // Asli duniya me hum isko aise import aur use karte hain:
    // const morgan = require('morgan'); 
    // app.use(morgan('dev'));

    app.get('/api/data', (req, res) => {
        // Agar morgan laga hota, toh terminal pe URL aur time khud print ho jata res.status(200).json({ message: "Third party middlewares make life easy!" });
    });

    // const PORT = 3011;
    // app.listen(PORT, () => {
    //     console.log("Third-Party Middleware Server is running on http://localhost:");
    // });
};
// thirdPartyExample();


