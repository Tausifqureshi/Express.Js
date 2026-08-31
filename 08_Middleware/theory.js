// ========================================= Middleware Kya Hai? ======================================= //
// ChatGPT Se Liya Hua Syntex --->
// Middleware ek beech ka guard (watchman) hota hai jo Request (req) aane par aur Response (res) jaane ke BEECCH me khada hota hai.
// Matlab: Client -> Middleware (checks) -> Route Handler -> Client

// ========================================= Middleware Kyu Banate Hain? ======================================= //
// 1. Logger: Har request ka time aur IP address print karne ke liye.
// 2. Authentication (Login Check): Route tak pohochne se pehle check karna ki user logged in hai ya nahi.
// 3. Body Parsing (express.json()): Frontend se aaye hue data ko padhne ke laayak banane ke liye.

// ========================================= Middleware Ka Flow ======================================= //
// Middleware function me hamesha 3 cheezein hoti hain: (req, res, next).
// 'next()' bulana zaroori hota hai, warna request wahin ruk jayegi (hang ho jayegi) aur aage (Route Handler tak) nahi jayegi.
