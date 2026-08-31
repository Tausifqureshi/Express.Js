// ========================================= FILE UPLOADS (MULTER) ======================================= //
// ChatGPT Se Liya Hua Syntex --->
// Normal text JSON me aata hai. Lekin Images/Videos multipart/form-data me aate hain. Express ise direct nahi padh sakta.
//
// 1. Multer Middleware: Ye file upload ke liye sabse famous NPM library hai.
// 2. Flow: User file bhejta hai -> Multer file ko Hard Drive pe save karta hai -> File ki details eq.file me de deta hai.

const multerExample = () => {
    const express = require('express');
    const app = express();

    // Yahan multer package install hona chahiye: npm install multer
    // const multer = require('multer');
    // const upload = multer({ dest: 'uploads/' }); // Files automatically yahan save hongi

    // HTML Form form jisme enctype="multipart/form-data" ho
    app.post('/upload', /* upload.single('profilePic'), */ (req, res) => {
        // Agar multer chalta, toh req.file me image data hota
        // console.log(req.file); 
        res.json({ message: "File uploaded successfully!" });
    });

    // const PORT = 3018;
    // app.listen(PORT, () => {
    //     console.log(File Upload Server is running on http://localhost:);
    // });
};
// multerExample();
