import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
  if (true) {
    throw new Error(`NOOOOOOO!`);
  }
  return (
    <div className="Cardlist">
      {robots.map((card) => (
        <Card
          name={card.name}
          email={card.email}
          id={card.id}
          key={card.id}
          website={card.website}
        />
      ))}
    </div>
  );
};

export default CardList;
