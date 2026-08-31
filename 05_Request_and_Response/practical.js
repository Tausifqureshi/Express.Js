// ========================================= Practical: Req & Res Objects ======================================= //
const express = require('express');
const app = express();

// Body Parser Middleware (req.body use karne ke liye zaruri hai)
app.use(express.json()); 

app.post('/user', (req, res) => {
    // Request Object ki cheezein padhna
    console.log("Headers: ", req.headers['user-agent']);
    console.log("Body Data: ", req.body); // JSON data frontend se
    
    // Response Object se wapas bhejna
    // Hum chaining (status uske baad json) kar sakte hain
    res.status(201).json({
        message: "User created successfully!",
        dataReceived: req.body
    });
});

app.listen(3000, () => {
    console.log("Req/Res Server on http://localhost:3000");
});
