import React, { Component, Fragment } from 'react';
import Button from '@material-ui/core/Button';


export class Flag extends Component {
  render() {
    return (
      <Fragment>
        <h1>Bandera</h1>
        {/* <h1>Bandera2</h1> */}
      </Fragment>
    );
  }
}
export class Ingredient extends Component {
  render() {
    return (
      <Fragment>
        <h4>Ingredientes</h4>
        <h4>Ingredientes2</h4>
        <Button variant="contained" >
        Primary
      </Button>
      </Fragment>
    );

    //return React.createElement('h4',{}, "Ingredientes")
  }
}

class Dish extends Component {
  ingredients = ["Tortilla","Carne","Cebolla"];
  countIngredientes(){
    return this.ingredients.length;
  }
  render() {
    return (
      <div className="dish">
        <h1>{this.props.name} {this.props.qty}</h1>
        <h3>{this.countIngredientes()}</h3>
        <ul>
        {this.ingredients.map(ingredient => (
            <li>{ingredient}</li>
        ))}</ul>
        <Ingredient />
      </div>
    );
  }
}

export default Dish;
