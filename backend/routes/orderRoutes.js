const express = require("express");
const  { addOrderItems, getOrderById }  = require("../controllers/orderController");
const router = express.Router();
const protect = require("../middleware/authMiddleware");

router.route("/").post(protect, addOrderItems);
router.route("/:id").get(protect, getOrderById);

module.exports = router;
