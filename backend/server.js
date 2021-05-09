const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const products = require("./data/products");
const { notFound } = require("./middleware/errorMiddleware.js");
const { errorHandler } = require("./middleware/errorMiddleware.js");
const cors = require("cors");
const path = require("path");
const morgan = require("morgan");

// Routes
const productRoutes = require("./routes/productRoutes.js");
const userRoutes = require("./routes/userRoutes.js");
const orderRoutes = require("./routes/orderRoutes.js");
const uploadRoutes = require("./routes/uploadRoutes.js");

dotenv.config();
connectDB();
const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(cors());
app.use(express.json());

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/upload", uploadRoutes);

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});

// Access to Paypal client ID
app.get("/api/config/paypal", (req, res) =>
  res.send(process.env.PAYPAL_CLIENT_ID)
);

// Turn on folder uploads static
const folder = path.resolve();
app.use("/uploads", express.static(path.join(folder, "/uploads")));

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(folder, "/frontend/build")));

  app.get("*", (req, res) =>  res.sendFile(path.resolve(folder, 'frontend', 'build', 'index.html')));
} else {
  app.get("/", (req, res) => {
    res.send("API is running...");
  });
}

// Custom error handling
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
