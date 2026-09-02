// ========================================= ASYNC HANDLER & ASYNC ERROR HANDLING ======================================= //
// ChatGPT Se Liya Hua Syntex --->
// Express 4 me jab hum async functions (sync (req, res) => {}) use karte hain, toh agar uncaught promise rejection aati hai,
// toh Express use khud catch nahi kar pata aur server hang ya crash ho jata hai.
//
// 1. Problem: Har async route handler me 	ry { ... } catch(err) { next(err); } baar baar likhna padta hai (Boilerplate code).
// 2. Solution: syncHandler ek High-Order Function hai jo async function ko wrap karta hai aur errors ko automatically 
// ext(err) me bhej deta hai.

const asyncHandlerExample = () => {
    const express = require('express');
    const app = express();

    // Custom asyncHandler Wrapper Function
    const asyncHandler = (fn) => (req, res, next) => {
        Promise.resolve(fn(req, res, next)).catch(next);
    };

    // Simulated Database Call jo error fekta hai
    const fakeAsyncDatabaseCall = async () => {
        throw new Error("Database Connection Failed!");
    };

    // Route using asyncHandler (Bina try-catch ke error handle hoga)
    app.get('/api/async-data', asyncHandler(async (req, res) => {
        await fakeAsyncDatabaseCall(); res.status(200).json({ success: true, message: "Data fetched successfully!" });
    }));

    // Global Error Catcher
    app.use((err, req, res, next) => {
        console.error("Caught by Global Error Handler:", err.message");
        res.status(500).json({ error: err.message });
    });

    // 404 Handler
    app.use((req, res) => res.status(404).json({ error: "404 Route Not Found" }));

    const PORT = 3025;
    // const server = app.listen(PORT, () => console.log("Async Handler Server running on http://localhost: + PORT);
    // server.on('error', (err) => { if (err.code === 'EADDRINUSE') console.log("Port busy hai!"); });
};
// asyncHandlerExample();


