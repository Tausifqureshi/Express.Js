// ========================================================= //
// CONTROLLER: Dimaag (Logic yahan hota hai)
// ========================================================= //
const users = require('../models/userModel');

// 1. Get All Users (Controller Function)
const getAllUsers = (req, res) => {
    // Yahan aage chalkar hum database query marenge (e.g. User.find())
    console.log("Controller ne Data Model se manga aur wapas bhej diya!");
    res.json({ success: true, data: users });
};

// 2. Get Single User (Controller Function)
const getSingleUser = (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);
    
    if(!user) {
        return res.status(404).json({ success: false, message: "User nahi mila!" });
    }
    res.json({ success: true, data: user });
};

// Functions ko export kiya
module.exports = {
    getAllUsers,
    getSingleUser
};
