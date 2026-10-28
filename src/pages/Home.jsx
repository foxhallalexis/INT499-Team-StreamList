
function Home() {
  return (
    <main className="home">
      <section className="hero">

        <div className="hero-content">
          <p className="eyebrow">STREAMLIST</p>

          <h1>Discover your next favorite movie.</h1>

          <p className="hero-description">
            Browse featured movies, discover trending titles, and keep track
            of what you want to watch.
          </p>

          <button className="primary-button">
            Browse Movies
          </button>
        </div>

        <div className="featured-placeholder">
          <span className="movie-title">
            Featured Movie
          </span>
        </div>

      </section>

      <section className="trending">

        <div className="section-heading">
          <div>
            <p className="eyebrow">POPULAR NOW</p>
            <h2>Trending Movies</h2>
          </div>

          <span>Explore popular titles</span>
        </div>

        <div className="movie-grid">

          <div className="movie-placeholder">
            <span className="movie-title">Movie One</span>
          </div>

          <div className="movie-placeholder">
            <span className="movie-title">Movie Two</span>
          </div>

          <div className="movie-placeholder">
            <span className="movie-title">Movie Three</span>
          </div>

          <div className="movie-placeholder">
            <span className="movie-title">Movie Four</span>
          </div>

        </div>

      </section>
    </main>
  );
}

export default Home;