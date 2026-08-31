/*
======================================================================================
                          BUILT-IN MIDDLEWARE (Express.js)
======================================================================================
// ChatGPT Se Liya Hua Syntex --->

--- HOW IT WORKS (Line-by-Line Explanation) ---

1. Built-in Middleware Kya Hota Hai?
   Node.js raw me humein third-party libraries (jaise 'body-parser') ka use karna padta tha data ko padhne ke liye.
   Lekin Express ab itna smart ho gaya hai ki usne kuch middlewares apne andar (built-in) de diye hain. Iske liye 
pm install ki zaroorat nahi hoti.

2. express.json()
   Jab koi user POST method se Data (jaise form ka data) bhejta hai, toh wo string/buffer me aata hai. 
   pp.use(express.json()) us string ko pakadta hai, usko proper JavaScript Object (JSON) me badalta hai aur eq.body me daal deta hai.

3. express.urlencoded()
   Agar form ka data URL-encoded format me aa raha hai (jaise HTML ka purana form tag bhejta tha), toh ye us data ko parse karne ka kaam karta hai.

4. express.static()
   Server se Images, CSS files, ya pure HTML ko directly browser tak bhejne ke liye (bina route banaye).
   Aap ek 'public' naam ka folder banate ho aur pp.use(express.static('public')) likh dete ho. Phir koi bhi browser us folder ki image bina kisi route ke dekh sakta hai.

======================================================================================
                          OLD vs NEW (Summary)
======================================================================================
🔴 RAW NODE.JS (Hard Way)
- Images serve karne ke liye s.readFile aur proper headers daalne padte the. Buffer ka azaab.

🟢 EXPRESS.JS (Smart Way)
- express.static() lagao aur poora folder live! express.json() lagao aur parsing ki tension khatam.
======================================================================================
*/
