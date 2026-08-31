// ========================================= SINGLE FILE UPLOAD ======================================= //
const express = require('express');
const app = express();
// const multer = require('multer');
// const upload = multer({ dest: 'uploads/' });

app.get('/', (req, res) => {
    res.send("Pehle multer install karein 
pm install multer");
});

app.listen(6017, () => console.log("Single Upload Server..."));
