import express from 'express';
import morgan from 'morgan';
import postRoutes from './src/routes/post.routes.js';
import productRoutes from './src/routes/product.routes.js';
import commentRoutes from './src/routes/comment.routes.js';
import config from './src/config/index.js';

const app = express();

if (config.nodeEnv === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());

app.use('/posts', postRoutes);
app.use('/products', productRoutes);
app.use('/comments', commentRoutes);

app.listen(config.port, () => {
  console.log(
    `Server is running at http://localhost:${config.port} in ${config.nodeEnv} mode`
  );
});
