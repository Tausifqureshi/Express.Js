// ========================================= ADVANCED / CHAIN ROUTING ======================================= //
// Agar ek hi URL par GET aur POST dono lagane hon toh chaining use karte hain.
const express = require('express');
const app = express();

app.route('/user')
    .get((req, res) => {
        res.send("User ka data dekha (GET)");
    })
    .post((req, res) => {
        res.send("Naya User banaya (POST)");
    })
    .put((req, res) => {
        res.send("User update kiya (PUT)");
    });

app.listen(3004, () => console.log("🚀 Chain Routing Server on http://localhost:3004"));
