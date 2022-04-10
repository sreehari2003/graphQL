import React from "react";
import "./card.css";

const Card = ({ image, name }) => {
  return (
    <div className="card-main">
      <h3>{name}</h3>
      <img src={image} alt="messi" />
    </div>
  );
};

export default Card;
