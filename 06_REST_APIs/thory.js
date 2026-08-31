// ========================================= REST APIs ======================================= //
// ChatGPT Se Liya Hua Syntex --->
// REST API ek "Rules ka set" hai (Architecture Pattern) taaki frontend aur backend ke beech standard baat-cheet ho sake.
//
// 1. Client-Server Architecture: Frontend aur Backend alag hone chahiye.
// 2. Statelessness: Har request apne aap me puri honi chahiye (No saved memory).
// 3. CRUD Operations: C(POST), R(GET), U(PUT), D(DELETE) HTTP methods use hote hain.
// 4. JSON Format: Data hamesha JSON me bheja jata hai.

const restApiExample = () => {
    const express = require('express');
    const app = express();
    app.use(express.json());

    app.get('/users', (req, res) => {
        res.json([{id: 1, name: "Tausif"}]);
    });

    // app.listen(3008, () => console.log("REST Server running..."));
};
// restApiExample();
