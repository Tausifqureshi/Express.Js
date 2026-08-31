/*
======================================================================================
                          CUSTOM MIDDLEWARE
======================================================================================
// ChatGPT Se Liya Hua Syntex --->

--- HOW IT WORKS (Line-by-Line Explanation) ---

1. Custom Middleware Kya Hota Hai?
   Jab aap apna khud ka ek function banate ho jo Express ki pipeline me beech me kaam kare, use Custom Middleware kehte hain.
   Jaise: express.json() ek Inbuilt Middleware hai, par myLogger() ek Custom Middleware hai.

2. Kaise Banta Hai?
   `javascript
   const myLogger = (req, res, next) => {
       console.log("Request aayi hai!");
       next(); // Ye likhna sabse zyada zaroori hai!
   }
   `
   Ab isko ya toh aap global bana do: pp.use(myLogger) 
   Ya kisi ek specific route pe laga do: pp.get('/home', myLogger, (req,res) => {...})

3. Real World Use Case:
   Maan lo aapko check karna hai ki koi subah 9 baje ke baad hi API use kar paye.
   Aap ek custom middleware banaoge jo time check karega, agar time 9 se pehle ka hai toh wo wahi se es.send("Dukaan Band Hai") bhej dega aur 
ext() nahi bulayega! Request route tak pahunchegi hi nahi.

======================================================================================
                          OLD vs NEW (Summary)
======================================================================================
🔴 RAW NODE.JS (Hard Way)
- Har URL checking ke andar khud se if-else conditions dalni padti thi custom checks ke liye.

🟢 EXPRESS.JS (Smart Way)
- Ek alag file me Middleware banao aur jahan dil kare use chipka do (plug and play)!
======================================================================================
*/
