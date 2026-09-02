// ========================================= MVC ARCHITECTURE ======================================= //
// ChatGPT Se Liya Hua Syntex --->
// MVC ek Design Pattern hai jo code ko saaf rakhne me madad karta hai.
//
// 1. Model (M): Database se baat karne ka logic (Mongoose wagera).
// 2. View (V): User Interface (HTML/React). Express me API banate waqt hum iski fikr zyada nahi karte.
// 3. Controller (C): Asli dimaag (logic). Ye Model se data lata hai aur Client ko bhejta hai.
//
// Isse "Spaghetti Code" (khichdi) se bacha jata hai.

const mvcExample = () => {
    const express = require('express');
    const app = express();
    
    // MODEL (Dummy Data)
    const usersData = [{ id: 1, name: "Tausif" }, { id: 2, name: "Aman" }];

    // CONTROLLER (Logic)
    const getAllUsers = (req, res) => {
        // Logic yahan chalta hai aur Model se data lekar View (Client) ko bhejta hai
        res.status(200).json({ success: true, data: usersData });
    };

    // ROUTE
    app.get('/users', getAllUsers);

    // const PORT = 3012;
    // app.listen(PORT, () => {
    //     console.log("MVC Server is running on http://localhost:");
    // });
};
// mvcExample();

