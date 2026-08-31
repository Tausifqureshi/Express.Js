// ========================================= EXPRESS.JS RESPONSE OBJECT (res) ======================================= //
// Ye practical dikhata hai ki Express.js me Text, JSON Object, aur HTML bhejna kitna asan hai.

const express = require('express');
const app = express();

console.log("=== Express Response Demo ===\n");

// =======================================================
// 1. BASIC SERVER (Sirf Text Bhejna)
// =======================================================
app.get('/', (req, res) => {
    // Express me 'res.writeHead' aur 'res.end' likhne ki zarurat nahi hai!
    // 'res.send' khud samajh jata hai ki ye text hai aur header set kar deta hai.
    res.send("Hello Tausif Bhai! Aapka Express Text Server chal gaya hai.");
});

// =======================================================
// 2. JSON OBJECT BHEJNE WALA SERVER
// =======================================================
app.get('/api/user', (req, res) => {
    const userObj = {
        name: "Tausif Qureshi",
        role: "Developer",
        skill: "Express.js"
    };
    
    // Node.js me JSON.stringify() karna padta tha. Express me 'res.json()' sab khud kar deta hai!
    res.json(userObj);
});

// =======================================================
// 3. HTML KA KAAM BHEJNE KA TARIKA
// =======================================================
app.get('/html', (req, res) => {
    // Express ko bas HTML string dedo, wo Content-Type 'text/html' khud set kar dega
    const htmlContent = 
        <html>
            <head><title>My Express Server</title></head>
            <body style="font-family: Arial; text-align: center; margin-top: 50px;">
                <h1 style="color: blue;">Welcome to Express.js HTML Page! 🚀</h1>
                <p>Ye HTML page Express server se aa raha hai bina extra headers set kiye.</p>
            </body>
        </html>
    ;
    res.send(htmlContent);
});

// =======================================================
// 4. 404 CATCH-ALL ROUTE
// =======================================================
// Agar upar wale 3 routes ke alawa user koi aur link daale, toh ye chalega
app.use((req, res) => {
    res.status(404).send("<h1 style='color:red;'>404 Error: Page nahi mila!</h1>");
});


// =======================================================
// SERVER START & ERROR HANDLING
// =======================================================
const PORT = 3005;

const server = app.listen(PORT, () => {
    console.log(✅ Server chalu ho gaya hai: http://localhost: + PORT);
    console.log(👉 Text Test: http://localhost: + PORT);
    console.log(👉 JSON Test: http://localhost: + PORT + /api/user);
    console.log(👉 HTML Test: http://localhost: + PORT + /html);
});

server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
        console.log(❌ ERROR: Port  + PORT +  pehle se busy hai. Purana server band karein!);
    } else {
        console.log("❌ SERVER ERROR:", err.message);
    }
});
