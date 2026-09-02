// ========================================= ROUTE & QUERY PARAMETERS ======================================= //
// ChatGPT Se Liya Hua Syntex --->
// Kabhi-kabhi humein URL me aisi value bhejna hoti hai jo fix nahi hoti (jaise har user ka ID alag hota hai).
//
// 1. Route Parameters (Dynamic URLs): ':' lagakar variable banate hain jaise /user/:id. Ise 'req.params.id' se padhte hain.
// 2. Query Parameters: URL ke end me '?' (question mark) ke baad lagte hain. Inka main kaam filtering, sorting, ya searching hota hai. Ise 'req.query' se padhte hain.
// 3. Old vs New: Raw Node.js me 'url' module (url.parse(req.url, true)) ka use karna padta tha, jabki Express me req.params aur req.query directly mil jate hain.

const parametersExample = () => {
    const express = require('express');
    const app = express();

    app.get('/user/:id', (req, res) => {
        console.log("Param aaya:", req.params.id"); res.status(200).send("Param mila!");
    });

    // app.listen(3005, () => console.log("Params Server running...");
};
// parametersExample();

