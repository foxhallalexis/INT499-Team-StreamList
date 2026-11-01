import { useState } from "react";
import subscriptionPlans from "../Data";

function Subscriptions({ cart, onAddToCart }) {
    const [message, setMessage] = useState("");
    const subscriptions = subscriptionPlans.filter(
        (item) => item.type === "subscription"
    );
    const merch = subscriptionPlans.filter(
        (item) => item.type === "merch"
    );
    const handleAddToCart = (plan) => {
        setMessage(onAddToCart(plan));
    };

    return (
        <main className="subscriptions-page">
            <section className="subscription-header">
                <p className="eyebrow">STREAM YOUR WAY</p>
                <h1>Choose Your Subscription</h1>

                <p>Find the plan that fits your movie nights.</p>
                {message && <p role="status" aria-live="polite">{message}</p>}
            </section>

            <section className="subscription-grid">
                {subscriptions.map((plan) => {
                    const isInCart = cart.some((item) => item.id === plan.id);

                    return (
                        <div
                            className={`subscription-card${plan.featured ? " featured-plan" : ""}`}
                            key={plan.id}
                        >
                            <img
                                src={plan.img}
                                alt={plan.service}
                                className="subscription-image"
                            />
                            <h2>{plan.service}</h2>
                            <p className="plan-description">{plan.serviceInfo}</p>
                            <div className="plan-price">${plan.price.toFixed(2)}</div>
                            <button
                                className="subscription-button"
                                onClick={() => handleAddToCart(plan)}
                                disabled={isInCart}
                            >
                                {isInCart ? "Added to Cart" : "Add to Cart"}
                            </button>
                        </div>
                    );
                })}
                <section className="merch-grid">
                    <div className="merch-header">
                        <p className="eyebrow">MAKE IT YOURS</p>
                        <h2>Add Extras to Your Cart</h2>
                        <p>Grab some EZ Tech merch to go with your subscription!</p>
                    </div>
                    <div className="merch-grid">
                        {merch.map((item) => {
                            const isInCart = cart.some(
                                (cartItem) => cartItem.id === item.id
                            );
                            return (
                                <div
                                    className={`merch-card${isInCart ? " in-cart" : ""}`}
                                    key={item.id}
                                >
                                    <img
                                        src={item.img}
                                        alt={item.service}
                                        className="merch-image"
                                    />
                                    <h3>{item.service}</h3>
                                    <p className="merch-description">{item.serviceInfo}</p>
                                    <div className="merch-price">${item.price.toFixed(2)}</div>
                                    <button
                                        className="subscription-button"
                                        onClick={() => handleAddToCart(item)}
                                        disabled={isInCart}
                                    >
                                        {isInCart ? "Added to Cart" : "Add to Cart"}
                                    </button>
                                </div>
                            );
                        })}
                    </div>
                </section>
            </section>
        </main>
    )
}

export default Subscriptions;