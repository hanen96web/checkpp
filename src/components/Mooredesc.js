import React from "react";
import { Alert } from "react-bootstrap";
import { useParams } from "react-router";

const Mooredesc = ({ data }) => {
  const params = useParams();
  let myId = params.id;
  let myData = data.find((data) => data.id == myId);
  console.log(params);
  return (
    <div>
      <Alert className="haninn" variant="outline-light">
        {myData.name}
      </Alert>
      <div className="descinfo">
        <img src={myData.img} />
        <div className="desccc">
          <h5>{myData.description}</h5>
          <h5>{myData.descriptionlong}</h5>
        </div>
      </div>
    </div>
  );
};

export default Mooredesc;
