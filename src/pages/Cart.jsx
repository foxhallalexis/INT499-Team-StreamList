function Cart() {
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

          <div className="cart-item">
            <div className="cart-item-info">
              <p className="cart-item-type">SUBSCRIPTION</p>
              <h2>StreamList Plus</h2>
              <p className="cart-item-description">
                Your selected streaming plan.
              </p>
            </div>

            <div className="cart-item-actions">
              <span className="cart-item-price">$0.00</span>

              <button className="remove-button">
                Remove
              </button>
            </div>
          </div>

          <div className="cart-item">
            <div className="cart-item-info">
              <p className="cart-item-type">ACCESSORY</p>
              <h2>EZTech Accessory</h2>

              <div className="quantity-control">
                <button aria-label="Decrease quantity">−</button>
                <span>1</span>
                <button aria-label="Increase quantity">+</button>
              </div>
            </div>

            <div className="cart-item-actions">
              <span className="cart-item-price">$0.00</span>

              <button className="remove-button">
                Remove
              </button>
            </div>
          </div>

        </section>

        <aside className="cart-summary">
          <p className="summary-label">ORDER SUMMARY</p>

          <div className="summary-row">
            <span>Items</span>
            <span>2</span>
          </div>

          <div className="summary-divider"></div>

          <div className="summary-row total-row">
            <span>Total</span>
            <span>$0.00</span>
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