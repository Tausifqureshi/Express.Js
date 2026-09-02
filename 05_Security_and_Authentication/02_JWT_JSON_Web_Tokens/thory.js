// ========================================= JWT (JSON Web Tokens) ======================================= //
// ChatGPT Se Liya Hua Syntex --->
// JWT ek secure digital token hai jo API yaadash (stateless) ko solve karta hai.
//
// 1. Structure: Header . Payload . Signature (3 parts).
// 2. Payload: Isme user ka ID aur role hota hai (Password KABHI nahi rakhna).
// 3. Signature: Backend ki Secret Key se banta hai taaki koi hacker token ko badal na sake.
// 4. Verify: Frontend jab token bhejta hai, toh backend pehle Secret Key se verify karta hai.

const jwtExample = () => {
    const express = require('express');
    const app = express();
    
    // Yahan jsonwebtoken package install hona chahiye: npm install jsonwebtoken
    // const jwt = require('jsonwebtoken');
    // const SECRET_KEY = "super_secret_code_mat_batana";

    app.get('/login', (req, res) => {
        const userPayload = { userId: 105, role: "user" };
        
        // Token Banaya
        // const token = jwt.sign(userPayload, SECRET_KEY, { expiresIn: '1h' }); res.status(200).json({ message: "Login successful!", token: "dummy_jwt_token_here" });
    });

    app.get('/protected-profile', (req, res) => {
        // const token = req.headers.authorization;
        // if(!token) return res.status(401).send("No Token Found!");
        
        // try {
        //     const decoded = jwt.verify(token, SECRET_KEY);
        // res.status(200).json({ message: "Welcome!", userData: decoded });
        // } catch(err) {
        //     res.status(403).send("Invalid Token!");
        // } res.status(200).send("Protected profile route working!");
    });

    // const PORT = 3014;
    // app.listen(PORT, () => {
    //     console.log("JWT Server is running on http://localhost:");
    // });
};
// jwtExample();


