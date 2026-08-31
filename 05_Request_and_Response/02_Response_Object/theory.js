/*
======================================================================================
                          THE RESPONSE OBJECT (res)
======================================================================================
// ChatGPT Se Liya Hua Syntex --->

--- HOW IT WORKS (Line-by-Line Explanation) ---

1. Response Object Kya Hai?
   Server jab apna logic complete kar leta hai (jaise Database se data lana), toh usko user ko jawab dena hota hai. Ye jawab es (Response object) ke zariye bheja jata hai.

2. Important Methods of 'res':
   - res.send(): Basic text, HTML, ya Array bhejne ke liye. Ye automatically 'Content-Type' samajh jata hai.
   - res.json(): Proper JSON API banane ke liye (React ya Mobile apps isko asani se padh sakti hain).
   - res.status(): HTTP status code set karne ke liye (200, 404, 500). Ise res.json() ke sath chain kiya ja sakta hai.
   - res.sendFile(): Poori HTML/Image/PDF file hi user ko bhej dena.
   - res.redirect(): User ko ek page se dusre page par dhakel dena (jaise Login success ke baad /dashboard par bhejna).

======================================================================================
                          OLD vs NEW (Summary)
======================================================================================
🔴 RAW NODE.JS (Hard Way)
- Headers manual set karne padte the (es.writeHead(200, {'Content-Type': 'application/json'})).
- Data ko manually stringify karna padta tha.

🟢 EXPRESS.JS (Smart Way)
- Bas es.json({name: "Tausif"}) likho, Express sab automatically handle kar lega!
======================================================================================
*/
