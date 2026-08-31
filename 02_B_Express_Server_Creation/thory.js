// ========================================= EXPRESS SERVER CREATION ======================================= //
// ChatGPT Se Liya Hua Syntex --->
// Frontend (jaise React ya HTML) user ko UI dikhata hai. Par data maangne aur bhejne ke liye hume Backend Server chahiye.
// Node.js me 'http' module se server banana kaafi lamba hota tha, par Express us process ko bas 3-4 lines ka kar deta hai.
//
// 1. app = express(): Ye function ek poori server machine tayyar kar deta hai.
// 2. The Port: Server computer ke jis "darwaze" par sunta hai (listen), usko Port kehte hain (jaise 3000, 5000).
// 3. app.listen(PORT): Ye line engine ko chalu karti hai, jiske bina server dead rehta hai.

const expressServerExample = () => {
    const express = require("express"); 
    const app = express(); // Server machine ban gayi

    // Ek simple Rasta (Route) jahan log aayenge
    app.get('/', (req, res) => {
        res.send("Welcome to the Express Server!");
    });

    const PORT = 8000;
    
    // Server start karne ka logic (Commented hai taaki error na aaye agar multiple files open hon)
    // app.listen(PORT, () => {
    //     console.log(Express Server is beautifully running on http://localhost: + PORT);
    // });
};
// expressServerExample();
