// ========================================= BUILT-IN MIDDLEWARE ======================================= //
// ChatGPT Se Liya Hua Syntex --->
// Express me kuch middlewares pehle se aate hain, NPM install ki zarurat nahi.
//
// 1. express.json(): POST method se bheje gaye JSON data ko req.body me parse karta hai.
// 2. express.urlencoded(): URL encoded form data parse karta hai.
// 3. express.static(): Images, CSS files directly public folder se serve karta hai.

const builtinMiddlewareExample = () => {
    const express = require('express');
    const app = express();

    app.use(express.json()); // Built-in

    app.post('/data', (req, res) => { res.status(200).json(req.body);
    });

    // app.listen(3010, () => console.log("Builtin Middleware Server...");
};
// builtinMiddlewareExample();

