// ========================================= REST API Kya Hai? ======================================= //
// REST (Representational State Transfer) ek architecture style hai. 
// Asaan bhasha me: Ye kuch rules/standards hain API banane ke, taaki poori duniya me APIs ek jaisi dikhein.

// ========================================= REST Architecture Rules ======================================= //
// 1. Client-Server: Frontend (React) aur Backend (Node.js) alag hone chahiye.
// 2. Stateless: Server har request ko naya maanta hai. (Pichli request yaad nahi rakhta, isliye JWT token har baar bhejna padta hai).
// 3. HTTP Methods ka sahi istemal (CRUD Operations mapping):
//    - C (Create) -> POST method (Naya user banana)
//    - R (Read)   -> GET method (User ka data dekhna)
//    - U (Update) -> PUT ya PATCH method (User ka naam badalna)
//    - D (Delete) -> DELETE method (User delete karna)
