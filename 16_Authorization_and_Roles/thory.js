// ========================================= AUTHORIZATION & ROLES ======================================= //
// ChatGPT Se Liya Hua Syntex --->
// Authorization matlab: "Aap kya-kya kar sakte hain?" (Adhikaar).
//
// 1. Difference: Login hona (Authentication) aur kisi doosre ki post delete karne ka haq hona (Authorization) alag cheezein hain.
// 2. Role Middleware: Hum ek isAdmin middleware banate hain jo check karta hai req.user.role === 'admin' hai ya nahi.

const authRoleExample = () => {
    const isAdmin = (req, res, next) => {
        // if(req.user.role === 'admin') next();
        // else res.status(403).send("Access Denied");
    };
};
// authRoleExample();
