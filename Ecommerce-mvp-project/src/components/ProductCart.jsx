import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/cartContext"; // <-- 1. Import Context

const ProductCard = ({ product }) => {
  
  const { addToCart } = useContext(CartContext); 

  return (
    <div className="product-card">
      <img src={product.image} className="product-card-image" alt={product.name} />
      <div className="product-card-content">
        <h3 className="product-card-name">{product.name}</h3>
        <p className="product-card-price">${product.price}</p>
        
        <div className="product-card-actions">
          <Link to={`/products/${product.product_id}`} className="btn btn-secondary">
            View Details
          </Link>
          
          
          <button 
            className="btn btn-primary" 
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;