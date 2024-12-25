import React, { useEffect } from "react";
import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Header = () => {
  const { cartItems } = useCart();
  return (
    <div>
      <div id="preloader">
        <div className="jumper">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>

      <header className="header-area header-sticky">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="main-nav">
                <a href="/" className="logo">
                  <img src="assets/images/logo.png" alt="Logo" />
                </a>
                <ul className="nav">
                  <li className="scroll-to-section">
                    <a href="/" className="active">
                      Home
                    </a>
                  </li>
                  <li className="scroll-to-section">
                    <a href="/">Men's</a>
                  </li>
                  <li className="scroll-to-section">
                    <a href="/">Women's</a>
                  </li>
                  <li className="scroll-to-section">
                    <a href="/">Jewelery's</a>
                  </li>
                  <li className="scroll-to-section">
                    <a href="/">Electronic's</a>
                  </li>
                  <li className="submenu">
                    <a href="javascript:void(0);">Pages</a>
                    <ul>
                      <li>
                        <a href="/about">About Us</a>
                      </li>
                      <li>
                        <a href="/products">Products</a>
                      </li>
                      <li>
                        <a href="/contact">Contact Us</a>
                      </li>
                    </ul>
                  </li>
                  <li className="scroll-to-section">
                    <a href="/">Explore</a>
                  </li>
                  <li>
                    <a
                      href="/cart"
                      onClick={() => {
                        setTimeout(() => {
                          window.location.reload();
                        }, 500);
                      }}
                    >
                      <IoCartOutline size={32} />{" "}
                      <span>{cartItems.length}</span>
                    </a>
                  </li>
                </ul>
                <a className="menu-trigger">
                  <span>Menu</span>
                </a>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
