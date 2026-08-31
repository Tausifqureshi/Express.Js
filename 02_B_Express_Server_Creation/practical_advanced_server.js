// ========================================= 2. Advanced / Real-world Express Server ======================================= //
// Ye ek production-ready jaisa server hai, jisme POST data padhne (JSON) ki kshamata hai aur error handling bhi hoti hai.

const express = require('express');
const app = express();

// A. Middlewares Setup (Ye zaroori hote hain advanced servers me)
app.use(express.json()); // Frontend se aane wale JSON data ko padhne ke liye

// B. Routes Setup
app.get('/', (req, res) => {
    res.status(200).json({
        server: "Express Advanced Server",
        status: "Running Perfectly",
        developer: "Tausif"
    });
});

app.post('/test', (req, res) => {
    const data = req.body;
    res.status(201).json({ message: "Data received successfully!", yourData: data });
});

// 404 Handler (Hamesha end me)
app.use((req, res) => {
    res.status(404).json({ error: "404 Error: Route nahi mila!" });
});
});

// C. Port Error Handling (Advanced)
const PORT = 3005;

const server = app.listen(PORT, () => {
    console.log(🚀 Advanced Express Server is running!);
    console.log(👉 Check API: http://localhost: + PORT);
});

// Agar port pehle se busy ho toh error pakadna
server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
        console.log(❌ ERROR: Port  + PORT +  pehle se kisi aur app me use ho raha hai!);
    } else {
        console.log("❌ SERVER ERROR:", err.message);
    }
});

