// ========================================================================================= //
// PRACTICAL: QUERY PARAMETERS (Filters & Searches)
// Run: node 04_Route_and_Query_Parameters/practical_query_params.js
// ========================================================================================= //

const express = require('express');
const app = express();

// TARIKA 1: OLD NODE.JS 
// url.parse(req.url, true).query karna padta tha query lene ke liye.

// TARIKA 2: NEW EXPRESS.JS (Smart Way)
// Express automatically '?' ke baad ka data parse kar leta hai
app.get('/search', (req, res) => {
    // Agar URL hai: /search?category=shoes&color=black
    const category = req.query.category;
    const color = req.query.color;

    if (category && color) {
        res.send(Aap dhoond rahe hain:  + color +  rang ke  + category);
    } else {
        res.send("Aapne query me poora data nahi bheja!");
    }
});

app.listen(6014, () => console.log("🚀 Query Params Server on http://localhost:6014/search?category=mobiles&color=red"));
