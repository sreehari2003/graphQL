import React from "react";
import "./card.css";
import { useNavigate } from "react-router-dom";

const Card = ({ image, name, id }) => {
  const route = useNavigate();
  return (
    <div className="card-main" onClick={() => route(`/${id}`)}>
      <h3>{name}</h3>
      <img src={image} alt="messi" />
    </div>
  );
};

export default Card;
