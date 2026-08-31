// ========================================= ROUTES & CONTROLLERS ======================================= //
// ChatGPT Se Liya Hua Syntex --->
// MVC ko code me utarne ka sabse main step.
//
// 1. Routes File: Isme Express ka Router() use karte hain. Iska kaam sirf itna hai ki request aane par sahi Controller ko bulana.
// 2. Controllers File: Yahan saara lamba logic likha jata hai, aur functions ko export kiya jata hai.
// 3. Clean server.js: Main server.js file sirf 10-15 line ki reh jati hai kyunki saara logic alag alag folders me bant gaya.

const routerExample = () => {
    const express = require('express');
    const app = express();
    
    // ================== routes/userRoutes.js ==================
    const router = express.Router();
    
    // Yahan Controller logic define hai (Asliat me dusri file me hota hai)
    const userControllerFunction = (req, res) => {
        res.send("List of all users from Controller");
    };

    router.get('/', userControllerFunction);
    
    // ================== server.js (Main File) ==================
    // Main file me bas Router ko import karke jod dete hain
    app.use('/api/users', router);

    // const PORT = 3013;
    // app.listen(PORT, () => {
    //     console.log(Router Server is running on http://localhost:);
    // });
};
// routerExample();
