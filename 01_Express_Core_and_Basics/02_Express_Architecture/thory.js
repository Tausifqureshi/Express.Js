// ========================================= EXPRESS.JS ARCHITECTURE & WORKING ======================================= //
// ChatGPT Se Liya Hua Syntex --->
// Express.js Node.js ke upar bana ek framework hai. Toh background me vahi Event Loop aur Thread Pool kaam karta hai.
// Par Express usme kuch naye layers aur fiyde (benefits) add kar deta hai!
//
// 1. The Request (Client to Server): Node.js ka default http module request pakadta hai. Par Express beech me aakar usme req.body, req.query add kar deta hai.
// 2. The Express App Object: Ye 'app' object Express ka dil (heart) hai. Iske paas routing aur middlewares ko manage karne ka poora system hota hai.
// 3. The Middleware Stack: Request seedha route par nahi jati. Wo ek Pipeline se guzarti hai jise Middleware Stack kehte hain.
// 4. Route Matching: Middleware se hote hue jab request aage badhti hai, toh Express dekhta hai ki Client ne kaunsa URL manga hai.
// 5. The Response: Raw Node.js me JSON wapas bhejna bohot lamba tha. Express me route handler bas es.json(data) bolta hai.

const expressArchitectureExample = () => {
    const express = require('express');
    const app = express();
    
    // Middleware Pipeline Example
    app.use((req, res, next) => {
        console.log("1. Request aayi!");
        next();
    });

    app.get('/', (req, res) => {
        console.log("2. Route match hua aur response bheja!"); res.status(200).send("Architecture is working!");
    });

    // 404 Handle
    app.use((req, res) => res.status(404).send("404 Error: Page Not Found"));
    
    // const PORT = 3000;
    // const server = app.listen(PORT, () => console.log("Architecture Server: http://localhost:" + PORT)");
    // server.on('error', (err) => { if(err.code === 'EADDRINUSE') console.log("Port " + PORT + " busy hai!") });
};
// expressArchitectureExample();


