import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import postRoutes from './src/routes/post.routes.js';
import productRoutes from './src/routes/product.routes.js';
import commentRoutes from './src/routes/comment.routes.js';

dotenv.config();

const app = express();

const port = process.env.PORT || 3000;

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());

app.use('/posts', postRoutes);
app.use('/products', productRoutes);
app.use('/comments', commentRoutes); 

app.listen(port, ()=> {
    console.log(`Server is running at http://localhost:${port}`);
});
