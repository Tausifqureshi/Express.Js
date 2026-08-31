// ========================================= Route Parameters ======================================= //
// ChatGPT Se Liya Hua Syntex --->
// Jab humein URL me se koi 'dynamic' (badalne wali) value nikalni ho, toh hum Route Parameters use karte hain.
// Example URL: facebook.com/profile/tausifqureshi
// Yahan 'tausifqureshi' dynamic hai.
// Isko pakadne ke liye hum route me ':' (colon) lagate hain: app.get('/profile/:username')
// Ab hum isko 'req.params.username' se nikal sakte hain.

// ========================================= Query Parameters ======================================= //
// Jab humein URL ke end me extra filters bhejne ho, toh hum '?' aur '&' lagakar Query Parameters bheje hain.
// Example URL: amazon.com/shoes?color=black&size=10
// Yahan 'color=black' aur 'size=10' query hain.
// Isko hum Express me 'req.query.color' aur 'req.query.size' se nikalte hain.
// Isme route me kuch special nahi likhna padta (sirf app.get('/shoes')).
