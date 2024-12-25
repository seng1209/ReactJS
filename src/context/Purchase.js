import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Purchase = () => {
  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

  const query = useQuery();
  const id = query.get("id");

  const { addToCart } = useCart();

  const [product, setProduct] = useState([]);

  const getProductbyId = async () => {
    try {
      const p = await axios.get(`https://fakestoreapi.com/products/${id}`);
      setProduct(p.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getProductbyId();
  }, []);

  // test function
  const handleClick = (product) => {
    console.log(product);
  };

  return (
    <>
      <div className="page-heading" id="top">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="inner-content">
                <h2>Single Product Page</h2>
                <span>
                  Awesome &amp; Creative HTML CSS layout by TemplateMo
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="section" id="product">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="left-images">
                <img
                  src={product.image}
                  alt="product image"
                />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="right-content">
                <h4 style={{ width: "75%", textAlign: "left" }}>
                  {product.title}
                </h4>
                <span className="price">${product.price}</span>
                <ul className="stars">
                  <li>
                    <i className="fa fa-star" />
                  </li>
                  <li>
                    <i className="fa fa-star" />
                  </li>
                  <li>
                    <i className="fa fa-star" />
                  </li>
                  <li>
                    <i className="fa fa-star" />
                  </li>
                  <li>
                    <i className="fa fa-star" />
                  </li>
                </ul>
                <span>{product.description}</span>
                <div className="quote">
                  <i className="fa fa-quote-left" />
                </div>
                <div className="total">
                  <div className="main-border-button">
                    <button
                      onClick={() => addToCart(product)}
                      style={{ padding: "8px" }}
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Purchase;
