/*
======================================================================================
                          ERROR HANDLING MIDDLEWARE
======================================================================================
// ChatGPT Se Liya Hua Syntex --->

--- HOW IT WORKS (Line-by-Line Explanation) ---

1. Error Handle Karna Kyu Zaroori Hai?
   Maan lo aapke Route me database se data laane ka code likha hai aur wahan database ka connection toot gaya. 
   Aise me aapka poora Node.js server crash ho jayega (Band ho jayega) aur baaki users ko bhi website down milegi.
   Ise bachane ke liye humein Errors ko "Pakadna" (Catch karna) hota hai.

2. Express Ka Special Error Middleware:
   Normal middleware me 3 parameters hote hain (req, res, next).
   Lekin Error Handling Middleware me 4 parameters hote hain: (err, req, res, next).
   Express automatically samajh jata hai ki ye 4 parameter wala function tabhi chalana hai jab koi Error aaye.

3. Kahan Lagate Hain?
   Error Handling Middleware ko hamesha saare Routes (pp.get / pp.post) ke SABSE END ME (last me) likha jata hai.
   Agar kisi bhi upar wale route me error aayi, toh hum 
ext(err) bula dete hain.
   Express seedha jump karke is last wale Error Middleware ke paas chala jata hai aur crash hone se bach jata hai.

======================================================================================
                          OLD vs NEW (Summary)
======================================================================================
🔴 RAW NODE.JS (Hard Way)
- Har jagah try-catch lagana padta tha aur agar kuch bhool gaye toh server direct Crash!

🟢 EXPRESS.JS (Smart Way)
- Ek central Error Handler bana lo end me, koi bhi error aayegi toh wo centralized jagah par hi aayegi aur server crash nahi hoga.
======================================================================================
*/
