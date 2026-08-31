// ========================================= MULTIPLE FILE UPLOAD ======================================= //
const express = require('express');
const app = express();
// const multer = require('multer');
// const upload = multer({ dest: 'uploads/' });

// app.post('/photos', upload.array('photos', 5), (req, res) => { ... });

app.get('/', (req, res) => {
    res.send("Multiple files upload ka example");
});
app.listen(6018, () => console.log("Multiple Upload Server..."));
