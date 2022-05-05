import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "../cart-widget";

function Header() {
  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-primary ">
      <div className="container-fluid">
        <Link to="/cart" className="navbar-brand" href="/#">
          <CartWidget />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbar"
          aria-controls="navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbar">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Caterorias
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/cart" className="nav-link" href="/#">
                Cart
              </Link>
            </li>
          </ul>
          {/* <form className="d-flex">
            <input
              className="form-control me-sm-2"
              type="text"
              placeholder="Search"
            />
            <button className="btn btn-secondary my-2 my-sm-0" type="submit">
              Search
            </button>
          </form> */}
        </div>
      </div>
    </nav>
  );
}

export default Header;
