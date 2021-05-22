import './styles/App.css';

import Header from './components/header';
//import Dish, * as D from './components/dish';
import NewDish from './components/newDish';
import { Component } from 'react';
import Dishes from './components/dishes';
//import Button from '@material-ui/core/Button';
import data from './assets/data/dishes.json';

class App extends Component{
 

  state = {
    dish : "tacos",
    dishes : data
  }
  showDishes = e => {
    e.preventDefault();
    this.props.history.push('/platillos');
  };

  updateDish = (index,updateName ) =>{
    let newState = {...this.state};
    newState.dishes.dishes[index].name = updateName;
    this.setState(newState);

  }
  addDish = (dishName) =>{
    let newState = {...this.state};
    const newDish = {
      id: newState.dishes.dishes.length+1,
      name: dishName,
      country: "Mexico",
      ingredients:["Semillas", "Pollo"]
    }
    newState.dishes.dishes.push(newDish);
    this.setState(newState);
  };
  render(){
  return (
    <div className="App">
     <Header/>
     <NewDish onAddDish={this.addDish}/>
     <Dishes data={this.state.dishes} onUpdateDish={this.updateDish}/>
  {/*    <Button variant="contained"
     color="secondary" onClick={this.showDishes}>Elegir</Button> */}
				{/* 	<Dish name={this.dish} qty="3"/>
          yo como {this.dish}
          <ul>
            {
              this.dishes.map(dish=><li>{dish}</li>)
            }
          </ul>
					<D.Flag/> */}
    </div>

  );
}}

export default App;
