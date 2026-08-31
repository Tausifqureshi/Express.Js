// ========================================= Request (req) and Response (res) ======================================= //
// ChatGPT Se Liya Hua Syntex --->
// Jab bhi client (browser/frontend) server ko bulata hai, toh 2 main objects create hote hain:

// ========================================= 1. Request (req) Object ======================================= //
// req object me user dwara bheja gaya saara data hota hai.
// Mukhya properties:
// - req.body: User jo form data ya JSON data bhejta hai (POST/PUT me).
// - req.headers: User ka browser konsa hai, token wagera isme aata hai.
// - req.params: Dynamic route variables (/:id).
// - req.query: URL filters (?search=abc).

// ========================================= 2. Response (res) Object ======================================= //
// res object ke zariye hum user ko wapas data bhejte hain.
// Mukhya methods:
// - res.send('HTML ya text'): Normal response.
// - res.json({ key: 'value' }): JSON format me API ka data bhejna.
// - res.status(404): Status code set karna.
// - res.redirect('/path'): User ko kisi dusre page par bhej dena.
