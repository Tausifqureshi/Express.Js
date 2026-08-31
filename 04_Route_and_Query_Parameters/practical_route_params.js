// ========================================= ROUTE PARAMETERS ======================================= //
const express = require('express');
const app = express();

app.get('/user/:userId', (req, res) => {
    const id = req.params.userId;
    res.send(Aapne User ID:  + id +  manga hai!);
});

app.get('/flight/:from/:to', (req, res) => {
    res.json({ message: "Flight Details", departure: req.params.from, destination: req.params.to });
});

// 404 Handle
app.use((req, res) => res.status(404).json({error: "404 Route Not Found"}));

const PORT = 6013;
const server = app.listen(PORT, () => console.log("🚀 Route Params Server on http://localhost:" + PORT));
server.on('error', (err) => { if(err.code === 'EADDRINUSE') console.log("❌ ERROR: Port " + PORT + " busy hai!"); });
