/*
======================================================================================
                          INTRODUCTION TO EXPRESS.JS
======================================================================================
(Note: Express.js web APIs aur Backend servers banane ke liye Node.js ka sabse
famous framework hai. Ye MERN aur MEAN stack dono me backend ke liye use hota hai.)

--- WHAT IS EXPRESS.JS? (Line-by-Line Explanation) ---

1. It's a Web Framework:
   Jaise CSS ke liye Bootstrap / Tailwind hota hai, theek waise hi Node.js ke liye Express.js hai.
   Ye Node.js ke upar ek wrapper hai jo backend development ko fast aur saaf (clean) banata hai.
   (Developer: TJ Holowaychuk)

2. Why not just use Node.js?
   Node.js ka default http module powerful zaroor hai, par bada code likhne me bohot
   if-else conditions lagti hain (Routing ke liye). Express in sabhi problems ko chupa 
   leta hai aur humein aasan functions deta hai.

3. MERN Stack Ka E (Express):
   - M: MongoDB (Database)
   - E: Express (Node.js ka framework jo API banata hai)
   - R: React (Frontend UI)
   - N: Node (Execution environment)
   
======================================================================================
                          WHY EXPRESS IS FAMOUS? (Benefits)
======================================================================================

🟢 1. Fast Routing:
   app.get('/path') likho aur rasta (route) tayyar! Koi if-else nahi likhna padta.

🟢 2. Middleware Support:
   Security, Logging aur Request ko modify karne ke liye Express me Middleware banana
   bohot aasan hai.

🟢 3. REST API Ready:
   Isme RESTful APIs (GET, POST, PUT, DELETE) banane ke methods pehle se bane huye hain.

🟢 4. Easy Data Handling:
   JSON bhejna ho ya HTML page serve karna ho, express ki inbuilt functions se kaam
   ek line me ho jata hai.

======================================================================================
                          USE CASES (Kahan use karein?)
======================================================================================
✅ PERFECT FOR: 
- Single Page Applications (SPA) ke backend (REST APIs) banane ke liye.
- Real-time applications (Socket.io ke sath milkar).
- Microservices architecture me chhote aur fast servers banane ke liye.
*/
