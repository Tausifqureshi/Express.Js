// =========================================
// Express.js Fundamentals & REST API Theory
// =========================================

/*
1. Express.js kya hai?
----------------------
Node.js ka 'http' module thoda mushkil aur lamba hota hai. Usko asaan banane ke liye hum 'Express.js' framework ka use karte hain.
Ye Node.js ke upar ek wrapper ki tarah kaam karta hai, jo routing, requests aur responses ko handle karna bohot simple bana deta hai.

2. Setup Process
----------------
Ek naya Express project shuru karne ke liye:
- npm init -y (package.json banata hai)
- npm install express (express library download karta hai)
- File me: const express = require('express'); const app = express();

3. Routing kya hai?
-------------------
User jab browser me alag-alag URLs (jaise '/about' ya '/contact') type karta hai, toh usko sahi page ya data dikhana "Routing" kehlata hai.
Express me ye app.get('/about', callback) se badi aasani se ho jata hai.

4. Route Parameters & Query Parameters
--------------------------------------
Aksar humein URL ke zarriye data bhejna padta hai:
- Route Params (/:id): Jaise facebook.com/tausif. Yahan 'tausif' ek dynamic ID/Username hai. Ise req.params.id se nikalte hain.
- Query Params (?search=node): Jaise google.com?q=nodejs. Ise req.query.q se nikalte hain.

5. Request (req) aur Response (res)
-----------------------------------
- req: User ne jo bhi bheja hai (data, url, headers) wo 'req' object me hota hai.
- res: Humein user ko kya wapas bhejna hai (HTML, JSON, error) wo hum 'res' object se bhejte hain jaise res.send() ya res.json().

6. HTTP Status Codes
--------------------
Jab hum response bhejte hain, toh ek "Status Code" bhi bhejte hain taaki frontend ko pata chale ki kaam hua ya error aaya:
- 200: OK (Sab theek hai)
- 201: Created (Naya data database me ban gaya)
- 400: Bad Request (User ne galat data bheja)
- 404: Not Found (Page ya API nahi mili)
- 500: Internal Server Error (Hamare code me/server pe koi galti hai)

7. REST API kya hai?
--------------------
REST ek design pattern hai APIs banane ka. Isme hum alag-alag HTTP Methods ka use karte hain alag-alag kaam ke liye:
- GET: Data mangne/dekhne ke liye.
- POST: Naya data banane ke liye (jaise Naya User banana).
- PUT/PATCH: Purane data ko update karne ke liye.
- DELETE: Data ko delete karne ke liye.
*/

console.log('Theory padh li bhai? Ab practical files dekho!');
