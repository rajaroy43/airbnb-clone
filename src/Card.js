import React from "react";
import "./Card.css";
function Card({ src, title, description ,bg}) {
  return (
    <div className={`card ${bg?bg:""}`}>
      <img src={src} alt="" />
      <div className="card__info">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Card;
