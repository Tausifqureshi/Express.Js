/*
======================================================================================
                          ROUTES & CONTROLLERS STRUCTURE
======================================================================================
// ChatGPT Se Liya Hua Syntex --->

--- HOW IT WORKS (Line-by-Line Explanation) ---

1. Separation of Concerns (Kaam ko baantna):
   MVC me sabse important step hota hai Routes aur Controllers ko alag karna.

2. 'routes' Folder:
   Is folder me hum alag files banate hain (jaise userRoutes.js, productRoutes.js).
   Yahan par hum Express ka Router() use karte hain.
   Is file ka kaam sirf itna hota hai: "Agar /login par aaya toh konse controller function ko bhejna hai".
   Is file me actual logic (Database query) KABHI nahi likhte.

3. 'controllers' Folder:
   Is folder me hum functions banate hain (jaise loginUser, egisterUser).
   Yahan asli C++ (logic), Database calls, aur password checks hote hain.
   Ye files sirf ek function Export karti hain jisko Route file me Import kar liya jata hai.

4. Express Router Ka Fayda:
   const router = express.Router();
   Ye Router humein alag-alag files me routes banane ki ijazat deta hai. Phir hum main server.js file me sirf in routers ko jod (merge) dete hain:
   pp.use('/api/users', userRoutes);

======================================================================================
                          OLD vs NEW (Summary)
======================================================================================
🔴 BAD PRACTICE (Spaghetti Code)
- server.js me hi pp.get('/login', (req, res) => { // 100 line ka db logic }) likhna.

🟢 GOOD PRACTICE (Router Structure)
- server.js sirf 20 line ki file hoti hai jisme dusri files ke modules connect hote hain.
======================================================================================
*/
