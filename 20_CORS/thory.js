// ========================================= CORS (Cross-Origin) ======================================= //
// ChatGPT Se Liya Hua Syntex --->
// Ye error Backend ka nahi, Browser ki security ka hota hai jab Frontend aur Backend alag-alag domain par hon.
//
// 1. Origin Block: Browser dekhta hai ki domain alag hai toh request block kar deta hai.
// 2. CORS Middleware: Express se hum batate hain ki "Bhai, us website ko data lene do, wo humari hi hai".

const corsExample = () => {
    // const cors = require('cors');
    // app.use(cors({ origin: 'http://localhost:3000' }));
    console.log("CORS Enabled");
};
// corsExample();
