// ========================================================================================= //
// PRACTICAL: REQUEST OBJECT (req) IN EXPRESS.JS
// Run: node 01_Request_Object/practical_req.js
// ========================================================================================= //

const express = require('express');
const app = express();

// Ye middleware zaroori hai eq.body ko padhne ke liye!
app.use(express.json()); 

// 1. req.query (URL me ?name=Tausif)
app.get('/search', (req, res) => {
    console.log("Query mili:", req.query);
    res.send(Aapne search kiya hai:  + req.query.name);
});

// 2. req.params (URL me /user/123)
app.get('/user/:id', (req, res) => {
    console.log("Params mile:", req.params);
    res.send(Aap User ID dekh rahe hain:  + req.params.id);
});

// 3. req.body (POST request se data lana)
app.post('/login', (req, res) => {
    console.log("Body me data aaya:", req.body);
    res.send(Aapka email hai:  + req.body.email);
});

// 4. req.headers (Request bhejne wale ka browser check karna)
app.get('/my-info', (req, res) => {
    console.log("Headers mile:", req.headers['user-agent']);
    res.send(Aapka Browser hai:  + req.headers['user-agent']);
});

app.listen(3000, () => {
    console.log("🚀 Server running on http://localhost:3000");
    console.log("Test req.query: http://localhost:3000/search?name=Tausif");
    console.log("Test req.params: http://localhost:3000/user/123");
    console.log("Test req.headers: http://localhost:3000/my-info");
    console.log("Test req.body: Postman se POST request /login par bhejein");
});
