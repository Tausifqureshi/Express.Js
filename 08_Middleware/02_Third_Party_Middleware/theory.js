/*
======================================================================================
                          THIRD PARTY MIDDLEWARE (NPM Packages)
======================================================================================
// ChatGPT Se Liya Hua Syntex --->

--- HOW IT WORKS (Line-by-Line Explanation) ---

1. Third-Party Middleware Kya Hai?
   Jo middleware Express me built-in nahi hote, balki duniya bhar ke developers ne bana kar NPM (Node Package Manager) par daale hote hain, unko Third-Party Middleware kehte hain.
   Inko use karne ke liye pehle 
pm install <package-name> karna padta hai.

2. Famous Third-Party Middlewares:
   - Morgan (
pm install morgan): Ye server ki saari requests ko Terminal par sundar tareeqe se print (Log) karta hai. (GET /home 200 15ms)
   - Helmet (
pm install helmet): Ye aapke server ko hackers se bachane ke liye kuch extra security headers laga deta hai.
   - CORS (
pm install cors): Alag-alag websites ko aapas me baat karne ki permission dene ke liye.

3. Flow:
   [Client] -> (Helmet) -> (Morgan) -> (Express.json) -> [Route Handler]

======================================================================================
                          OLD vs NEW (Summary)
======================================================================================
🔴 RAW NODE.JS (Hard Way)
- Logging aur Security headers sab kuch manually C++ style logic se likhna padta tha.

🟢 EXPRESS.JS (Smart Way)
- Duniya bhar ki powerful libraries 
pm se download karo aur pp.use(morgan('dev')) ki tarah chipka do!
======================================================================================
*/
