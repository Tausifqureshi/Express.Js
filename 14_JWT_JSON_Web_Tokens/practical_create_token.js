// ========================================= GENERATE TOKEN ======================================= //
const express = require('express');
const app = express();
// const jwt = require('jsonwebtoken');

app.get('/generate', (req, res) => {
    // const token = jwt.sign({ id: 1 }, "SECRET");
    res.send("Pehle jsonwebtoken install karein!");
});

app.listen(6019, () => console.log("JWT Generate Server..."));
