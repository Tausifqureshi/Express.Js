// ========================================================================================= //
// PRACTICAL: THIRD-PARTY MIDDLEWARE (Morgan Example)
// (Note: Isko run karne se pehle 
// pm install morgan zaroor karna!)
// Run: node 02_Third_Party_Middleware/practical_third_party.js
// ========================================================================================= //

const express = require('express');
const app = express();

// Is block ko uncomment karne se pehle morgan install karna hoga
/*
const morgan = require('morgan');

// Morgan Middleware laga diya
// Ab jab bhi koi request aayegi, Morgan automatically uski detail console par sundar print karega
app.use(morgan('dev'));
*/

app.get('/test', (req, res) => {
    // Bina Morgan ke humein khud console.log("Request Aayi") likhna padta res.status(200).send("Morgan ne aapki request Terminal me print kar di hogi!");
});

app.listen(4002, () => {
    console.log("🚀 Server running on http://localhost:4002");
    console.log("Browser me http://localhost:4002/test open karo aur phir terminal me magic dekho!");
});

