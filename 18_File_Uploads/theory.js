/*
======================================================================================
                          FILE UPLOADS (Multer Middleware)
======================================================================================
// ChatGPT Se Liya Hua Syntex --->

--- HOW IT WORKS (Line-by-Line Explanation) ---

1. Text vs File:
   Normal text data JSON format me aata hai jisko padhna aasan hai (express.json()).
   Lekin agar user Image, Video ya PDF upload karta hai, toh wo multipart/form-data format me aati hai. Express directly files ko read nahi kar sakta.

2. Multer (The File Manager):
   Node.js ki duniye me File Upload karne ka baap hai 'Multer' library.
   Ye ek middleware hai jo specifically is multipart data ko pakadta hai, file ko disk (Hard drive) ya cloud (AWS S3, Cloudinary) pe save karta hai, aur uska baaki ka data text me badal deta hai.

3. Flow of Upload:
   - User form submit karta hai (Image + Name).
   - Request API par aati hai.
   - Multer beech me aata hai, Image ko eq.file me dalta hai aur Name ko eq.body me daal deta hai.
   - Phir aapka Route Handler chalta hai jo us image ki link Database me save kar leta hai.

======================================================================================
                          OLD vs NEW (Summary)
======================================================================================
🔴 RAW NODE.JS (Hard Way)
- 'fs' module ka use karke manual buffer ko chunks me tod kar stream karna padta tha. Dimag kharab ho jata tha!

🟢 EXPRESS.JS (Smart Way)
- upload.single('avatar') likho, aur Multer khud image ko disk par save karke aapko filename aur path de dega!
======================================================================================
*/
