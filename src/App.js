import './styles/App.css';

import Header from './components/header';
import Dish, * as D from './components/dish';
import { Component } from 'react';
import { render } from '@testing-library/react';

class App extends Component{
  dish = "tacos";
  dishes = ["tacos", "ceviche","paella"];
  render(){
  return (
    <div className="App">
     <Header/>
					<Dish name={this.dish} qty="3"/>
          yo como {this.dish}
          <ul>
            {
              this.dishes.map(dish=><li>{dish}</li>)
            }
          </ul>
					<D.Flag/>
    </div>

  );
}}

export default App;
