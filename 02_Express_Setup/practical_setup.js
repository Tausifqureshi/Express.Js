const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Express Setup Done Successfully!</h1><p>Welcome to Express.js Bhai!</p>');
});

app.listen(3000, () => {
    console.log('✅ Express Server is running on http://localhost:3000');
});
