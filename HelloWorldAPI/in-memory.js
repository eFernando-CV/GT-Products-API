import express from 'express';
import postRoutes from './src/routes/post.routes.js';
import productRoutes from './src/routes/product.routes.js';

const app = express();
const port = 3000;

app.use(express.json());
app.use('/posts', postRoutes);
app.use('/products', productRoutes);

let products = [
    {"id": 1, "name": "Laptop", "price": 1000},
    {"id": 2, "name": "Smartphone", "price": 500},
    {"id": 3, "name": "Tablet", "price": 300}
];

let posts = [
    { id: 1, title: 'First Post', content: 'This is the first post.' },
    { id: 2, title: 'Second Post', content: 'This is the second post.' }
];
let nextId = 3;

app.post('/products', (req, res) => {
    const newId = Math.max(...products.map(p => p.id)) + 1;
    const newProduct = {
        id: newId,
        name: req.body.name,
        price: req.body.price
    };

    products.push(newProduct);
    res.status(201).json(newProduct);
});

app.post('/posts', (req, res) => {
    const { title, content } = req.body;
    if (!title || !content) {
        return res.status(400).json({ message: 'Title and content are required.' });
    }
    const newPost = { id: nextId++, title, content };
    posts.push(newPost);
    res.status(201).json(newPost);
});

app.put('/products/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const productIndex = products.findIndex(p => p.id === id);

    if (productIndex === -1) {
        return res.status(404).json({ message: "Product not found" });
    }

    products[productIndex].name = req.body.name;
    products[productIndex].price = req.body.price;

    res.status(200).json(products[productIndex]);
});

app.put('/posts/:id', (req, res) => {
    const postId = parseInt(req.params.id, 10);
    const postIndex = posts.findIndex(p => p.id === postId);
    if (postIndex === -1) {
        return res.status(404).json({ message: 'Post not found.' });
    }
    const { title, content } = req.body;
    posts[postIndex] = { ...posts[postIndex], title: title || posts[postIndex].title, content: content || posts[postIndex].content };
    res.json(posts[postIndex]);
});

app.delete('/products/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const productIndex = products.findIndex(p => p.id === id);

    if (productIndex === -1) {
        return res.status(404).json({ message: "Product not found" });
    }

    products.splice(productIndex, 1);
    res.status(204).send();
});

app.delete('/posts/:id', (req, res) => {
    const postId = parseInt(req.params.id, 10);
    const postIndex = posts.findIndex(p => p.id === postId);
    if (postIndex === -1) {
        return res.status(404).json({ message: 'Post not found.' });
    }
    posts.splice(postIndex, 1);
    res.status(204).send();
});

app.get('/products', (req, res) => {
     res.status(200).json(products);
});

app.get('/products/:id', (req, res) => {
     const id = parseInt(req.params.id);
     const searchProduct = products.find(product => product.id === id);
     console.log(searchProduct)
     if(!searchProduct){
         return  res.status(404).json({message: "Product not found"});
     } else {
         res.status(200).json(searchProduct);
     }
});

app.get('/posts', (req, res) => {
    res.json(posts);
});

app.get('/posts/:id', (req, res) => {
    const postId = parseInt(req.params.id, 10);
    const post = posts.find(p => p.id === postId);
    if (!post) {
        return res.status(404).json({ message: 'Post not found.' });
    }
    res.json(post);
});

app.listen(port, ()=> {
    console.log(`Server is running at http://localhost:${port}`);
});
