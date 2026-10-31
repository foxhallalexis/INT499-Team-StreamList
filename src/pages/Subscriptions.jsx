import { useState } from "react";
import subscriptionPlans from "../Data";

function Subscriptions({ cart, onAddToCart }) {
    const [message, setMessage] = useState("");

    const handleAddToCart = (plan) => {
        setMessage(onAddToCart(plan));
    };

    return (
        <main className="subscriptions-page">
            <section className="page-header">
                <p className="eyebrow">STREAM YOUR WAY</p>
                <h1>Choose Your Subscription</h1>

                <p>Find the plan that fits your movie nights.</p>
                {message && <p role="status" aria-live="polite">{message}</p>}
            </section>

            <section className="subscription-grid">
                {subscriptionPlans.map((plan) => {
                    const isInCart = cart.some((item) => item.id === plan.id);

                    return (
                        <div
                            className={`subscription-card${plan.featured ? " featured-plan" : ""}`}
                            key={plan.id}
                        >
                            <p className="plan-label">{plan.label}</p>
                            <h2>{plan.name}</h2>
                            <p className="plan-description">{plan.description}</p>
                            <div className="plan-price">${plan.price.toFixed(2)}</div>
                            <button
                                className="primary-button"
                                onClick={() => handleAddToCart(plan)}
                                disabled={isInCart}
                            >
                                {isInCart ? "Added to Cart" : "Add to Cart"}
                            </button>
                        </div>
                    );
                })}
            </section>
        </main>
    )
}

export default Subscriptions;