import { useCart } from "../context/Cart";
import { Link } from "react-router-dom";

export default function Checkout() {
  const { cart, updateQuantity, removeFromCart, cartTotal, clearCart } = useCart();

  if (cart.length === 0) {
    return (
      <div className="page">
        <div className="container" style={{ textAlign: "center", padding: "4rem 1rem" }}>
          <div style={{ fontSize: "3rem" }}>🛒</div>
          <h1 className="page-title">Your cart is empty</h1>
          <p style={{ marginBottom: "1.5rem", color: "#666" }}>
            Looks like you haven't added anything yet!
          </p>
          <Link to="/" className="btn btn-primary">
            Start Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="page">
      <div className="container">
        <h1 className="page-title">Your Cart</h1>

        <div className="checkout-container">

          {/* ── Cart items ── */}
          <div className="checkout-items">
            <h2 className="checkout-section-title">
              Order Summary ({cart.reduce((c, i) => c + i.quantity, 0)} items)
            </h2>

            {cart.map((item) => (
              <div className="checkout-item" key={item.product_id}>
                <img
                  src={item.image}
                  alt={item.name}
                  className="checkout-item-image"
                />
                <div className="checkout-item-details">
                  <h3 className="checkout-item-name">{item.name}</h3>
                  <p className="checkout-item-price">${item.price.toFixed(2)} each</p>
                </div>
                <div className="checkout-item-controls">
                  <div className="quantity-controls">
                    <button
                      className="quantity-btn"
                      onClick={() => updateQuantity(item.product_id, -1)}
                    >
                      −
                    </button>
                    <span className="quantity-value">{item.quantity}</span>
                    <button
                      className="quantity-btn"
                      onClick={() => updateQuantity(item.product_id, 1)}
                    >
                      +
                    </button>
                  </div>
                  <p className="checkout-item-total">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                  <button
                    className="btn btn-secondary btn-small"
                    onClick={() => removeFromCart(item.product_id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}

            <button
              className="btn btn-secondary"
              style={{ marginTop: "1rem" }}
              onClick={clearCart}
            >
              Clear Cart
            </button>
          </div>

          {/* ── Summary panel ── */}
          <div className="checkout-summary">
            <h2 className="checkout-section-title">Total Cost</h2>

            {cart.map((item) => (
              <div
                key={item.product_id}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "0.5rem",
                  fontSize: "0.9rem",
                }}
              >
                <span>{item.name} × {item.quantity}</span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}

            <hr style={{ margin: "1rem 0", opacity: 0.2 }} />

            <div className="checkout-total">
              <p className="checkout-total-label">Subtotal:</p>
              <p className="checkout-total-value">${cartTotal.toFixed(2)}</p>
            </div>
            <div className="checkout-total">
              <p className="checkout-total-label">Shipping:</p>
              <p className="checkout-total-value" style={{ color: "green" }}>
                Free
              </p>
            </div>

            <hr style={{ margin: "1rem 0", opacity: 0.2 }} />

            <div className="checkout-total">
              <p className="checkout-total-label" style={{ fontWeight: "700", fontSize: "1.1rem" }}>
                Total:
              </p>
              <p className="checkout-total-value checkout-total-final">
                ${cartTotal.toFixed(2)}
              </p>
            </div>

            <button
              className="btn btn-primary btn-large btn-block"
              style={{ marginTop: "1rem" }}
              onClick={() => alert("Proceeding to payment... 🔒")}
            >
              🔒 Proceed to Payment
            </button>

            <Link
              to="/"
              className="btn btn-secondary btn-block"
              style={{
                display: "block",
                textAlign: "center",
                marginTop: "0.75rem",
              }}
            >
              ← Continue Shopping
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}