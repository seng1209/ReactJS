import React from "react";
import "./Home.css";
import { Container, Row, Col, Stack } from "react-bootstrap";
import { Image, Button, Carousel } from "antd";

import ImgBanner from "../images/left-banner-image.jpg";
import ImgBanner1 from "../images/baner-right-image-01.jpg";
import ImgBanner2 from "../images/baner-right-image-02.jpg";
import ImgBanner3 from "../images/baner-right-image-03.jpg";
import ImgBanner4 from "../images/baner-right-image-04.jpg";

import CardShow from "../card/CardShow";

const contentStyle: React.CSSProperties = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const Home = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col className="container">
            <Image
              width={600}
              src={ImgBanner}
              preview={false}
              alt="Example Image"
              style={{ cursor: "pointer" }}
            />
            <div className="center">
              <h1>Clothing Shop</h1>
              <p>Collection Shop</p>
              <Button>Purchase Now!</Button>
            </div>
          </Col>
          <Col>
            <Row gutter={[16, 24]}>
              <Col span={12}>
                <div
                  style={{
                    position: "relative",
                    display: "inline-block",
                  }}
                >
                  <Image
                    width={300}
                    src={ImgBanner1}
                    preview={false}
                    alt="Example Image"
                    style={{ cursor: "pointer" }}
                  />
                  <div className="overlay">
                    <h2>WOMAN</h2>
                    <p>
                      Lorem ipsum dolor sit amet, conservisii ctetur adipiscing
                      elit incid.
                    </p>
                    <Button>Discover More</Button>
                  </div>
                </div>
              </Col>
              <Col span={12}>
                <div
                  style={{
                    position: "relative",
                    display: "inline-block",
                  }}
                >
                  <Image
                    width={300}
                    src={ImgBanner2}
                    preview={false}
                    alt="Example Image"
                    style={{ cursor: "pointer" }}
                  />
                  <div className="overlay">
                    <h2>MAN</h2>
                    <p>
                      Lorem ipsum dolor sit amet, conservisii ctetur adipiscing
                      elit incid.
                    </p>
                    <Button>Discover More</Button>
                  </div>
                </div>
              </Col>

              <Col span={12}>
                <div
                  style={{
                    position: "relative",
                    display: "inline-block",
                  }}
                >
                  <Image
                    width={300}
                    src={ImgBanner3}
                    preview={false}
                    alt="Example Image"
                    style={{ cursor: "pointer" }}
                  />
                  <div className="overlay">
                    <h2>KID</h2>
                    <p>
                      Lorem ipsum dolor sit amet, conservisii ctetur adipiscing
                      elit incid.
                    </p>
                    <Button>Discover More</Button>
                  </div>
                </div>
              </Col>
              <Col span={12}>
                <div
                  style={{
                    position: "relative",
                    display: "inline-block",
                  }}
                >
                  <Image
                    width={300}
                    src={ImgBanner4}
                    preview={false}
                    alt="Example Image"
                    style={{ cursor: "pointer" }}
                  />
                  <div className="overlay">
                    <h2>ACCESSORIES</h2>
                    <p>
                      Lorem ipsum dolor sit amet, conservisii ctetur adipiscing
                      elit incid.
                    </p>
                    <Button>Discover More</Button>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <Container className="men">
        <Row>
          <Col style={{ padding: "24px" }}>
            <h1 style={{ fontWeight: "bold" }}>Men's Latest</h1>
            <p style={{ fontStyle: "italic" }}>
              Details to details is what makes Hexashop different from the other
              themes.
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <CardShow />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
