// ========================================= Old vs New: Middleware Logic ======================================= //
const http = require('http');
const express = require('express');

const runMiddlewareComparison = () => {
    // ========================================================================================= //
    // TARIKA 1: Old Style (Raw Node.js) - Middleware ka koi asaan tarika nahi tha
    // ========================================================================================= //
    const oldServer = http.createServer((req, res) => {
        // Har if-else block ke andar same logger logic likhna padta tha ya manual function call karni padti thi
        console.log([OLD LOG] User aaya is path pe: ); 
        
        if(req.url === '/') {
            res.end("Home");
        } else if(req.url === '/dashboard') {
            res.end("Dashboard");
        }
    });
    oldServer.listen(3001, () => console.log("Old Style Middleware Simulation on 3001"));

    // ========================================================================================= //
    // TARIKA 2: New Style (Express.js) - app.use() ek baar lagao, har route pe chalega!
    // ========================================================================================= //
    const app = express();

    // Ye apna pehla Middleware hai (Global Middleware)
    app.use((req, res, next) => {
        console.log([NEW LOG] Middleware Fired! User gaya is path pe: );
        // next() bulana bohot zaroori hai, warna request aage pass nahi hogi
        next(); 
    });

    app.get('/', (req, res) => {
        res.send("Home");
    });

    app.get('/dashboard', (req, res) => {
        res.send("Dashboard");
    });

    app.listen(3002, () => console.log("New Style Middleware Express on 3002"));
};
runMiddlewareComparison();
