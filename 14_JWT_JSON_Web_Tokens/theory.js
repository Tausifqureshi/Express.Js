/*
======================================================================================
                          JWT (JSON Web Tokens)
======================================================================================
// ChatGPT Se Liya Hua Syntex --->

--- HOW IT WORKS (Line-by-Line Explanation) ---

1. JWT Kya Hai?
   JWT ek secure Digital ID card hai. Ye ek lamba string hota hai jo 3 hisso me bata hota hai:
   Header . Payload . Signature
   (Example: eyJhbGciOiJIUzI1Ni... . eyJ1c2VySWQiOiIxMjM0... . SflKxwRJSMeKKF2Q...)

2. Payload (Data):
   Beech wale hisse (Payload) me hum User ka ID aur uska Role (Admin/User) save kar dete hain. 
   Lekin isme **kabhi bhi Password save nahi karna chahiye** kyunki ye easily decode ho jata hai.

3. Signature (Security):
   Sabse aakhiri hissa Signature hota hai. Ye Backend ke ek 'Secret Key' se banta hai. 
   Agar koi hacker Payload ko badal kar apne aap ko Admin banane ki koshish kare, toh uska Signature galat ho jayega aur Backend us token ko Reject kar dega.

4. Token Bhejne ka Tareeqa:
   Jab user login karta hai, toh backend JWT banata hai aur Frontend ko deta hai.
   Frontend ise aage ki saari requests me ek special header me laga kar bhejta hai:
   Authorization: Bearer <token_here>

======================================================================================
                          OLD vs NEW (Summary)
======================================================================================
🔴 BAD PRACTICE (No Secrets)
- User ID ko direct URL me bhejkar verify karna (Bahut unsafe, koi bhi URL me number badal kar dusra user ban sakta hai).

🟢 GOOD PRACTICE (JWT)
- Token cryptographically secure hota hai. Isko bina 'Secret Key' ke tamper (badla) nahi jaa sakta!
======================================================================================
*/
