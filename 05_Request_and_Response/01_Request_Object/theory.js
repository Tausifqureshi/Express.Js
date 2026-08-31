/*
======================================================================================
                          THE REQUEST OBJECT (req)
======================================================================================
// ChatGPT Se Liya Hua Syntex --->

--- HOW IT WORKS (Line-by-Line Explanation) ---

1. Request Object Kya Hai?
   Jab koi user website par click karta hai ya form submit karta hai, toh wo server ko ek HTTP Request bhejta hai. Express is request ko ek bada sa Object bana deta hai jise hum eq kehte hain.

2. Important Properties of 'req':
   - req.body: Agar user POST method se data bhej raha hai (jaise Login credentials), toh wo data isme milta hai. (Note: Iske liye express.json() ya express.urlencoded() middleware lagana zaroori hai).
   - req.query: URL me '?' ke baad aane wala data (jaise ?search=shoes).
   - req.params: URL me ':' ke sath aane wala variable (jaise /users/:id).
   - req.headers: Browser kaunsa hai? JWT Token kya hai? Ye sab headers me aata hai.
   - req.cookies: User ki saved cookies.
   - req.ip: User ka IP address kahan se aa raha hai.

======================================================================================
                          OLD vs NEW (Summary)
======================================================================================
🔴 RAW NODE.JS (Hard Way)
- Data (req.body) nikalne ke liye Buffer aur stream (eq.on('data')) ka use karna padta tha jo bahut complex tha.

🟢 EXPRESS.JS (Smart Way)
- Express seedha eq.body me data parse karke JSON format me de deta hai!
======================================================================================
*/
