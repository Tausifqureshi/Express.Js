/*
======================================================================================
                          EXPRESS SETUP & INSTALLATION
======================================================================================
(Note: Express.js ko hum directly use nahi kar sakte. Ise NPM ke zariye download 
karna padta hai apne project me.)

--- STEP-BY-STEP SETUP (Line-by-Line Explanation) ---

1. Initialize the Project (package.json):
   Terminal me command chalao: 
pm init -y
   Ye aapke folder me ek 'package.json' file bana dega. Ye file aapke project ka 
   Aadhar Card hai, isme likha hoga ki project ka naam kya hai aur isme kaun-kaun 
   si libraries (dependencies) install hain.

2. Install Express.js:
   Terminal me command chalao: 
pm install express
   Ye command internet (npm registry) se Express ka saara code download karegi. 
   Ye download hokar 'node_modules' naam ke folder me save hota hai.
   (⚠️ Important: node_modules ko kabhi git par push nahi karte, isliye .gitignore me dalte hain)

3. Import & Initialize in Code:
   Ab aap 	heory.js ya practical.js me Express ko bula sakte ho:
   const express = require('express');
   Phie usko start karne ke liye:
   const app = express();
   Ab ye 'app' aapka poora server sambhalega!

======================================================================================
                          SUMMARY
======================================================================================
🔴 BINA EXPRESS (Raw Node.js)
- Koi third-party library nahi thi, sirf 'http' use hota tha.

🟢 EXPRESS KE SATH (New Way)
- Hum 'npm' ka use karke duniya bhar ke developers ki banayi libraries apne project 
  me asani se laa sakte hain!
======================================================================================
*/
