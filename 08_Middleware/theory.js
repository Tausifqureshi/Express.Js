/*
======================================================================================
                          MIDDLEWARE (The Watchmen of Express)
======================================================================================
// ChatGPT Se Liya Hua Syntex --->

--- HOW IT WORKS (Line-by-Line Explanation) ---

1. Middleware Kya Hota Hai?
   Middleware ek function hai jo Request (Client se) aur Response (Route Handler tak) ke beech me khada hota hai. 
   Ye ek Security Guard ya Filter ki tarah kaam karta hai. Har request pehle Middleware se guzar kar hi apne manzil (Route) tak pahunchti hai.

   (Client Request) ----> [ MIDDLEWARE 1 ] ----> [ MIDDLEWARE 2 ] ----> [ ROUTE HANDLER (res.send) ]

2. Middleware Ka Kaam Kya Hai?
   - Checking: Kya user logged in hai? (Authentication check)
   - Modification: Request ke data me kuch naya add karna (e.g. req.user = userData)
   - Logging: Har request ka time aur IP address print karna.
   - Parsing: JSON data padhna (express.json()).

3. The Magical 'next()' Function:
   Har middleware me 3 cheezein hoti hain: (req, res, next).
   Agar middleware ne apna kaam theek se kar liya hai, toh usko 
ext() bulana zaroori hai. 
   Agar 
ext() nahi bulaya, toh request wahin atki reh jayegi (hang ho jayegi) aur aage waale routes kabhi chalenge hi nahi!
   Agar koi gadbad hai, toh middleware wahin se es.send("Error") bhej sakta hai aur request ruk jayegi.

4. Global vs Route Specific Middleware:
   - Global: pp.use(myMiddleware) - Ye har ek request par chalega.
   - Route Specific: pp.get('/admin', myMiddleware, (req,res) => {}) - Ye sirf '/admin' wale route par chalega.

======================================================================================
                          OLD vs NEW (Summary)
======================================================================================
🔴 RAW NODE.JS (Hard Way)
- Koi middleware ka concept nahi tha. Har if-else route me same checking ka code copy-paste karna padta tha.

🟢 EXPRESS.JS (Smart Way)
- Middleware pattern ki wajah se Express sabse zyada famous hai. Ye code ko DRY (Don't Repeat Yourself) aur saaf banata hai.
======================================================================================
*/
