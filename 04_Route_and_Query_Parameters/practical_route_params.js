// ========================================================================================= //
// PRACTICAL: ROUTE PARAMETERS (Dynamic URLs)
// Run: node 04_Route_and_Query_Parameters/practical_route_params.js
// ========================================================================================= //

const express = require('express');
const app = express();

// TARIKA 1: OLD NODE.JS (Bahut bada if-else aur string split)
// Agar url '/user/123' hai, toh usko split karke '123' nikalna padta tha.

// TARIKA 2: NEW EXPRESS.JS (Smart Way)
// ':' lagakar directly variable bana lo
app.get('/user/:userId', (req, res) => {
    // Express khud URL se 'userId' nikal kar req.params me rakh dega
    const id = req.params.userId;
    res.send(Aapne User ID:  + id +  manga hai!);
});

// Multiple Params bhi use kar sakte hain
app.get('/flight/:from/:to', (req, res) => {
    res.json({ 
        message: "Flight Details", 
        departure: req.params.from, 
        destination: req.params.to 
    });
});

app.listen(6013, () => console.log("🚀 Route Params Server on http://localhost:6013"));
