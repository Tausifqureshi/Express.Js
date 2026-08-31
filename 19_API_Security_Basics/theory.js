/*
======================================================================================
                          API SECURITY BASICS
======================================================================================
// ChatGPT Se Liya Hua Syntex --->

--- HOW IT WORKS (Line-by-Line Explanation) ---

1. Backend Security Kahan Zaroori Hai?
   Jab bhi app internet par live hoti hai, toh hackers APIs ko target karte hain. Agar security nahi lagai, toh wo database hack kar lenge ya server down kar denge.

2. Password Hashing (Bcrypt):
   - KABHI BHI Database me password '123456' seedha save nahi karna! Agar hacker ko DB access mil gaya toh sabki details le lega.
   - Hamesha Bcrypt jaisi library se password ko 'Hash' karte hain: '123456' -> '&#^!73jhsd823hd'. Is Hashed string ko koi bhi wapas password me nahi badal sakta.

3. Helmet (Middleware):
   - Express by default kuch aise headers bhejta hai jisse hacker ko pata chal jata hai ki aapka server kaisa bana hai (jaise 'X-Powered-By: Express'). 
   - Helmet package in headers ko chupa deta hai aur aur bhi security layers laga deta hai taaki Cross-Site Scripting (XSS) jaise attacks na ho sakein.

4. Rate Limiting:
   - Agar ek hacker aapki Login API ko 1 second me 10,000 baar hit kare (Brute force ya DDoS attack), toh server ki saari RAM bhar jayegi aur server down ho jayega.
   - 'express-rate-limit' package ek user ko limit kar deta hai, ki 15 minute me sirf 100 request bhej sakte ho. Iske baad uski request block ho jayegi.

======================================================================================
                          OLD vs NEW (Summary)
======================================================================================
🔴 BAD PRACTICE (Open Server)
- Password aise hi save karna aur APIs ko khulla chhod dena. Ek script likh kar koi bhi server gira dega.

🟢 GOOD PRACTICE (Secured Express)
- Helmet + Rate Limiting + Bcrypt Hashing lagana. Ye backend security ki sabse basic requirements hain.
======================================================================================
*/
