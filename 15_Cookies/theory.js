/*
======================================================================================
                          COOKIES (Token Storage)
======================================================================================
// ChatGPT Se Liya Hua Syntex --->

--- HOW IT WORKS (Line-by-Line Explanation) ---

1. Token Rakhein Kahan?
   Jab Frontend ko JWT token milta hai, toh usko kahin save karke rakhna padta hai.
   - LocalStorage me rakh sakte hain? Haan, par wo XSS attacks (Hackers ka JavaScript) se asani se chori ho sakta hai.
   - Isiliye hum Cookies ka use karte hain.

2. HttpOnly Cookies (Super Secure):
   Backend se Express humein ek 'HttpOnly Cookie' bana kar bhejta hai jiske andar Token hota hai.
   Is Cookie ki khaasiyat ye hai ki **koi bhi JavaScript (Hacker ki bhi) is Cookie ko chu nahi sakti** (Read nahi kar sakti). Ye direct Browser ke secure dabbe me chali jati hai.

3. Automatic Bhejna:
   Cookies ka sabse bada fayda ye hai ki jab bhi aap Frontend se us server ko request bhejte ho, Browser us Cookie ko khud ba khud request me jod (attach kar) deta hai. 
   Developer ko manually token headers me set karne ki zaroorat nahi padti!

======================================================================================
                          OLD vs NEW (Summary)
======================================================================================
🔴 BAD PRACTICE (LocalStorage)
- Token LocalStorage me rakhna aur har fetch request me Authorization: Bearer manual add karna. (Hacker friendly).

🟢 GOOD PRACTICE (HttpOnly Cookies)
- Token ko Cookie me dal do. XSS attacks se safe, aur Browser aage ka kaam khud sambhal lega!
======================================================================================
*/
