import React, { Component, Fragment } from "react";
import Button from "@material-ui/core/Button";

export class Flag extends Component {
  render() {
    return (
      <div>
        <h1>Bandera</h1>
      </div>
    );
  }
}

export class Ingredient extends Component {
  render() {
    return (
      <Fragment>
        <h4>Ingredientes</h4>
        <h4>Ingredientes</h4>
      </Fragment>
    );
  }
}

class Dish extends Component {
  ingredients = ["Tortilla", "Carne", "Cebolla"];

  countIngredients() {
    return this.ingredients.length;
  }

  render() {
    const {params} = this.props.match;
    return (
      <div className="dish">
        <h1>{params.name}</h1>
        <h1>{this.props.name}</h1>
        <h3>{this.countIngredients()}</h3>
        <ul>
          {this.ingredients.map((ingredient, index )=> (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <Button variant="contained">Elegir</Button>
      </div>
    );
  }
}

export default Dish;
