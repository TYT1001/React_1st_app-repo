import React from "react";
import "tachyons";

const Card = ({ name, price, id, packs, image }) => {
  return (
    <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 ">
      <img alt="snacks" src={image} />
      <div>
        <h2>{name}</h2>
        <p>{price}</p>
      </div>
    </div>
  );
};
export default Card;
