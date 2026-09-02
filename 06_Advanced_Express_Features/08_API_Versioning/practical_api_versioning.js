const express = require('express');
const app = express();

const v1Router = express.Router();
v1Router.get('/products', (req, res) => res.status(200).json({ version: "1.0" }));

app.use('/api/v1', v1Router);

app.use((req, res) => res.status(404).json({ error: "404 Route Not Found" }));

const PORT = 6026;
const server = app.listen(PORT, () => console.log("🚀 API Versioning Server running on http://localhost:" + PORT));
server.on('error', (err) => { if (err.code === 'EADDRINUSE') console.log("❌ ERROR: Port " + PORT + " busy hai!"); });
