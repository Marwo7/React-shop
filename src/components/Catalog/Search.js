import React from "react";
import ProductsFunctions from "../Functional/ProductsFunctions";

const allProducents = ["All", ...ProductsFunctions.getProducents()];
const originalState = { producent: "All", text: "" };

class Search extends React.Component {
  constructor() {
    super();
    this.state = originalState;
  }
  updateText = event => {
    this.setState({ text: event.target.value });
    this.props.onChange(this.state.producent, event.target.value);
  };
  updateProducent = event => {
    this.setState({ producent: event.target.value });
    this.props.onChange(event.target.value, this.state.text);
  };
  clearButton = () => {
    this.setState(originalState);
    this.props.onChange(originalState.producent, originalState.text);
  };
  render() {
    return (
      <div class="column-left">
        <div class="filter">
          <div class="filter-header">
            <h4>Search</h4>
            <button class="clear" onClick={this.clearButton}>
              Clear
            </button>
          </div>
          <div>
            <input
              onChange={this.updateText}
              type="text"
              placeholder="search..."
              value={this.state.text}
            />
          </div>
          <h4>Manufacturer</h4>
          <div>
            {allProducents.map((option, index) => {
              return (
                <div key={index}>
                  <input
                    type="radio"
                    name="manufacturere"
                    id={option}
                    value={option}
                    onChange={this.updateProducent}
                    checked={this.state.producent === option}
                  />
                  <label>{option}</label>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
