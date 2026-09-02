// ========================================================= //
// ROUTES: Sirf Rasta batata hai, kaam (logic) khud nahi karta
// ========================================================= //
const express = require('express');
const router = express.Router();

// Controller ko import kiya
const userController = require('../controllers/userController');

// Agar koi '/' par aaye, toh 'getAllUsers' function chala do
router.get('/', userController.getAllUsers);

// Agar koi '/:id' par aaye, toh 'getSingleUser' function chala do
router.get('/:id', userController.getSingleUser);

// Router export kiya
module.exports = router;
