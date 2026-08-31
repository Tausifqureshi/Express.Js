// ========================================= HTTP Status Codes ======================================= //
// ChatGPT Se Liya Hua Syntex --->
// Jab bhi Frontend (React/Postman) API ko call karta hai, Server Data ke sath ek "Code" bhi wapas bhejta hai.
// Is Code ko dekh kar Frontend ko bina Data padhe samajh aa jata hai ki kaam successfully hua hai ya Error aaya hai.

// ========================================= Famous Status Codes ======================================= //
// 2xx : Success (Sab Badiya Hai)
// - 200 (OK): Data mil gaya (GET).
// - 201 (Created): Naya data successfully database me save ho gaya (POST).

// 4xx : Client Error (Frontend Wale Ki Galti Hai)
// - 400 (Bad Request): Frontend ne galat/adhoora data bheja.
// - 401 (Unauthorized): Login nahi kiya, token galat hai.
// - 403 (Forbidden): Login toh hai, par us kaam ka permission nahi hai (Jaise normal user Admin page khol raha ho).
// - 404 (Not Found): URL galat hai ya data nahi mila.

// 5xx : Server Error (Hamari / Backend Wale Ki Galti Hai)
// - 500 (Internal Server Error): Hamaare code me koi crash aa gaya ya Database down hai.
