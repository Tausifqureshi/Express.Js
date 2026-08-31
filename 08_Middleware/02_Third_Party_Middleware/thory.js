// ========================================= THIRD-PARTY MIDDLEWARE ======================================= //
// ChatGPT Se Liya Hua Syntex --->
// Duniya bhar ke developers ne NPM par bohot saare middleware daale hain jo Express me plug ho jate hain.
//
// 1. Morgan: Server requests ko terminal par print karta hai.
// 2. Helmet: Security headers lagata hai.
// 3. Cors: Cross-origin requests allow karta hai.

const thirdPartyExample = () => {
    const express = require('express');
    // const morgan = require('morgan'); // Requires npm install morgan
    const app = express();

    // app.use(morgan('dev'));

    app.get('/', (req, res) => res.send("Hello"));

    // app.listen(3011, () => console.log("Third-Party Server..."));
};
// thirdPartyExample();
