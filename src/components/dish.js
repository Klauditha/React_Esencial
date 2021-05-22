import React, { Component, Fragment } from "react";
import { Card, CardContent, List, ListItem,
ListSubheader, ListItemIcon, ListItemText,
TextField, IconButton}  from "@material-ui/core";
import ScatterPlot from '@material-ui/icons/ScatterPlot';
import Edit  from '@material-ui/icons/Edit';

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
  state = {
    edit: false,
    name:this.props.name
  };

  edit = e => {
    this.setState({edit:!this.state.edit})
  };
  handleChange = e => {
    let newState = {...this.state};
    newState.name = e.currentTarget.value;
    this.setState(newState);
    this.props.onUpdateDish(this.props.index, newState.name);
  };
  //ingredients = ["Tortilla", "Carne", "Cebolla"];

/*   countIngredients() {
    return this.ingredients.length;
  }
 */
  render() {
    return (
       <Card className="card">
        <CardContent>
          <List
            component="nav"
            subheader={
              <ListSubheader component="div">
                {this.state.edit?(
                  <TextField label="Platillo..."
                      type="text"
                      margin="normal"
                      variant="outlined"
                      value={this.state.name}
                      onChange={this.handleChange}
                      />
                ):( this.props.name
                )}
                <IconButton size="small" onClick={this.edit}>
                  <Edit/>
                </IconButton>
                </ListSubheader>
            }
          >
            {this.props.ingredients.map((ingredient, index) => (
              <ListItem button key={index}>
                <ListItemIcon>
                  <ScatterPlot />
                </ListItemIcon>
                <ListItemText inset primary={ingredient} />
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>
            );
          }
        }
        
     /*  <div className="dish">
        <h1>{params.name}</h1>
        <h1>{this.props.name}</h1>
        <h3>{this.countIngredients()}</h3>
        <ul>
          {this.ingredients.map((ingredient, index )=> (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <Button variant="contained">Elegir</Button>
      </div> */

export default Dish;
