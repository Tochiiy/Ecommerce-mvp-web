const products = [
  {
    "product_id": 1,
    "name": "Smartphone",
    "description": "High-end smartphone with advanced features.",
    "price": 599.99,
    "image": "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400"
  },
  {
    "product_id": 2,
    "name": "Laptop",
    "description": "Powerful laptop for work and gaming.",
    "price": 999.99,
    "image": "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400"
  },
  {
    "product_id": 3,
    "name": "Wireless Headphones",
    "description": "Premium wireless headphones with noise-cancellation.",
    "price": 149.99,
    "image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400"
  },
  {
    "product_id": 4,
    "name": "Smartwatch",
    "description": "Feature-packed smartwatch with fitness tracking.",
    "price": 199.99,
    "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400"
  },
  {
    "product_id": 5,
    "name": "Professional DSLR Camera",
    "description": "High-quality DSLR camera for photography enthusiasts.",
    "price": 499.99,
    "image": "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400"
  },
  {
    "product_id": 6,
    "name": "Smart TV",
    "description": "High-definition smart TV with built-in streaming apps.",
    "price": 799.99,
    "image": "https://images.unsplash.com/photo-1593359677879-a4bb92f4e3e5?w=400"
  },
  {
    "product_id": 7,
    "name": "Tablet",
    "description": "Compact tablet for productivity and entertainment.",
    "price": 299.99,
    "image": "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400"
  },
  {
    "product_id": 8,
    "name": "Gaming Console",
    "description": "Next-gen gaming console for immersive gaming experiences.",
    "price": 399.99,
    "image": "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=400"
  },
  {
    "product_id": 9,
    "name": "Energy-Efficient Refrigerator",
    "description": "Modern refrigerator with energy-saving features.",
    "price": 599.99,
    "image": "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=400"
  }
]


export  function getProducts ()  {

  return products;
};

export  function getProductById(id) {
  return products.find((p) => p.product_id == Number(id));
};