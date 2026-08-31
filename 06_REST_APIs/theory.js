/*
======================================================================================
                          REST APIs (Representational State Transfer)
======================================================================================
// ChatGPT Se Liya Hua Syntex --->

--- HOW IT WORKS (Line-by-Line Explanation) ---

1. REST API Kya Hai?
   REST koi code ya library nahi hai. Ye sirf ek "Rules ka set" (Architecture Pattern) hai. 
   Duniya bhar me developers API banate waqt in rules ko follow karte hain taaki frontend aur backend ke beech baat karna standardized (ek jaisa) ho jaye.

2. REST Ke Main Rules:
   - Client-Server Architecture: Frontend (React) aur Backend (Node.js) ek doosre se alag (independent) hone chahiye.
   - Statelessness: Har request apne aap me puri honi chahiye. Server pichli request ko yaad nahi rakhta. Isliye har request me humein batana padta hai ki hum kaun hain (via Tokens).
   - JSON Format: Data hamesha JSON me bheja aur liya jata hai.

3. The CRUD Operations (HTTP Methods):
   REST APIs 4 main HTTP methods par chalti hain jo Database ke operations (CRUD) se map hoti hain:
   - C (Create) = POST Method (Naya item banane ke liye) -> app.post('/users')
   - R (Read)   = GET Method (Data dekhne ke liye) -> app.get('/users')
   - U (Update) = PUT / PATCH Method (Purana data badalne ke liye) -> app.put('/users/:id')
   - D (Delete) = DELETE Method (Data hatane ke liye) -> app.delete('/users/:id')

======================================================================================
                          OLD vs NEW (Summary)
======================================================================================
🔴 RAW NODE.JS (Hard Way)
- API me JSON data wapas bhejna lamba kaam tha, es.end(JSON.stringify(data)) karna padta tha.

🟢 EXPRESS.JS (Smart Way)
- Express explicitly APIs banane ke liye hi design hua hai. es.json() sab kaam aasan kar deta hai.
======================================================================================
*/
