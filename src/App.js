import React, { Component } from "react";
import Header from "./components/Functional/Header";
import Footer from "./components/Functional/Footer";
import "./App.css";
import Homepage from "./components/Homepage/Homepage";
import Catalog from "./components/Catalog/Catalog";
import About from "./components/About/About";
import { Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Route exact path="/" component={Homepage} />
        <Route path="/catalog" component={Catalog} />
        <Route path="/about" component={About} />
        <Footer />
      </div>
    );
  }
}

export default App;
