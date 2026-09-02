// ========================================= TEMPLATE ENGINES (EJS) ======================================= //
// ChatGPT Se Liya Hua Syntex --->
// Aajkal frontend React/Angular me banta hai, par kabhi kabhi Express se direct HTML pages bhejna padta hai.
// Normal HTML me hum variables (jaise user ka naam) pass nahi kar sakte. Isliye EJS (Embedded JavaScript) ka use hota hai.
//
// 1. Setup: app.set('view engine', 'ejs');
// 2. Views Folder: Saari .ejs files by default iews folder me rakhi jati hain.
// 3. res.render(): HTML file (ejs) ko bhejne aur usme variables bhejne ke liye // es.render('filename', {data}) use hota hai.

const ejsExample = () => {
    const express = require('express');
    const path = require('path');
    const app = express();

    // npm install ejs zaroori hai
    // app.set('view engine', 'ejs');
    // app.set('views', path.join(__dirname, 'views')); // Views folder ka pata

    app.get('/', (req, res) => {
        // 'index.ejs' load hoga aur 'name' ki jagah Tausif replace ho jayega
        // res.render('index', { name: "Tausif Bhai", role: "Expert Developer" }); res.status(200).send("EJS requires NPM package to run");
    });

    app.use((req, res) => res.status(404).json({ error: "404 Route Not Found" }));

    // const PORT = 3023;
    // const server = app.listen(PORT, () => console.log("EJS Server running on http://localhost: + PORT)");
    // server.on('error', (err) => { if (err.code === 'EADDRINUSE') console.log("Port busy hai!"); });
};
// ejsExample();


