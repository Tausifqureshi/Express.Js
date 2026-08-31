// ========================================================================================= //
// MAIN SERVER FILE (Kitni clean aur choti ho gayi!)
// Run: node 12_Routes_and_Controllers_Structure/MVC_Mini_Project/server.js
// ========================================================================================= //
const express = require('express');
const app = express();

// User ki alag Route file (Router) ko Import kiya
const userRoutes = require('./routes/userRoutes');

// Us Router ko '/api/users' ke path par jod diya
app.use('/api/users', userRoutes);

app.listen(5001, () => {
    console.log("🚀 MVC Server running on http://localhost:5001");
    console.log("Test All Users: http://localhost:5001/api/users");
    console.log("Test Single User: http://localhost:5001/api/users/1");
});
