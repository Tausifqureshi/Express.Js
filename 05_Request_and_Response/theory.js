/*
======================================================================================
                          REQUEST (REQ) & RESPONSE (RES) IN DEPTH
======================================================================================
// ChatGPT Se Liya Hua Syntex --->

--- HOW IT WORKS (Line-by-Line Explanation) ---

1. The Request Object (req):
   Jab client server se baat karta hai, toh wo sirf ek URL nahi bhejta. Wo ek poori chitthi (letter) bhejta hai jise Request Object kehte hain.
   Is chitthi me kya-kya hota hai?
   - req.body: Agar user ne form bhara hai (Login/Signup), toh us form ka data isme aata hai. (Iske liye express.json() middleware zaroori hai).
   - req.headers: User ka browser kaunsa hai? Uska IP kya hai? Uska JWT token kya hai? Ye sab headers me chupa hota hai.
   - req.cookies: User ki cookies.
   - req.method: GET hai, POST hai ya PUT?
   
2. The Response Object (res):
   Server jab apna kaam kar leta hai, toh usko user ko jawab dena hota hai. Ye jawab Response Object ke through jata hai.
   Express me iske bohot saare methods hain:
   - res.send("Hello"): Simple text ya HTML bhejta hai.
   - res.json({ name: "Tausif" }): Data ko JSON format me convert karke bhejta hai (API ke liye sabse zyada use hota hai).
   - res.sendFile("/path/to/html"): Poora ka poora HTML page hi user ko bhej deta hai.
   - res.redirect("/home"): User ko zabardasti dusre page par bhej deta hai.
   - res.status(200): Status code batane ke liye (jaise Success hua ya Error). Isko hum chain kar sakte hain: res.status(404).json({error: "Not Found"})

======================================================================================
                          OLD vs NEW (Summary)
======================================================================================
🔴 RAW NODE.JS (Hard Way)
- Form data ko chunk by chunk (Buffer) padhna padta tha. Headers manual set hote the.

🟢 EXPRESS.JS (Smart Way)
- eq.body directly data de deta hai. es.json() apne aap saare zaroori headers laga deta hai.
======================================================================================
*/
