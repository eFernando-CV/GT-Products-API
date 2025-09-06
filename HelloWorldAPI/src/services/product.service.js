let products = [
  { id: 1, name: "Laptop", price: 1000 },
  { id: 2, name: "Smartphone", price: 500 },
  { id: 3, name: "Tablet", price: 300 }
];
let nextId = 4;

export const getAllProducts = () => {
  return products;
};

export const getProductById = (id) => {
  return products.find(p => p.id === id);
};

export const createProduct = ({ name, price }) => {
  const newProduct = { id: nextId++, name, price };
  products.push(newProduct);
  return newProduct;
};

export const updateProduct = (id, { name, price }) => {
  const productIndex = products.findIndex(p => p.id === id);
  if (productIndex === -1) return null;

  products[productIndex] = {
    ...products[productIndex],
    name: name ?? products[productIndex].name,
    price: price ?? products[productIndex].price
  };

  return products[productIndex];
};

export const deleteProduct = (id) => {
  const productIndex = products.findIndex(p => p.id === id);
  if (productIndex === -1) return false;

  products.splice(productIndex, 1);
  return true;
};
