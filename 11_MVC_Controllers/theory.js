/*
======================================================================================
                          MVC ARCHITECTURE (Model-View-Controller)
======================================================================================
// ChatGPT Se Liya Hua Syntex --->

--- HOW IT WORKS (Line-by-Line Explanation) ---

1. MVC Kya Hai?
   MVC ek Design Pattern hai. Matlab code ko likhne ka ek proper saaf-suthra tareeqa.
   Agar aap sara code (Database connection, HTML, Business logic, Routes) ek hi 'server.js' file me likh doge toh wo file 5000 line ki ho jayegi! Usko padhna aur theek karna azaab ban jayega (Spaghetti Code).
   MVC aapke code ko 3 hisso me tod deta hai.

2. Model (M):
   Ye Database se baat karne ka hissa hai (Jaise Mongoose schemas). 
   Data save karna, update karna, delete karna. Isme sirf Data ka logic hota hai.

3. View (V):
   Ye User Interface (UI) hai jo client ko dikhta hai.
   Express backend me aksar View nahi hota kyunki View ka kaam React/Angular/Vue karte hain. Par agar aap React use nahi kar rahe toh EJS/Pug templates View ka kaam karte hain.

4. Controller (C):
   Ye Brain (Dimaag) hai. 
   Controller ko jab Route se request aati hai, toh wo Model ke paas jata hai (Data maangne), Data lekar aata hai, aur us data ko wapas Client (View) ko bhej deta hai.

======================================================================================
                          OLD vs NEW (Summary)
======================================================================================
🔴 BAD PRACTICE (No Architecture)
- Route, Database Query, aur response bhejna sab ek hi pp.get() ke andar likhna.

🟢 GOOD PRACTICE (MVC Pattern)
- Routes ko alag file me rakho, uske andar function mat likho balki Controller ko bula lo! Code ekdum clean.
======================================================================================
*/
