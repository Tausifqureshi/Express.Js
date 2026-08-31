// ========================================= VERIFY TOKEN ======================================= //
const express = require('express');
const app = express();
// const jwt = require('jsonwebtoken');

app.get('/verify', (req, res) => {
    // const token = req.headers.authorization;
    // jwt.verify(token, "SECRET");
    res.send("Verify token example");
});

app.listen(6020, () => console.log("JWT Verify Server..."));
