import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getProductById } from "../Data/products";
import {useCart} from "../context/Cart"

const ProductDetails = () => {


  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const foundProduct = getProductById(id);

    if (!foundProduct) {
      navigate("/");
      return;
    }
    
    setProduct(foundProduct);
  }, [id, navigate]);

  // Prevent rendering the UI until the product is found in state
  if (!product) {
    return <div className="page"><div className="container">Loading...</div></div>;
  }
  const { addToCart, cart } = useCart();
  const productInCart = cart.find((item) => item.product_id === product.product_id);
  const productQuantityLabel = productInCart ? ` (${productInCart.quantity})` : "";
  
  return (
    <div className="page">
      <div className="container">
        {/* Uses the 1fr 1fr grid from your CSS */}
        <div className="product-detail">
          
          {/* Left Column: Image */}
          <div className="product-detail-image">
            <img src={product.image} alt={product.name} />
          </div>

          {/* Right Column: Details */}
          <div>
            <h1 className="product-detail-name">{product.name}</h1>
            <p className="product-detail-price">${product.price}</p>
            <p className="product-detail-description">{product.description}</p>
            
            {/* Using your button utility classes for a nice wide CTA */}
            <button className="btn btn-primary btn-large btn-block" onClick={() => addToCart(product)}>
              Add to Cart{productQuantityLabel}
            </button>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;