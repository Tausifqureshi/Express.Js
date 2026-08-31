// ========================================= API SECURITY BASICS ======================================= //
// ChatGPT Se Liya Hua Syntex --->
// Live APIs ko hackers target karte hain. Isliye unhe protect karna bohot zaroori hai.
//
// 1. Hashing (Bcrypt): Password ko KABHI direct save mat karo. Bcrypt use karo.
// 2. Helmet: Ye package extra security headers laga deta hai.
// 3. Rate Limiting: 1 second me 1000 request bhej kar server down karne (DDoS) se bachata hai.

const securityExample = () => {
    // const helmet = require('helmet');
    // app.use(helmet());
    console.log("Security Enabled");
};
// securityExample();
