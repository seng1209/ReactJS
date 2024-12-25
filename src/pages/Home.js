import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Woman from "../components/Woman";
import Man from "../components/Man";
import Jewelery from "../components/Jewelery";
import Electronic from "../components/Electronic";
import axios from "axios";

import Header from "../components/Header";

const Home = () => {
  const apiUrl = "https://fakestoreapi.com/products";
  const [image1, setImage1] = useState();
  const [image2, setImage2] = useState();
  const [image3, setImage3] = useState();
  const [image4, setImage4] = useState();
  const [image5, setImage5] = useState();
  const [image6, setImage6] = useState();

  const getImage1 = async () => {
    try {
      const r = await axios.get(apiUrl + "/1");
      setImage1(r.data.image);
    } catch (err) {
      console.log(err);
    }
  };

  const getImage2 = async () => {
    try {
      const r = await axios.get(apiUrl + "/3");
      setImage2(r.data.image);
    } catch (err) {
      console.log(err);
    }
  };

  const getImage3 = async () => {
    try {
      const r = await axios.get(apiUrl + "/5");
      setImage3(r.data.image);
    } catch (err) {
      console.log(err);
    }
  };

  const getImage4 = async () => {
    try {
      const r = await axios.get(apiUrl + "/17");
      setImage4(r.data.image);
    } catch (err) {
      console.log(err);
    }
  };

  const getImage5 = async () => {
    try {
      const r = await axios.get(apiUrl + "/14");
      setImage5(r.data.image);
    } catch (err) {
      console.log(err);
    }
  };

  const getImage6 = async () => {
    try {
      const r = await axios.get(apiUrl + "/10");
      setImage6(r.data.image);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getImage1();
    getImage2();
    getImage3();
    getImage4();
    getImage5();
    getImage6();
  }, []);

  return (
    <div>
      <Header />

      <div className="main-banner" id="top">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6">
              <div className="left-content">
                <div className="thumb">
                  <div className="inner-content">
                    <h4>We Are Hexashop</h4>
                    <span>Awesome, clean &amp; creative HTML5 Template</span>
                    <div className="main-border-button">
                      <Link
                        to="/products"
                        onClick={() => {
                          setTimeout(() => {
                            window.location.reload();
                          }, 500);
                        }}
                      >
                        Purchase Now!
                      </Link>
                    </div>
                  </div>
                  <img
                    src={image1}
                    alt={image1}
                    style={{ width: "730px", height: "630px" }}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="right-content">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="right-first-image">
                      <div className="thumb">
                        <div className="inner-content">
                          <h4>Women</h4>
                          <span>Best Clothes For Women</span>
                        </div>
                        <div className="hover-content">
                          <div className="inner">
                            <h4>Women</h4>
                            <p>
                              Lorem ipsum dolor sit amet, conservisii ctetur
                              adipiscing elit incid.
                            </p>
                            <div className="main-border-button">
                              <Link to="#women">Discover More</Link>
                            </div>
                          </div>
                        </div>
                        <img
                          src={image4}
                          alt={image4}
                          style={{ width: "350px", height: "300px" }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="right-first-image">
                      <div className="thumb">
                        <div className="inner-content">
                          <h4>Men</h4>
                          <span>Best Clothes For Men</span>
                        </div>
                        <div className="hover-content">
                          <div className="inner">
                            <h4>Men</h4>
                            <p>
                              Lorem ipsum dolor sit amet, conservisii ctetur
                              adipiscing elit incid.
                            </p>
                            <div className="main-border-button">
                              <Link to="#men">Discover More</Link>
                            </div>
                          </div>
                        </div>
                        <img
                          src={image2}
                          style={{ width: "350px", height: "300px" }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="right-first-image">
                      <div className="thumb">
                        <div className="inner-content">
                          <h4>Jewelery</h4>
                          <span>Jewelery</span>
                        </div>
                        <div className="hover-content">
                          <div className="inner">
                            <h4>Jewelery</h4>
                            <p>
                              Lorem ipsum dolor sit amet, conservisii ctetur
                              adipiscing elit incid.
                            </p>
                            <div className="main-border-button">
                              <Link to="#jewelery">Discover More</Link>
                            </div>
                          </div>
                        </div>
                        <img
                          src={image3}
                          style={{ width: "350px", height: "300px" }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="right-first-image">
                      <div className="thumb">
                        <div className="inner-content">
                          <h4>Electronic</h4>
                          <span>Electronic</span>
                        </div>
                        <div className="hover-content">
                          <div className="inner">
                            <h4>Electronic</h4>
                            <p>
                              Lorem ipsum dolor sit amet, conservisii ctetur
                              adipiscing elit incid.
                            </p>
                            <div className="main-border-button">
                              <Link href="#electronics">Discover More</Link>
                            </div>
                          </div>
                        </div>
                        <img
                          src={image5}
                          style={{ width: "350px", height: "300px" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Man />

      <Woman />

      <Jewelery />

      <Electronic />

      <section className="section" id="explore">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="left-content">
                <h2>Explore Our Products</h2>
                <span>
                  You are allowed to use this HexaShop HTML CSS template. You
                  can feel free to modify or edit this layout. You can convert
                  this template as any kind of ecommerce CMS theme as you wish.
                </span>
                <div className="quote">
                  <i className="fa fa-quote-left"></i>
                  <p>
                    You are not allowed to redistribute this template ZIP file
                    on any other website.
                  </p>
                </div>
                <p>
                  There are 5 pages included in this HexaShop Template and we
                  are providing it to you for absolutely free of charge at our
                  TemplateMo website. There are web development costs for us.
                </p>
                <p>
                  If this template is beneficial for your website or business,
                  please kindly{" "}
                  <a
                    rel="nofollow"
                    href="https://paypal.me/templatemo"
                    target="_blank"
                  >
                    support us
                  </a>{" "}
                  a little via PayPal. Please also tell your friends about our
                  great website. Thank you.
                </p>
                <div className="main-border-button">
                  <Link to="/products">Discover More</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="right-content">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="leather">
                      <h4>Leather Bags</h4>
                      <span>Latest Collection</span>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="first-image">
                      <img
                        src={image1}
                        alt=""
                        style={{ width: "255px", height: "255px" }}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="second-image">
                      <img
                        src={image2}
                        alt=""
                        style={{ width: "255px", height: "255px" }}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="types">
                      <h4>Different Types</h4>
                      <span>Over 304 Products</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="social">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-heading">
                <h2>Social Media</h2>
                <span>
                  Details to details is what makes Hexashop different from the
                  other themes.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row images">
            <div className="col-2">
              <div className="thumb">
                <div className="icon">
                  <a href="http://instagram.com">
                    <h6>Fashion</h6>
                    <i className="fa fa-instagram"></i>
                  </a>
                </div>
                <img
                  src={image1}
                  alt=""
                  style={{ width: "185px", height: "185px" }}
                />
              </div>
            </div>
            <div className="col-2">
              <div className="thumb">
                <div className="icon">
                  <a href="http://instagram.com">
                    <h6>New</h6>
                    <i className="fa fa-instagram"></i>
                  </a>
                </div>
                <img
                  src={image2}
                  alt=""
                  style={{ width: "185px", height: "185px" }}
                />
              </div>
            </div>
            <div className="col-2">
              <div className="thumb">
                <div className="icon">
                  <a href="http://instagram.com">
                    <h6>Brand</h6>
                    <i className="fa fa-instagram"></i>
                  </a>
                </div>
                <img
                  src={image3}
                  alt=""
                  style={{ width: "185px", height: "185px" }}
                />
              </div>
            </div>
            <div className="col-2">
              <div className="thumb">
                <div className="icon">
                  <a href="http://instagram.com">
                    <h6>Makeup</h6>
                    <i className="fa fa-instagram"></i>
                  </a>
                </div>
                <img
                  src={image4}
                  alt=""
                  style={{ width: "185px", height: "185px" }}
                />
              </div>
            </div>
            <div className="col-2">
              <div className="thumb">
                <div className="icon">
                  <a href="http://instagram.com">
                    <h6>Leather</h6>
                    <i className="fa fa-instagram"></i>
                  </a>
                </div>
                <img
                  src={image5}
                  alt=""
                  style={{ width: "185px", height: "185px" }}
                />
              </div>
            </div>
            <div className="col-2">
              <div className="thumb">
                <div className="icon">
                  <a href="http://instagram.com">
                    <h6>Bag</h6>
                    <i className="fa fa-instagram"></i>
                  </a>
                </div>
                <img
                  src={image6}
                  alt=""
                  style={{ width: "185px", height: "185px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="subscribe">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="section-heading">
                <h2>By Subscribing To Our Newsletter You Can Get 30% Off</h2>
                <span>
                  Details to details is what makes Hexashop different from the
                  other themes.
                </span>
              </div>
              <form id="subscribe" action="" method="get">
                <div className="row">
                  <div className="col-lg-5">
                    <fieldset>
                      <input
                        name="name"
                        type="text"
                        id="name"
                        placeholder="Your Name"
                        required=""
                      />
                    </fieldset>
                  </div>
                  <div className="col-lg-5">
                    <fieldset>
                      <input
                        name="email"
                        type="text"
                        id="email"
                        pattern="[^ @]*@[^ @]*"
                        placeholder="Your Email Address"
                        required=""
                      />
                    </fieldset>
                  </div>
                  <div className="col-lg-2">
                    <fieldset>
                      <button
                        type="submit"
                        id="form-submit"
                        className="main-dark-button"
                      >
                        <i className="fa fa-paper-plane"></i>
                      </button>
                    </fieldset>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-lg-4">
              <div className="row">
                <div className="col-6">
                  <ul>
                    <li>
                      Store Location:
                      <br />
                      <span>Sunny Isles Beach, FL 33160, United States</span>
                    </li>
                    <li>
                      Phone:
                      <br />
                      <span>010-020-0340</span>
                    </li>
                    <li>
                      Office Location:
                      <br />
                      <span>North Miami Beach</span>
                    </li>
                  </ul>
                </div>
                <div className="col-6">
                  <ul>
                    <li>
                      Work Hours:
                      <br />
                      <span>07:30 AM - 9:30 PM Daily</span>
                    </li>
                    <li>
                      Email:
                      <br />
                      <span>info@company.com</span>
                    </li>
                    <li>
                      Social Media:
                      <br />
                      <span>
                        <a href="#">Facebook</a>, <a href="#">Instagram</a>,{" "}
                        <a href="#">Behance</a>, <a href="#">Linkedin</a>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- ***** Subscribe Area Ends ***** --> */}
    </div>
  );
};

export default Home;
