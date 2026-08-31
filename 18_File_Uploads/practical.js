// ========================================================================================= //
// PRACTICAL: FILE UPLOAD (Multer)
// Note: npm install multer
// Run: node 18_File_Uploads/practical.js
// ========================================================================================= //
const express = require('express');
const app = express();

/* 
Multer install karne ke baad ye code chalega:
const multer = require('multer');

// Kahan save karna hai? 'uploads/' folder me.
const upload = multer({ dest: 'uploads/' });

// 'upload.single' middleware Multer ka hai
app.post('/upload-dp', upload.single('profile_pic'), (req, res) => {
    // Multer ne image file 'req.file' me daal di hai
    console.log(req.file);
    res.json({ message: "Photo upload ho gayi!", file_details: req.file });
});
*/

app.get('/', (req, res) => res.send("Multer Upload dekhne ke liye file code padho!"));
app.listen(6010, () => console.log("🚀 File Upload Server on http://localhost:6010"));
