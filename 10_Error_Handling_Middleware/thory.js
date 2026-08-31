// ========================================= ERROR HANDLING MIDDLEWARE ======================================= //
// ChatGPT Se Liya Hua Syntex --->
// Server ko crash hone se bachane ke liye errors ko pakadna (catch karna) padta hai.
//
// 1. Special 4 Params: Is middleware me 4 parameters hote hain (err, req, res, next).
// 2. Position: Isko hamesha saare Routes ke END (aakhiri me) lagana hota hai.
// 3. next(err): Agar kisi route me error aayi, toh hum 
ext(err) likh dete hain aur request seedha is error handler me aa jati hai.

const errorHandlingExample = () => {
    const express = require('express');
    const app = express();

    app.get('/', (req, res, next) => {
        // next(new Error("Kuch gadbad hai!")); // Ye direct error handler me bhej dega
    });

    // Error Middleware (End me lagta hai)
    app.use((err, req, res, next) => {
        console.error(err.message);
        res.status(500).send("Server Error!");
    });

    // app.listen(3013, () => console.log("Error Middleware Server..."));
};
// errorHandlingExample();
