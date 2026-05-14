import { useNavigate } from "react-router-dom";
import { useCart } from "../context/Cart";

const CheckOut = () => {
  const navigate = useNavigate();
  const { cart, removeFromCart, updateQuantity, clearCart, cartTotal } = useCart();

  if (!cart.length) {
    return (
      <div className="page">
        <div className="container">
          <h1 className="page-title">Your Cart is Empty</h1>
          <p>You don't have any items in your cart yet.</p>
          <button className="btn btn-primary" onClick={() => navigate('/')}>Continue Shopping</button>
        </div>
      </div>
    );
  }

  return (
    <div className="page">
      <div className="container">
        <h1 className="page-title">Checkout</h1>
        <div className="checkout-grid">
          <div className="checkout-items">
            {cart.map((item) => (
              <div className="checkout-item" key={item.product_id}>
                <div className="checkout-item-details">
                  <img src={item.image} alt={item.name} className="checkout-item-image" />
                  <div>
                    <h2>{item.name}</h2>
                    <p>${item.price.toFixed(2)}</p>
                  </div>
                </div>
                <div className="checkout-item-actions">
                  <button className="btn btn-secondary btn-small" onClick={() => updateQuantity(item.product_id, -1)}>-</button>
                  <span>{item.quantity}</span>
                  <button className="btn btn-secondary btn-small" onClick={() => updateQuantity(item.product_id, 1)}>+</button>
                  <button className="btn btn-danger btn-small" onClick={() => removeFromCart(item.product_id)}>Remove</button>
                </div>
              </div>
            ))}
          </div>

          <div className="checkout-summary">
            <h2>Order Summary</h2>
            <p>Total items: {cart.reduce((sum, item) => sum + item.quantity, 0)}</p>
            <p>Total price: ${cartTotal.toFixed(2)}</p>
            <button className="btn btn-primary btn-large" onClick={() => {
              clearCart();
              alert('Thanks for your purchase!');
              navigate('/');
            }}>
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
