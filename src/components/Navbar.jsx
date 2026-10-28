import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/" className="navbar-brand">
        StreamList
      </NavLink>

      <div className="navbar-links">
        <NavLink to="/">Home</NavLink>

        <NavLink to="/search">
          Search
        </NavLink>

        <NavLink to="/subscriptions">
          Subscriptions
        </NavLink>

        <NavLink to="/watchlist">
          Watchlist
        </NavLink>

        <NavLink to="/profile">
          Profile
        </NavLink>

        <NavLink to="/cart" className="cart-link">
          Cart (0)
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;