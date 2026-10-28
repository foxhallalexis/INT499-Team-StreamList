import { NavLink } from "react-router-dom";

function Navbar() {
  const navClass = ({ isActive }) =>
    isActive ? "nav-link active" : "nav-link";

  return (
    <nav className="navbar">
      <NavLink to="/" className="navbar-brand">
        StreamList
      </NavLink>

      <div className="navbar">
        <NavLink to="/" className="navbar-brand">
          Home</NavLink>

        <NavLink to="/search"className="navbar-brand">
          Search
        </NavLink>

        <NavLink to="/subscriptions" className="navbar-brand">
          Subscriptions
        </NavLink>

        <NavLink to="/watchlist" className="navbar-brand">
          Watchlist
        </NavLink>

        <NavLink to="/profile" className="navbar-brand">
          Profile
        </NavLink>

        <NavLink to="/cart" className={({ isActive }) =>
        isActive ? "cart-link active-cart" : "cart-link"
        }>
          Cart <span className="cart-count">0</span>
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;