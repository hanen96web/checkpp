import React from "react";
import { useParams } from "react-router-dom";

const Encht = ({ data }) => {
  const params = useParams();
  const { id, price } = params;

  const myProduct = data.filter((el) => el.id == id)[0];

  return (
    <div>
      <img src={myProduct.img} />
      <h1>{myProduct.name}</h1>
      <h1>{myProduct.description}</h1>
      <h2>this product has won by {price} Dt</h2>
    </div>
  );
};

export default Encht;
