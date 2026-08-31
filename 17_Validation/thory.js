// ========================================= VALIDATION ======================================= //
// ChatGPT Se Liya Hua Syntex --->
// Hamesha yaad rakho: "Never trust the user input!"
//
// 1. Kyu Zaruri Hai? Agar backend validation nahi hai, toh hacker Postman se direct email ki jagah number daal dega aur database fat jayega.
// 2. express-validator: Ye ek NPM package hai jo data check karta hai (e.g. check('email').isEmail()).
// 3. Flow: Route -> Validator Middleware -> Agar error hai toh wahi se Error bhejo -> Agar nahi toh asoolan aage bhejo.

const validationExample = () => {
    // const { body, validationResult } = require('express-validator');
    // app.post('/user', [body('email').isEmail()], (req, res) => { ... });
    console.log("Validation complete!");
};
// validationExample();
