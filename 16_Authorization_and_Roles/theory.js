/*
======================================================================================
                          AUTHORIZATION & ROLES (Adhikaar)
======================================================================================
// ChatGPT Se Liya Hua Syntex --->

--- HOW IT WORKS (Line-by-Line Explanation) ---

1. Authorization Kya Hai?
   "What can you do?" (Aap kya kar sakte hain?)
   Login karna alag baat hai (Authentication), par login hone ke baad kya ek normal user doosre user ki profile delete kar sakta hai? Nahi. Is checking ko Authorization kehte hain.

2. Role-Based Access Control (RBAC):
   Hum database me user ke sath ek "Role" (jaise 'user', 'admin', 'moderator') save kar dete hain.
   Jab token banta hai toh wo role token ke andar daal diya jata hai.

3. Middleware Ka Kamaal:
   Hum ek Custom Middleware banate hain jiska naam hota hai isAdmin.
   Is middleware me check hota hai ki kya eq.user.role === 'admin' hai?
   - Agar Haan -> 
ext() bulao (kaam karne do).
   - Agar Naa -> es.status(403).json("Hatt piche, tu Admin nahi hai!") bhej do.
   Is middleware ko kisi bhi route ke aage laga do, aur wo route fully secure ho jayega.

======================================================================================
                          OLD vs NEW (Summary)
======================================================================================
🔴 BAD PRACTICE (Hardcoding)
- Har route function ke andar baar-baar check karna if(user.role != 'admin') return error.

🟢 GOOD PRACTICE (Middleware Roles)
- Ek baar isAdmin middleware banao aur jahan chahiye wahan plugin ki tarah laga do. Route function bilkul clean rahega.
======================================================================================
*/
