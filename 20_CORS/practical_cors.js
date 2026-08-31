// ========================================================================================= //
// PRACTICAL: CORS POLICY (Cross Origin Resource Sharing)
// Note: npm install cors
// Run: node 20_CORS/practical.js
// ========================================================================================= //
const express = require('express');
const app = express();

/*
const cors = require('cors');

// CORS Middleware
// Agar aap 'app.use(cors())' likh doge toh DUNIYA KI KOI BHI WEBSITE is API ko chala sakegi (Jisko '*' kehte hain)

app.use(cors({
    origin: 'http://localhost:3000', // Sirf React app ko permission di
    methods: ['GET', 'POST'], // Sirf GET aur POST method allow kiye
    credentials: true // Cookies bhejne ki ijazat
}));
*/

app.get('/api/data', (req, res) => {
    res.json({ message: "Agar React Frontend alag port (3000) pe hai, toh bina CORS ke ye data wahan nahi dikhega!" });
});

app.listen(6012, () => console.log("🚀 CORS Server on http://localhost:6012"));
