// ========================================= CORS (Cross-Origin) ======================================= //
// ChatGPT Se Liya Hua Syntex --->
// Ye error Backend ka nahi, Browser ki security ka hota hai jab Frontend aur Backend alag-alag domain par hon.
//
// 1. Origin Block: Browser dekhta hai ki domain alag hai toh request block kar deta hai.
// 2. CORS Middleware: Express se hum batate hain ki "Bhai, us website ko data lene do, wo humari hi hai".

const corsExample = () => {
    const express = require('express');
    const app = express();

    // Yahan cors package install hona chahiye: npm install cors
    // const cors = require('cors');

    // Allow all cross-origin requests
    // app.use(cors()); 
    
    // OR Specific React App ko allow karna ho toh:
    // app.use(cors({ origin: 'http://localhost:3000' }));

    app.get('/api/data', (req, res) => {
        res.json({ message: "Hello React Frontend! Aap ye data ab le sakte hain kyunki CORS issue fix ho gaya hai." });
    });

    // const PORT = 3020;
    // app.listen(PORT, () => {
    //     console.log(CORS Server is running on http://localhost:);
    // });
};
// corsExample();
