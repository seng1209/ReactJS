import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

import { useEffect, useState } from "react";
import axios from "axios";
import { FaRegStar } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";

function Man() {
  const [items, setItems] = useState([]);
  const [rating, setRating] = useState(null);
  const [rateColor, setColor] = useState(null);
  const getItems = async () => {
    try {
      const response = await axios.get(
        "https://fakestoreapi.com/products/category/men's clothing"
      );
      console.log(response.data);
      setItems(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getItems();
  }, []);
  console.log(items);
  return (
    <Row xs={1} md={2} lg={4} className="g-4">
      {items.map((item, index) => {
        return (
          <Col key={index}>
            <Card>
              <Card.Img
                variant="top"
                src={item.image}
                style={{ width: "100%", height: "400px" }}
              />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>
                  <h3>${item.price}</h3>
                  <Button variant="success">
                    Purchase <IoCartOutline />
                  </Button>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        );
      })}
    </Row>
  );
}

export default Man;
