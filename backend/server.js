const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const products = require("./data/products");
const { notFound } = require("./middleware/errorMiddleware.js");
const { errorHandler } = require("./middleware/errorMiddleware.js");
const cors = require("cors");
const path = require("path");

// Routes
const productRoutes = require("./routes/productRoutes.js");
const userRoutes = require("./routes/userRoutes.js");
const orderRoutes = require("./routes/orderRoutes.js");
const uploadRoutes = require("./routes/uploadRoutes.js");

dotenv.config();
connectDB();
const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/upload", uploadRoutes);

// Access to Paypal client ID
app.get("/api/config/paypal", (req, res) =>
  res.send(process.env.PAYPAL_CLIENT_ID)
);

// Custom error handling
app.use(notFound);
app.use(errorHandler);

// Turn on folder uploads static
const folder = path.resolve();
app.use('/uploads', express.static(path.join(folder, '/uploads')));

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
