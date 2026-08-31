/*
======================================================================================
                          EXPRESS.JS ARCHITECTURE & WORKING
======================================================================================
(Note: Express.js Node.js ke upar bana ek framework hai. Toh background me vahi 
Event Loop aur Thread Pool (Node.js Architecture) kaam karta hai, par Express usme 
kuch naye layers aur fiyde (benefits) add kar deta hai!)

--- HOW EXPRESS WORKS UNDER THE HOOD (Line-by-Line Explanation) ---

1. The Request (Client to Server):
   Jab client (Jaise React ya Browser) server ko request bhejta hai, toh Node.js 
   ka default http module usko pakadta hai. 
   Par Express beech me aakar us Raw Request (req) me bohot saare naye features 
   (jaise req.body, req.query, req.params) automatically daal deta hai, jisse humein 
   code manually nahi likhna padta.

2. The Express App Object (const app = express()):
   Ye 'app' object Express ka dil (heart) hai. Iske paas routing (app.get) aur 
   middlewares (app.use) ko manage karne ka poora system hota hai.

3. The Middleware Stack (Pipeline):
   Express me Request seedha apne Route (app.get) par nahi jati. Wo ek Pipeline 
   se guzarti hai jise Middleware Stack kehte hain.
   
   (Client Request) ---> [ CORS Middleware ] ---> [ JSON Parser ] ---> [ Auth Check ] ---> [ Route Handler ]
   
   Har Middleware check karta hai:
   - Kya sab theek hai? Agar haan toh 
ext() bulao (aage bhejo).
   - Agar kuch gadbad hai? Toh yahin se es.send('Error') karke wapas bhej do.

4. Route Matching (app.get / app.post):
   Middleware se hote hue jab request aage badhti hai, toh Express dekhta hai ki 
   Client ne kaunsa URL (e.g. '/about') aur kaunsa Method (e.g. GET) manga hai.
   Jiske sath URL match hota hai, wo function chal jata hai.

5. The Response (Server to Client):
   Raw Node.js me JSON wapas bhejna bohot lamba tha (es.writeHead, JSON.stringify).
   Express me route handler bas es.json(data) bolta hai. Express khud background me 
   saare Headers lagata hai, stringify karta hai, aur Client ko response bhej deta hai.

======================================================================================
                          NODE.JS vs EXPRESS.JS (Summary)
======================================================================================

🔴 RAW NODE.JS (Hard Way)
- Request parse karna (req.url se params nikalna) manual aur mushkil hota tha.
- Middlewares ka concept directly available nahi tha.
- Responses bhejne me manually headers set karne padte the.

🟢 EXPRESS.JS (Smart Way)
- req.body, req.params jaisi cheezein bani banayi milti hain.
- pp.use() se Global Middlewares lagana bachho ka khel hai.
- es.json() ya es.status(200).send() se response bhejna bohot aasan hai.
======================================================================================
*/
