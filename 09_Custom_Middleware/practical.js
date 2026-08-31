// ========================================================================================= //
// PRACTICAL: CUSTOM MIDDLEWARE
// Run: node 09_Custom_Middleware/practical.js
// ========================================================================================= //
const express = require('express');
const app = express();

// CUSTOM MIDDLEWARE: Ye function har request par chalega
const myLogger = (req, res, next) => {
    console.log([LOG] Time:  - URL: );
    
    // Agar next() nahi bulaya, toh user ki screen ghoomti reh jayegi!
    next(); 
};

// Middleware ko Global lagana
app.use(myLogger);

app.get('/', (req, res) => {
    res.send("Dekho terminal me log print hua ya nahi!");
});

app.listen(6003, () => console.log("🚀 Custom Middleware Server on http://localhost:6003"));
