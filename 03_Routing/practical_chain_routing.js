// ========================================= ADVANCED / CHAIN ROUTING ======================================= //
const express = require('express');
const app = express();

app.route('/user')
    .get((req, res) => { res.send("User ka data dekha (GET)"); })
    .post((req, res) => { res.send("Naya User banaya (POST)"); })
    .put((req, res) => { res.send("User update kiya (PUT)"); });

// 404 Handle
app.use((req, res) => res.status(404).send("404 Error: Route Not Found"));

const PORT = 3004;
const server = app.listen(PORT, () => console.log("🚀 Chain Routing Server on http://localhost:" + PORT));
server.on('error', (err) => { if(err.code === 'EADDRINUSE') console.log("❌ ERROR: Port " + PORT + " busy hai!"); });
