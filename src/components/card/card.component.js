import React from "react";
import "./card.styles.css";

const Card = (props) => {
  return (
    <div className="card-container">
    <h2>{props.monster.name}</h2>
      <img
        alt="monster"
        src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}
      />
     
      <p>email: {props.monster.email}</p>
      <p>city: {props.monster.address.city}</p>
    </div>
  );
};

export default Card;
