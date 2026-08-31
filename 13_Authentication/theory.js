/*
======================================================================================
                          AUTHENTICATION (Pehchaan)
======================================================================================
// ChatGPT Se Liya Hua Syntex --->

--- HOW IT WORKS (Line-by-Line Explanation) ---

1. Authentication Kya Hai?
   Authentication ka matlab hai: "Who are you?" (Aap kaun hain?)
   Jab user login form me Email aur Password dalta hai, aur hum Database me check karte hain ki kya ye user sach me humara member hai? Ise Authentication kehte hain.

2. The Stateless Problem (API ki yaadash kamzor hai):
   REST APIs 'Stateless' hoti hain. Iska matlab hai agar user ne ek baar Login kar liya (Backend ne bola "Haan tum Tausif ho"), aur uske 1 second baad user ne "My Profile" ka button dabaya, toh Backend phir poochega "Tum kaun ho?". 
   Kyunki API pichli baat bhool jati hai!

3. The Solution (Tokens / Sessions):
   Is yaadash (memory) ki problem ko theek karne ke liye hum Session ya Tokens ka use karte hain.
   Jab user successful login karta hai, toh hum usko ek "Stamp" (Token) de dete hain.
   Ab agli baar jab user "My Profile" pe aayega, toh wo bar-bar password nahi dalega, wo bas apna wo "Stamp" (Token) dikhayega aur backend usko pehchan jayega.

======================================================================================
                          OLD vs NEW (Summary)
======================================================================================
🔴 OLD TARIQA (Sessions & Cookies Only)
- Server user ki detail apne RAM me (Session me) yaad rakhta tha. Bohot saare users aane par Server ki RAM bhar jati thi (Not scalable).

🟢 NEW TARIQA (Token Based - JWT)
- Server kuch yaad nahi rakhta. Wo ek Digital Token banakar User ko de deta hai. Ab saari memory user ke paas hai (Highly scalable).
======================================================================================
*/
