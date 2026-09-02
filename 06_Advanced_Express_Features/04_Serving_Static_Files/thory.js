// ========================================= SERVING STATIC FILES ======================================= //
// ChatGPT Se Liya Hua Syntex --->
// Jab hum website banate hain, toh usme sirf text ya JSON nahi hota, balki CSS files, images, aur PDFs bhi hote hain.
// Node.js (raw http module) me in files ko dikhana bohot mushkil tha. Express ise ek line me solve kar deta hai.
//
// 1. The Public Folder: Hum ek public naam ka folder banate hain jisme saari static (jo badalti nahi) files rakhte hain.
// 2. express.static(): Ye Express ka ek built-in middleware hai. 
// 3. Jaise hi hum likhte hain pp.use(express.static('public')), Express us folder ko poori duniya ke liye open kar deta hai. 

const staticFilesExample = () => {
    const express = require('express');
    const path = require('path');
    const app = express();

    // 'public' folder ko static mark kar diya
    app.use(express.static(path.join(__dirname, 'public')));

    app.get('/', (req, res) => { res.status(200).send("If you put an image 'logo.png' in public folder, you can see it at /logo.png");
    });

    app.use((req, res) => res.status(404).json({ error: "404 Route Not Found" }));

    // const PORT = 3022;
    // const server = app.listen(PORT, () => console.log("Static Server running on http://localhost: + PORT)");
    // server.on('error', (err) => { if (err.code === 'EADDRINUSE') console.log("Port busy hai!"); });
};
// staticFilesExample();


