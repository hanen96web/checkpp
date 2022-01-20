import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const Enchcou = ({ data }) => {
  const params = useParams();
  const { id } = params;
  const han = data.filter((el) => el.id == id)[0];

  const [user1, setuser1] = useState(0);
  const [user2, setuser2] = useState(0);
  const [user3, setuser3] = useState(0);
  const [name1, setname1] = useState("");
  const [name2, setname2] = useState("");
  const [name3, setname3] = useState("");
  const navigate = useNavigate();

  const navig = ({ id, finalPrice }) => {
    Swal.fire({
      title: "Won !",
      text: "WON with amount" + finalPrice,
      icon: "success",
      timer: 1500,
    });
    setTimeout(() => {
      navigate("/enchtt/" + id + "/" + finalPrice);
    }, 1500);
  };

  const handleFinish = () => {
    console.log(user1 < user3);
    if (+user1 > +user2) {
      if (+user1 > +user3) {
        navig({ id: han.id, finalPrice: user1 });
      } else {
        navig({ id: han.id, finalPrice: user3 });
      }
    } else {
      if (+user2 > +user3) {
        navig({ id: han.id, finalPrice: user2 });
      } else {
        navig({ id: han.id, finalPrice: user3 });
      }
    }
  };
  return (
    <div className="rank">
      <div className="cla">
        <div className="dab">
          <div>
            <h1>user name :{name1}</h1>
            <p>{user1}</p>
          </div>
          <div>
            <h1>user name :{name2}</h1>
            <p>{user2}</p>
          </div>
          <div>
            <h1>user name :{name3}</h1>
            <p>{user3}</p>
          </div>
        </div>
        <div className="play-center">
          <p> user1 name :</p>
          <input
            type="text"
            placeholder="your name"
            onChange={(e) => setname1(e.target.value)}
          />
          <p> user1 price :</p>
          <input
            type="number"
            placeholder="add your price"
            onChange={(e) => setuser1(e.target.value)}
          />
          <p> user2 name :</p>
          <input
            type="text"
            placeholder="your name"
            onChange={(e) => setname2(e.target.value)}
          />
          <p>user 2 price</p>
          <input
            type="number"
            placeholder="add your price"
            onChange={(e) => setuser2(e.target.value)}
          />
          <p> user 3 name :</p>
          <input
            type="text"
            placeholder="your name"
            onChange={(e) => setname3(e.target.value)}
          />
          <p>user 3 price</p>
          <input
            type="number"
            placeholder="add your price"
            onChange={(e) => setuser3(e.target.value)}
          />
        </div>
      </div>

      <Card style={{ width: "100vh" }}>
        <Card.Img variant="top" src={han.img} />
        <Card.Body>
          <Card.Title>
            {" "}
            <h1>{han.name}</h1>{" "}
          </Card.Title>
          <Card.Text className="houda">{han.description}</Card.Text>
          <Button size="lg" variant="success" onClick={handleFinish}>
            Finir
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Enchcou;
