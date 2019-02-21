import React from "react";
import Container from "../Functional/Container";
import Category from "./Category";
import ProductsFunctions from "../Functional/ProductsFunctions";

const desktops = ProductsFunctions.featuredDesktops();
const tablets = ProductsFunctions.featuredTablets();
const Homepage = () => {
  return (
    <Container>
      <h1 class="header-big">Welcome to our store</h1>

      <Category title={"Desktops"} products={desktops} />

      <Category title={"Tablets"} products={tablets} />
    </Container>
  );
};
export default Homepage;
