import './styles/App.css';

import Header from './components/header';
import Dish, * as D from './components/dish';
import NewDish from './components/newDish';
import { Component } from 'react';
import Button from '@material-ui/core/Button';


class App extends Component{
  dish = "tacos";
  dishes = ["tacos", "ceviche","paella"];
  showDishes = e => {
    e.preventDefault();
    this.props.history.push('/platillos');
  };
  render(){
  return (
    <div className="App">
     <Header/>
     <NewDish />
     <Button variant="contained"
     color="secondary" onClick={this.showDishes}>Elegir</Button>
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
