// ========================================= API VERSIONING ======================================= //
// ChatGPT Se Liya Hua Syntex --->
// Web development me jab hum Nayi API release karte hain (v2), toh purane Mobile Apps ya Frontend clients ko break hone se bachane ke liye API Versioning ki jati hai.
//
// 1. URI Versioning: /api/v1/users aur /api/v2/users (Sabse famous tarika).
// 2. Express Routers: Hum har version ke liye alag Express Router banate hain aur pp.use('/api/v1', v1Router) se map kar dete hain.

const apiVersioningExample = () => {
    const express = require('express');
    const app = express();

    // Version 1 Router (Legacy)
    const v1Router = express.Router();
    v1Router.get('/users', (req, res) => { res.status(200).json({ version: "v1", users: [{ id: 1, name: "Tausif" }] });
    });

    // Version 2 Router (Modern with extra fields)
    const v2Router = express.Router();
    v2Router.get('/users', (req, res) => { res.status(200).json({ version: "v2", users: [{ id: 1, name: "Tausif Qureshi", role: "Backend Lead" }] });
    });

    // Version Route Mounting
    app.use('/api/v1', v1Router);
    app.use('/api/v2', v2Router);

    app.use((req, res) => res.status(404).json({ error: "404 Route Not Found" }));

    const PORT = 3026;
    // const server = app.listen(PORT, () => console.log("Versioning Server running on http://localhost: + PORT);
    // server.on('error', (err) => { if (err.code === 'EADDRINUSE') console.log("Port busy hai!"); });
};
// apiVersioningExample();


