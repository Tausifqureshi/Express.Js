// ========================================= AUTHORIZATION & ROLES ======================================= //
// ChatGPT Se Liya Hua Syntex --->
// Authorization matlab: "Aap kya-kya kar sakte hain?" (Adhikaar).
//
// 1. Difference: Login hona (Authentication) aur kisi doosre ki post delete karne ka haq hona (Authorization) alag cheezein hain.
// 2. Role Middleware: Hum ek isAdmin middleware banate hain jo check karta hai req.user.role === 'admin' hai ya nahi.

const authRoleExample = () => {
    const express = require('express');
    const app = express();

    // Fake User (Normally ye data JWT verify hone ke baad milta hai)
    const reqUser = { id: 1, name: "Tausif", role: "user" }; 

    // Middleware to check Admin
    const isAdmin = (req, res, next) => {
        if (reqUser.role === 'admin') {
            next(); // Jaa sakte ho aage
        } else {
            res.status(403).json({ error: "Access Denied! You are not an Admin." });
        }
    };

    app.get('/public', (req, res) => { res.status(200).send("Public Page: Anyone can see this!");
    });

    // Yahan isAdmin middleware lagaya hai
    app.get('/dashboard', isAdmin, (req, res) => { res.status(200).send("Admin Dashboard: Welcome Boss!");
    });

    // const PORT = 3016;
    // app.listen(PORT, () => {
    //     console.log("Role Server is running on http://localhost:");
    // });
};
// authRoleExample();


