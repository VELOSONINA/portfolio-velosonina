import express from 'express';
import connectDB from './config/database.mjs';
import productsRouter from './routes/products.mjs';

const app = express();

connectDB();

app.use(express.json());
app.use('/api/products', productsRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
