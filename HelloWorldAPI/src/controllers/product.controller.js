import * as productService from '../services/product.service.js';

export const getAllProducts = (req, res) => {
  const products = productService.getAllProducts();
  res.json(products);
};

export const getProductById = (req, res) => {
  const id = parseInt(req.params.id, 10);
  const product = productService.getProductById(id);

  if (!product) {
    return res.status(404).json({ message: "Product not found." });
  }

  res.json(product);
};

export const createProduct = (req, res) => {
  const { name, price } = req.body;

  if (!name || typeof price !== "number") {
    return res.status(400).json({ message: "Invalid product data." });
  }

  const newProduct = productService.createProduct({ name, price });
  res.status(201).json(newProduct);
};

export const updateProduct = (req, res) => {
  const id = parseInt(req.params.id, 10);
  const updatedProduct = productService.updateProduct(id, req.body);

  if (!updatedProduct) {
    return res.status(404).json({ message: "Product not found." });
  }

  res.json(updatedProduct);
};

export const deleteProduct = (req, res) => {
  const id = parseInt(req.params.id, 10);
  const success = productService.deleteProduct(id);

  if (!success) {
    return res.status(404).json({ message: "Product not found." });
  }

  res.status(204).send();
};
