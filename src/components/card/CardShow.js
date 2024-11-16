import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

import "./CardShow.css";

import Men1 from "../images/men-01.jpg";
import Men2 from "../images/men-02.jpg";
import Men3 from "../images/men-03.jpg";

import { FaRegStar } from "react-icons/fa";

function CardShow() {
  return (
    <CardGroup>
      <Card className="container">
        <Card.Img variant="top" src={Men1} style={{ cursor: "pointer" }} />
        <div className="overlay">
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </div>
        <Card.Footer>
          <div>
            <h3>Classis Spring</h3>
            <span>
              <FaRegStar />
              <FaRegStar />
              <FaRegStar />
              <FaRegStar />
              <FaRegStar />
            </span>
          </div>
          <p></p>
        </Card.Footer>
      </Card>
      <Card className="container">
        <Card.Img variant="top" src={Men2} style={{ cursor: "pointer" }} />
        <div className="overlay">
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.
          </Card.Text>
        </div>
        <Card.Footer>
          <div>
            <h3>Air Fource 1x</h3>
            <span>
              <FaRegStar />
              <FaRegStar />
              <FaRegStar />
              <FaRegStar />
              <FaRegStar />
            </span>
          </div>
          <p></p>
        </Card.Footer>
      </Card>
      <Card className="container">
        <Card.Img variant="top" src={Men3} style={{ cursor: "pointer" }} />
        <div className="overlay">
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </div>
        <Card.Footer>
          <div>
            <h3>Love Nana's 20</h3>
            <span>
              <FaRegStar />
              <FaRegStar />
              <FaRegStar />
              <FaRegStar />
              <FaRegStar />
            </span>
          </div>
          <p></p>
        </Card.Footer>
      </Card>
    </CardGroup>
  );
}

export default CardShow;
