import React, { useEffect } from "react";
import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import $ from "jquery";

const Header = () => {
  const { cartItems } = useCart();

  useEffect(() => {
    $(".scroll-to-section a").on("click", function (event) {
      event.preventDefault(); // Prevent default anchor click behavior
      const href = $(this).attr("href"); // Get the target section from the href attribute
      console.log(href);
      console.log($(href).offset().top);

      // Smooth scroll to the target section
      $("html, body").animate(
        {
          scrollTop: $(href).offset().top,
        },
        1000 // Duration of the scroll
      );
    });
  }, []);

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
                    <a href="#top" className="active">
                      Home
                    </a>
                  </li>
                  <li className="scroll-to-section">
                    <a href="#men">Men's</a>
                  </li>
                  <li className="scroll-to-section">
                    <a href="#women">Women's</a>
                  </li>
                  <li className="scroll-to-section">
                    <a href="#jewelery">Jewelery's</a>
                  </li>
                  <li className="scroll-to-section">
                    <a href="#electronics">Electronic's</a>
                  </li>
                  <li className="submenu">
                    <a href="javascript:void(0);">Pages</a>
                    <ul>
                      <li>
                        <Link to="/about">About Us</Link>
                      </li>
                      <li>
                        <Link to="/products">Products</Link>
                      </li>
                      <li>
                        <Link to="/contact">Contact Us</Link>
                      </li>
                    </ul>
                  </li>
                  <li className="scroll-to-section">
                    <a href="#explore">Explore</a>
                  </li>
                  <li>
                    <Link to="/cart">
                      <IoCartOutline size={32} />{" "}
                      <span>{cartItems.length}</span>
                    </Link>
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
