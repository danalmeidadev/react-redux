import React from 'react';
import { useRedux } from '../../hooks';

export function Header() {
  const {appSelector} = useRedux()

  const { cart } = appSelector((state) => ({
    cart: state.Cart.cart,
  }));

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="/">
          Logo
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/users">
                Usuários
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/financeiro">
                  financeiro
              </a>
            </li>
          </ul>
        </div>
        <div className="navbar-text">
          <i className="fa fa-shopping-cart" aria-hidden="true"></i>
          <span
            className="badge badge-pill badge-primary"
            style={{ position: "relative", top: "-8px", right: "0" }}
          >
            {cart.length}
          </span>
        </div>
      </div>
    </nav>
  )
}