import express from 'express';
import postRoutes from './src/routes/post.routes.js';
import productRoutes from './src/routes/product.routes.js';

const app = express();
const port = 3000;

app.use(express.json());
app.use('/posts', postRoutes);
app.use('/products', productRoutes);

app.listen(port, ()=> {
    console.log(`Server is running at http://localhost:${port}`);
});
