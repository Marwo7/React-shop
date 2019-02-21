import React from "react";

const Product = props => {
  return (
    <div class="product">
      <img src={props.image} alt={props.name} />
      <p class="price">${props.price}</p>
      <h3>{props.name}</h3>
    </div>
  );
};
export default Product;
