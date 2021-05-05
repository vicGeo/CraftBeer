const express = require('express');
const { authUser, getUserProfile, registerUser, updateUserProfile, getUsers } = require('../controllers/userController');
const router = express.Router();
const protect = require('../middleware/authMiddleware');
const admin = require('../middleware/adminMiddleware');



router.post('/login', authUser);
router.route('/').post(registerUser);
router.route('/profile').get(protect, getUserProfile).put(protect, updateUserProfile);
router.route('/').get(protect, admin, getUsers);




module.exports = router;



