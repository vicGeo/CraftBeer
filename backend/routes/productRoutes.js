const express = require('express');
const router = express.Router();
const { getProducts, getProductById, deleteProduct } = require('../controllers/productController');
const protect = require("../middleware/authMiddleware");
const admin = require("../middleware/adminMiddleware");


router.route('/').get(getProducts);

router.route('/:id').get(getProductById).delete(protect, admin, deleteProduct);



module.exports = router;



