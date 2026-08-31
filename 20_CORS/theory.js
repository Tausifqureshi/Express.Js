/*
======================================================================================
                          CORS (Cross-Origin Resource Sharing)
======================================================================================
// ChatGPT Se Liya Hua Syntex --->

--- HOW IT WORKS (Line-by-Line Explanation) ---

1. CORS Ka Error Kyun Aata Hai?
   Ye darasal Backend ka error nahi hota, ye aapke BROWSER ki security hoti hai.
   Jab aapka Frontend http://localhost:3000 (React) pe chalta hai, aur aapka Backend http://localhost:5000 (Express) pe chalta hai...
   Toh browser dekhta hai ki ye dono websites ki 'Origin' (Pata/Address) alag-alag hai. 
   Browser by default do alag Origin ki websites ko ek dusre se data share nahi karne deta, isliye CORS (CORS Policy Blocked) ka laal rang ka lamba error aa jata hai.

2. Solution (CORS Middleware):
   Humein Backend me Express se kehna padta hai ki "Bhai, us frontend wale ko block mat kar, wo mera hi aadmi hai!".
   Iske liye hum 'cors' naam ka package install karte hain aur usko batate hain ki kin-kin websites ko Data lene ki permission hai.

3. Setup:
   `javascript
   const cors = require('cors');
   app.use(cors({
       origin: 'http://localhost:3000', // Sirf is website ko data milega
       credentials: true // Agar Cookie bhejna hai toh ye True hona chahiye!
   }));
   `

======================================================================================
                          OLD vs NEW (Summary)
======================================================================================
🔴 RAW NODE.JS (Hard Way)
- Har route par explicitly headers daalne padte the es.setHeader('Access-Control-Allow-Origin', '*').

🟢 EXPRESS.JS (Smart Way)
- pp.use(cors()) lagao aur poore server se CORS ka azaab (problem) hamesha ke liye khatam karo!
======================================================================================
*/
