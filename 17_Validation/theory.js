/*
======================================================================================
                          VALIDATION (Checking Input Data)
======================================================================================
// ChatGPT Se Liya Hua Syntex --->

--- HOW IT WORKS (Line-by-Line Explanation) ---

1. Validation Kyu Chahiye?
   Hamesha yaad rakho: **"Never trust the user input!"**
   Agar aapne backend me Validation nahi lagaya, toh user Email ki jagah 'abc' dal dega, aur Age ki jagah '-500' dal dega aur database crash ya galat data se bhar jayega.
   
2. Frontend Validation Kaafi Kyu Nahi Hai?
   React me form validation lagana achi baat hai, par hacker postman se direct aapki API hit kar sakta hai aur frontend ka validation bypass ho jayega. Isliye Backend validation compulsory hai!

3. express-validator ya Joi:
   Express me in packages ka use hota hai. 
   Aap rules define karte ho: 
   check('email').isEmail() -> Email valid honi chahiye.
   check('password').isLength({min: 6}) -> Password kam se kam 6 character ka ho.
   Agar ye rules fail hote hain, toh middleware wahin se user ko Error wapas fek deta hai.

======================================================================================
                          OLD vs NEW (Summary)
======================================================================================
🔴 RAW NODE.JS (Hard Way)
- Manual checking: if(!email.includes('@')) return error, isse code hazaron line lamba ho jata tha.

🟢 EXPRESS.JS (Smart Way)
- 'express-validator' jaisi libraries ke zariye bas rules likho, wo khud check karke accurate errors (kaunsi field galat hai) bhej deti hain.
======================================================================================
*/
