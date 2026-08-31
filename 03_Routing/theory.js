/*
======================================================================================
                          ROUTING IN EXPRESS.JS
======================================================================================
(Note: Routing ka matlab hota hai ki jab user alag-alag URLs (jaise '/about', '/contact') 
par visit kare, toh server usko kya response dega, ye decide karna.)

--- HOW ROUTING WORKS (Line-by-Line Explanation) ---

1. The HTTP Methods (Raste ke tareeqe):
   Jab client request karta hai, toh wo sirf URL nahi bhejta, balki ek Method bhi bhejta hai.
   - GET: Jab sirf data dekhna/mangna ho. (e.g. Profile Page kholna)
   - POST: Jab naya data server ko bhejna ho. (e.g. Naya account banana)
   - PUT/PATCH: Jab purana data update karna ho. (e.g. Password change)
   - DELETE: Jab data delete karna ho. (e.g. Account delete)

2. Route Definition in Express:
   Raw Node.js me humein if-else lagana padta tha (if(req.url === '/about')).
   Par Express me humein seedha method name wale functions milte hain:
   pp.get('/about', callback)
   pp.post('/login', callback)

3. The Callback (Handler):
   Route ke andar jo function (req, res) hota hai, use "Route Handler" ya Controller kehte hain.
   Jaise hi URL match hota hai, Express is function ko chala deta hai.

======================================================================================
                          OLD vs NEW ROUTING (Summary)
======================================================================================
🔴 OLD TARIQA (Raw Node.js 'http')
- Request method check karna padta tha (if (req.method === 'GET')).
- Nested if-else lagane padte the, code bohot lamba aur complex hota tha.

🟢 NEW TARIQA (Express.js)
- Bas pp.get() aur pp.post() use karo.
- Code clean rehta hai aur padhne me aasan hota hai.
======================================================================================
*/
