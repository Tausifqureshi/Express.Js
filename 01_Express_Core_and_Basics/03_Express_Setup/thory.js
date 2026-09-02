// ========================================= EXPRESS SETUP & INSTALLATION ======================================= //
// ChatGPT Se Liya Hua Syntex --->
// Express.js ko hum directly use nahi kar sakte. Ise NPM ke zariye download karna padta hai apne project me.
//
// 1. Initialize the Project: Terminal me 
pm init -y chalao. Ye 'package.json' banata hai.
// 2. Install Express.js: Terminal me 
// pm install express chalao. Ye 'node_modules' folder banata hai.
// 3. Import & Initialize: const express = require('express'); const app = express(); likho aur server shuru karo.

const expressSetupExample = () => {
    const express = require('express'); // Express ko import kiya
    const app = express(); // Machine chalu ki

    app.get('/', (req, res) => { res.status(200).send("Setup successfully done!");
    });

    // 404 Handle
    app.use((req, res) => res.status(404).send("404 Error: Page Not Found"));
    
    // const PORT = 3002;
    // const server = app.listen(PORT, () => console.log("Setup Server: http://localhost:" + PORT)");
    // server.on('error', (err) => { if(err.code === 'EADDRINUSE') console.log("Port " + PORT + " busy hai!") });
};
// expressSetupExample();


