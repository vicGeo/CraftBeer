const express = require('express');
const { authUser, getUserProfile, registerUser, updateUserProfile } = require('../controllers/userController');
const router = express.Router();
const protect = require('../middleware/authMiddleware');



router.post('/login', authUser);
router.route('/').post(registerUser);
router.route('/profile').get(protect, getUserProfile).put(protect, updateUserProfile);



module.exports = router;



