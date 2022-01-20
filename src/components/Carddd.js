import React from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router";

const Carddd = ({ han }) => {
  const navigate = useNavigate();
  return (
    <div style={{ width: "18rem", backgroundColor: "transparent" }}>
      <Card className="decodeco">
        <Card.Img
          className="cardd"
          height="200px"
          variant="top"
          src={han.img}
        />
        <Card.Body className="gtgt">
          <Card.Title className="hanin">{han.name}</Card.Title>
          <Card.Text className="hanenf">
            {han.description.substring(0, 90) + "..."}
          </Card.Text>
          <Card.Text className="bbttnn">{han.price + "dt"}</Card.Text>
          <Button
            className="btndesign"
            variant="primary"
            onClick={() => navigate(`/mooredesc/${han.id}`)}
          >
            Show
          </Button>
          <Button
            className="btndesign"
            variant="primary"
            onClick={() => navigate(`/Enchcou/${han.id}`)}
          >
            Enchere
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};
export default Carddd;
