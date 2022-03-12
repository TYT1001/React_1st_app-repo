import React from "react";
import Card from "./Card";
import { snacks } from "./snacks";
const CardList = ({ snacks }) => {
  return (
    <div>
      {snacks.map((user, i) => {
        return (
          <Card
            key={i}
            id={snacks[i].id}
            name={snacks[i].name}
            price={snacks[i].price}
            packs={snacks[i].packs}
            image={snacks[i].image}
          />
        );
      })}
    </div>
  );
};
export default CardList;
