function Cart({ cart, onRemove, onQuantityChange }) {
  const itemCount = cart.reduce((count, item) => count + item.quantity, 0);
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <main className="cart-page">
      <section className="cart-header">
        <p className="eyebrow">YOUR STREAMLIST</p>
        <h1>Your Cart</h1>
        <p className="cart-intro">
          Review your selections before checking out.
        </p>
      </section>

      <div className="cart-layout">
        <section className="cart-items">
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            cart.map((item) => (
              <div className="cart-item" key={item.id}>
                <div className="cart-item-info">
                  <p className="cart-item-type">{item.type}</p>
                  <h2>{item.name}</h2>
                  <p className="cart-item-description">
                    ${item.price.toFixed(2)} each
                  </p>
                  {item.type === "subscription" ? (
                    <p>Quantity: 1</p>
                  ) : (
                    <div className="quantity-control">
                      <button
                        aria-label={`Decrease ${item.name} quantity`}
                        onClick={() => onQuantityChange(item.id, -1)}
                        disabled={item.quantity <= 1}
                      >
                        −
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        aria-label={`Increase ${item.name} quantity`}
                        onClick={() => onQuantityChange(item.id, 1)}
                      >
                        +
                      </button>
                    </div>
                  )}
                </div>

                <div className="cart-item-actions">
                  <span className="cart-item-price">
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                  <button
                    className="remove-button"
                    onClick={() => onRemove(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))
          )}
        </section>

        <aside className="cart-summary">
          <p className="summary-label">ORDER SUMMARY</p>

          <div className="summary-row">
            <span>Items</span>
            <span>{itemCount}</span>
          </div>

          <div className="summary-divider"></div>

          <div className="summary-row total-row">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>

          <button className="checkout-button">
            Continue
          </button>

          <p className="summary-note">
            Cart contents will be saved automatically.
          </p>
        </aside>

      </div>
    </main>
  );
}

export default Cart;