// ========================================================================================= //
// PRACTICAL: VALIDATION
// Note: npm install express-validator
// Run: node 17_Validation/practical.js
// ========================================================================================= //
const express = require('express');
const app = express();
app.use(express.json());

/* 
Is part ko chalane ke liye express-validator install karna hoga
const { body, validationResult } = require('express-validator');

// Validation Rules lagaye (Name zaroori hai, Email proper ho, password 6 char ka ho)
app.post('/register', [
    body('name').notEmpty().withMessage("Naam likhna zaroori hai!"),
    body('email').isEmail().withMessage("Galat Email Id hai!"),
    body('password').isLength({ min: 6 }).withMessage("Password 6 letter ka hona chahiye")
], (req, res) => {
    
    // Check karo kya koi rule toota hai?
    const errors = validationResult(req);
    
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    res.json({ success: true, message: "User Register Ho Gaya!" });
});
*/

app.get('/', (req, res) => res.send("Validation dekhne ke liye file code padho!"));
app.listen(6009, () => console.log("🚀 Validation Server on http://localhost:6009"));
