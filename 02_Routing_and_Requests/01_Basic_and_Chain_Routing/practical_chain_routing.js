// ========================================= CHAIN ROUTING PRACTICAL ======================================= //
const express = require('express');
const app = express();
app.use(express.json());

// app.route() se multiple HTTP methods (GET, POST, PUT, DELETE) ko ek hi path par chain karna
app.route('/api/book')
    .get((req, res) => {
        res.status(200).json({ success: true, action: "FETCH", message: "Fetching all books..." });
    })
    .post((req, res) => {
        res.status(201).json({ success: true, action: "CREATE", message: "New book added successfully!" });
    })
    .put((req, res) => {
        res.status(200).json({ success: true, action: "UPDATE", message: "Book updated successfully!" });
    })
    .delete((req, res) => {
        res.status(200).json({ success: true, action: "DELETE", message: "Book deleted successfully!" });
    });

app.use((req, res) => {
    res.status(404).json({ success: false, message: "404 Error: Route Not Found!" });
});

const PORT = 3004;
app.listen(PORT, () => {
    console.log("🚀 Chain Routing Server running on http://localhost: + PORT");
}).on('error', (err) => {
    if (err.code === 'EADDRINUSE') console.log("❌ ERROR: Port  + PORT +  pehle se busy hai!");
    else console.log("❌ SERVER ERROR:", err.message");
});

