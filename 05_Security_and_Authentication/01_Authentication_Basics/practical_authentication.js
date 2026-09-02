// ========================================================================================= //
// PRACTICAL: AUTHENTICATION (Basic Idea)
// Run: node 13_Authentication/practical.js
// ========================================================================================= //
const express = require('express');
const app = express();
app.use(express.json());

// Dummy Database
const users = [{ email: "test@gmail.com", password: "123" }];

app.post('/login', (req, res) => {
    const { email, password } = req.body;

    // Check agar email aur password match karta hai (Authentication)
    const foundUser = users.find(u => u.email === email && u.password === password);

    if (foundUser) { res.status(200).json({ success: true, message: "Aap login ho gaye!" });
        // Asal me yahan hum Token (JWT) generate karke bhejte hain
    } else {
        res.status(401).json({ success: false, message: "Email ya Password galat hai!" });
    }
});

app.listen(6005, () => console.log("🚀 Auth Server on http://localhost:6005");

