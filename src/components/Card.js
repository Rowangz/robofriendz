import React from "react";

const Card = (props) => {
  return (
    <div className="single-card">
      <img src={`https://robohash.org/${props.id}?200x200`} alt="empty"></img>
      <h2>{props.name}</h2>
      <p>{props.email}</p>
      <p>{props.website}</p>
    </div>
  );
};

export default Card;
