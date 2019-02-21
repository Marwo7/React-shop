import React from "react";
import Product from "../Functional/Product";

const Category = props => {
  console.log(props.products);
  return (
    <section>
      <h2 class="header-small">{props.title}</h2>
      <div class="products">
        {props.products.map(product => (
          <Product
            name={product.name}
            image={product.image}
            price={product.amount}
            key={product.id}
          />
        ))}
      </div>
    </section>
  );
};

export default Category;
