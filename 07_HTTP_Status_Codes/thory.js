// ========================================= HTTP STATUS CODES ======================================= //
// ChatGPT Se Liya Hua Syntex --->
// Frontend ko result ke baare me batane ke liye Backend hamesha ek 3-digit ka code bhejta hai.
//
// 1. 2xx (SUCCESS): Sab Sahi Hai. 200 (OK), 201 (Created).
// 2. 4xx (CLIENT ERRORS): Frontend/User Ki Galti. 400 (Bad Request), 401 (Unauthorized), 403 (Forbidden), 404 (Not Found).
// 3. 5xx (SERVER ERRORS): Backend Ki Galti. 500 (Internal Server Error) code crash hone par.

const statusCodesExample = () => {
    const express = require('express');
    const app = express();

    app.get('/not-found', (req, res) => {
        res.status(404).json({ error: "Page not found!" });
    });

    // app.listen(3009, () => console.log("Status Server running..."));
};
// statusCodesExample();
