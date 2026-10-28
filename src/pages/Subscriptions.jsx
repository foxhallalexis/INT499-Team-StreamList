function Subscriptions () {
    return (
        <main className="subscriptions-page">
            <section className="page-header">
                <p className="eyebrow">STREAM YOUR WAY</p>
                <h1>Choose Your Subscription</h1>

                <p>Find the plan that fits your movie nights.</p>
            </section>

            <section className="subscription-grid">
                <div className="subscription-card">
                    <p className="plan-label">BASIC</p>
                    <h2>StreamList Basic</h2>

                    <p className="plan-description">A simple option for movie lovers getting started.</p>
                    <div className="plan-price">$0.00</div>
                    <button className="primary-button">Add to Cart</button>
                </div>

                <div className="subscription-card featured-plan">
                    <p className="plan-label">POPULAR</p>
                    <h2>StreamList Plus</h2>
                    <p className="plan-description">More features for your everyday streaming experience.</p>
                    <div className="plan-price">$2.00</div>
                    <button className="primary-button">Add to Cart</button>
                </div>

                <div className="subscription-card">
                    <p className="plan-label">PREMIUM</p>
                    <h2>StreamList Premium</h2>
                    <p className="plan-description">The complete StreamList experience.</p>
                    <div className="plan-price">$5.00</div>
                    <button className="primary-button">Add to Cart</button>
                </div>
            </section>
        </main>
    )
}

export default Subscriptions;