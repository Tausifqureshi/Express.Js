/*
======================================================================================
                          HTTP STATUS CODES (Errors & Success)
======================================================================================
// ChatGPT Se Liya Hua Syntex --->

--- HOW IT WORKS (Line-by-Line Explanation) ---

1. Status Codes Kyu Zaroori Hain?
   Jab Frontend kisi API ko call karta hai, toh use result ke baare me pata hona chahiye ki Request successful hui ya koi Error aa gaya. 
   Iske liye Backend hamesha ek 3-digit ka code bhejta hai jise padh kar Frontend aage ka logic chalata hai.

2. 2xx - SUCCESS (Sab Sahi Hai)
   - 200 (OK): Sabse common code. Data mil gaya ya request theek se poori ho gayi.
   - 201 (Created): Jab hum POST method se koi naya data (Jaise Naya User) database me successfully bana lete hain.

3. 4xx - CLIENT ERRORS (Frontend ya User Ki Galti)
   - 400 (Bad Request): User ne form me data galat bheja (Jaise email ki jagah naam likh diya).
   - 401 (Unauthorized): User ne login nahi kiya hai ya uska Token galat hai. (Pehchaan nahi hui).
   - 403 (Forbidden): User login toh hai, par uske paas us kaam ki permission (Adhikaar) nahi hai. (Jaise ek normal user Admin ka page khol raha ho).
   - 404 (Not Found): Jo URL manga gaya hai wo exist hi nahi karta. (Sabse famous error!)

4. 5xx - SERVER ERRORS (Backend Ki Galti)
   - 500 (Internal Server Error): Jab hamare Node.js code me koi error aa jaye (crash) ya Database se connection toot jaye. Ye server ki side ki galti hoti hai.

======================================================================================
                          OLD vs NEW (Summary)
======================================================================================
🔴 RAW NODE.JS (Hard Way)
- es.writeHead(404, {...}) manually likhna padta tha.

🟢 EXPRESS.JS (Smart Way)
- Chain method ki wajah se seedha es.status(404).json({error: "Galti ho gayi"}) likhna padta hai.
======================================================================================
*/
