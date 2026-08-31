/*
======================================================================================
                          ROUTE AND QUERY PARAMETERS
======================================================================================
// ChatGPT Se Liya Hua Syntex --->

--- HOW IT WORKS (Line-by-Line Explanation) ---

1. Route Parameters (Dynamic URLs):
   Kabhi-kabhi humein URL me aisi value bhejna hoti hai jo fix nahi hoti (jaise har user ka ID alag hota hai).
   Bina Route Params ke humein hazaron routes banane padte: 
   app.get('/user/1')
   app.get('/user/2')
   
   Express isko aasan banata hai ':' (colon) lagakar:
   app.get('/user/:id', ...)
   Yahan ':id' ek variable ban jata hai. Express ise khud nikal kar 'req.params.id' me daal deta hai.
   Aap multiple params bhi le sakte ho: app.get('/flights/:from/:to') -> req.params.from

2. Query Parameters (Filters & Search):
   Query params URL ke end me '?' (question mark) ke baad lagte hain. Inka main kaam filtering, sorting, ya searching hota hai.
   Example: amazon.in/mobiles?brand=samsung&price=50000
   
   Isme route me kuch badalna nahi padta, aapka route simple rahega: app.get('/mobiles').
   Express is '?' ke baad wale data ko automatically parse karke 'req.query' me object bana deta hai:
   req.query.brand // 'samsung'
   req.query.price // '50000'

======================================================================================
                          OLD vs NEW (Summary)
======================================================================================
🔴 RAW NODE.JS (Hard Way)
- URL string ko manually parse karna padta tha 'url' module (url.parse(req.url, true)) ka use karke.

🟢 EXPRESS.JS (Smart Way)
- eq.params aur eq.query me Express sabkuch pehle se hi JSON object banakar de deta hai!
======================================================================================
*/
