import React from "react";
import Container from "../Functional/Container";
import Search from "./Search";
import ProductsFunctions from "../Functional/ProductsFunctions";
import Product from "../Functional/Product";

const allProducts = ProductsFunctions.allProducts();
class Catalog extends React.Component {
  constructor() {
    super();
    this.state = { allProducts };
  }
  refreshList = (producent, name) => {
    let filteredProducts = allProducts;

    if (producent !== "All") {
      filteredProducts = ProductsFunctions.filterByProducent(producent);
    }

    if (name) {
      filteredProducts = ProductsFunctions.filterByName(name, filteredProducts);
    }
    this.setState({ allProducts: filteredProducts });
  };
  render() {
    return (
      <Container>
        <h1 class="header-big">Catalog</h1>

        <div class="catalog">
          <Search onChange={this.refreshList} />

          <div class="column-right">
            <div class="products">
              {this.state.allProducts.map(product => (
                <Product
                  name={product.name}
                  price={product.amount}
                  image={product.image}
                  key={product.id}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    );
  }
}
export default Catalog;
