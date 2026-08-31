// ========================================================================================= //
// PRACTICAL: RESPONSE OBJECT (res) IN EXPRESS.JS
// Run: node 02_Response_Object/practical_res.js
// ========================================================================================= //

const express = require('express');
const path = require('path'); // Core module file path nikalne ke liye
const app = express();

// 1. res.send() (Text ya HTML bhejna)
app.get('/html', (req, res) => {
    res.send("<h1>Ye ek HTML Response hai!</h1>");
});

// 2. res.json() (API ke liye JSON Data bhejna)
app.get('/api/users', (req, res) => {
    // res.json() apne aap JSON me convert kar dega
    res.json({
        success: true,
        data: [{ id: 1, name: "Tausif" }, { id: 2, name: "Aman" }]
    });
});

// 3. res.status() (Status code ke sath bhejna)
app.get('/error', (req, res) => {
    // 404 Not Found
    res.status(404).json({
        success: false,
        message: "Jo aap dhoondh rahe hain wo mila nahi!"
    });
});

// 4. res.redirect() (Ek page se dusre par bhejna)
app.get('/old-page', (req, res) => {
    console.log("User old page par aaya, usko new-page par dhakel rahe hain...");
    res.redirect('/html'); 
});

// 5. res.sendFile() (Poori file bhej dena)
app.get('/download-file', (req, res) => {
    // Current folder ki theory.js bhej rahe hain example ke liye
    const fileLocation = path.join(__dirname, 'theory.js');
    res.sendFile(fileLocation);
});

app.listen(3001, () => {
    console.log("🚀 Server running on http://localhost:3001");
    console.log("Test res.send: http://localhost:3001/html");
    console.log("Test res.json: http://localhost:3001/api/users");
    console.log("Test res.status: http://localhost:3001/error");
    console.log("Test res.redirect: http://localhost:3001/old-page");
    console.log("Test res.sendFile: http://localhost:3001/download-file");
});
