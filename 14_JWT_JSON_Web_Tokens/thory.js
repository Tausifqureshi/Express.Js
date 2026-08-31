// ========================================= JWT (JSON Web Tokens) ======================================= //
// ChatGPT Se Liya Hua Syntex --->
// JWT ek secure digital token hai jo API yaadash (stateless) ko solve karta hai.
//
// 1. Structure: Header . Payload . Signature (3 parts).
// 2. Payload: Isme user ka ID aur role hota hai (Password KABHI nahi rakhna).
// 3. Signature: Backend ki Secret Key se banta hai taaki koi hacker token ko badal na sake.
// 4. Verify: Frontend jab token bhejta hai, toh backend pehle Secret Key se verify karta hai ki ye mera banaya hua hai ya nahi.

const jwtExample = () => {
    // const jwt = require('jsonwebtoken');
    // const token = jwt.sign({ id: 1 }, "SECRET_KEY");
    // console.log("Generated Token:", token);
};
// jwtExample();
