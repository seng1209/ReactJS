import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import { useCart } from "../context/CartContext";

import Navigation from "../components/Navigation";

const Products = () => {
  const [products, setProducts] = useState([]);

  const getItems = async () => {
    try {
      const result = await axios.get("https://fakestoreapi.com/products");
      setProducts(result.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getItems();
  }, []);

  const { addToCart } = useCart();

  return (
    <div>
      <>
      <Navigation />
        <div className="page-heading" id="top">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="inner-content">
                  <h2>Check Our Products</h2>
                  <span>
                    Awesome &amp; Creative React JS + JQuery + React Router
                    DOM....
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="section" id="products">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-heading">
                  <h2>Our Latest Products</h2>
                  <span>Check out all of our products.</span>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              {products.map((product, index) => {
                return (
                  <div className="col-lg-4" key={index}>
                    <div className="item">
                      <div className="thumb">
                        <div className="hover-content">
                          <ul>
                            <li>
                              <Link to={`/purchase?id=${product.id}`}>
                                <i className="fa fa-eye" />
                              </Link>
                            </li>
                            <li>
                              <Link to={`/purchase?id=${product.id}`}>
                                <i className="fa fa-star" />
                              </Link>
                            </li>
                            <li>
                              <Link onClick={() => addToCart(product)}>
                                <i className="fa fa-shopping-cart" />
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <img
                          src={product.image}
                          alt=""
                          style={{ width: "100%", height: "400px" }}
                        />
                      </div>
                      <div className="down-content">
                        <h4>{product.title}</h4>
                        <span>${product.price}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </>
    </div>
  );
};

export default Products;
