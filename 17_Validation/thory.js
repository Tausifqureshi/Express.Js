// ========================================= VALIDATION ======================================= //
// ChatGPT Se Liya Hua Syntex --->
// Hamesha yaad rakho: "Never trust the user input!"
//
// 1. Kyu Zaruri Hai? Agar backend validation nahi hai, toh hacker Postman se direct email ki jagah number daal dega aur database fat jayega.
// 2. express-validator: Ye ek NPM package hai jo data check karta hai (e.g. check('email').isEmail()).
// 3. Flow: Route -> Validator Middleware -> Agar error hai toh wahi se Error bhejo -> Agar nahi toh asoolan aage bhejo.

const validationExample = () => {
    const express = require('express');
    const app = express();
    app.use(express.json());

    // Yahan express-validator package install hona chahiye: npm install express-validator
    // const { body, validationResult } = require('express-validator');

    // Dummy array of middlewares for validation
    // const registerValidationRules = [
    //     body('name').notEmpty().withMessage("Name is required"),
    //     body('email').isEmail().withMessage("Invalid Email")
    // ];

    app.post('/register', /* registerValidationRules, */ (req, res) => {
        // const errors = validationResult(req);
        // if (!errors.isEmpty()) {
        //     return res.status(400).json({ errors: errors.array() });
        // }
        
        // Agar yahan tak aa gaya matlab sab sahi hai
        res.json({ message: "User Successfully Registered!", data: req.body });
    });

    // const PORT = 3017;
    // app.listen(PORT, () => {
    //     console.log(Validation Server is running on http://localhost:);
    // });
};
// validationExample();
