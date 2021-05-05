const express = require("express");
const  { addOrderItems, getOrderById, updateOrderToPaid }  = require("../controllers/orderController");
const router = express.Router();
const protect = require("../middleware/authMiddleware");

router.route("/").post(protect, addOrderItems);
router.route("/:id").get(protect, getOrderById);
router.route("/:id/pay").put(protect, updateOrderToPaid);

module.exports = router;
