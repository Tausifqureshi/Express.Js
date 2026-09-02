// ========================================= REAL-WORLD EXPRESS REQUEST OBJECT (req) ======================================= //
// Real-world scenario: E-commerce order lookup using req.params, req.query, req.body, req.headers, and req.ip.

const express = require('express');
const app = express();
app.use(express.json()); // Parsing POST/PUT JSON bodies

const runRequestObjectPractical = () => {
    console.log("=== Real-World Request Object (req) Demo ===\n");

    // Real-world API Endpoint: Order Inspection & Tracking
    app.post('/api/orders/:orderId', (req, res) => {
        // 1. req.params: Dynamic URL param (e.g. /api/orders/ORD-9988)
        const orderId = req.params.orderId;

        // 2. req.query: Search query parameters (e.g. ?includeShipping=true&coupon=SUMMER20)
        const includeShipping = req.query.includeShipping === 'true';
        const coupon = req.query.coupon || 'None';

        // 3. req.body: POST payload from client (e.g. { customerEmail, items, paymentMethod })
        const { customerEmail, paymentMethod } = req.body;

        // 4. req.headers: Client environment & Security token
        const userAgent = req.headers['user-agent'];
        const authToken = req.headers['authorization'];

        // 5. req metadata: Request method, URL path, & Client IP
        const method = req.method;
        const url = req.url;
        const ip = req.ip;

        console.log("[ORDER API REQ] Processing Order ID:  + orderId +  for  + customerEmail");

        if (!customerEmail || !paymentMethod) {
            return res.status(400).json({
                success: false,
                statusCode: 400,
                error: "Bad Request",
                message: "Req body must contain customerEmail and paymentMethod!"
            });
        }

        res.status(200).json({
            success: true,
            statusCode: 200,
            message: "Order details processed successfully!",
            orderSummary: {
                orderId: orderId,
                customerEmail: customerEmail,
                paymentMethod: paymentMethod,
                appliedCoupon: coupon,
                includeShipping: includeShipping
            },
            requestMetaData: {
                method: method,
                url: url,
                ip: ip,
                userAgent: userAgent,
                hasAuthHeader: !!authToken
            }
        });
    });

    // 404 Handler for invalid routes
    app.use((req, res) => {
        res.status(404).json({
            success: false,
            statusCode: 404,
            error: "Not Found",
            message: "Endpoint " + req.url + " does not exist!"
        });
    });

    const PORT = 3011;
    app.listen(PORT, () => {
        console.log("🚀 Request Object Server running on http://localhost: + PORT");
    }).on('error', (err) => {
        if (err.code === 'EADDRINUSE') console.log("❌ ERROR: Port  + PORT +  pehle se busy hai!");
        else console.log("❌ SERVER ERROR:", err.message");
    });
};

runRequestObjectPractical();

