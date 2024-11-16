import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import { GiJeweledChalice } from "react-icons/gi";
import { FcElectronics } from "react-icons/fc";
import { ImWoman } from "react-icons/im";
import { IoMan } from "react-icons/io5";
import { Link } from "react-router-dom";

const Category = () => {
  return (
    <Row xs={1} md={2} lg={4} className="g-4">
      <Col>
        <Card style={{ textAlign: "center" }}>
          <ImWoman style={{ width: "100%", height: "400px" }} />
          <Card.Body>
            <Link to="/woman">Woman</Link>
            {/* <Card.Text>
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text> */}
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card style={{ textAlign: "center" }}>
          <IoMan style={{ width: "100%", height: "400px" }} />
          <Card.Body>
            <Link to="/man">Man</Link>
            {/* <Card.Text>
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text> */}
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card style={{ textAlign: "center" }}>
          <GiJeweledChalice style={{ width: "100%", height: "400px" }} />
          <Card.Body>
            <Link to="/jewelry">jewelery</Link>
            {/* <Card.Text>
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text> */}
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card style={{ textAlign: "center" }}>
          <FcElectronics style={{ width: "100%", height: "400px" }} />
          <Card.Body>
            <Link to="/electronic">Electronic</Link>
            {/* <Card.Text>
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text> */}
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default Category;
