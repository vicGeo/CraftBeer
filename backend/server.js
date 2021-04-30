const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const products = require('./data/products');
const { notFound } = require('./middleware/errorMiddleware.js');
const { errorHandler } = require('./middleware/errorMiddleware.js');

const productRoutes = require('./routes/productRoutes');

dotenv.config();
connectDB();
const app = express();


app.use('/api/products', productRoutes);

// Custom error handling
app.use(notFound);
app.use(errorHandler);


app.get('/', (req, res) => {
    res.send('API is running...');
});

app.get('/api/products', (req, res) => {
    res.json(products);
});

app.get('/api/products/:id', (req, res) => {
    const product = products.find(p => p._id === req.params.id);
    res.json(product);
});

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));

