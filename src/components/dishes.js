import React, { Component } from 'react';
import Dish from './dish';
import {Button,
    List,
    ListItem,
    ListSubheader,
    ListItemText,
    ListItemIcon,
GridList }
from '@material-ui/core/';
import Restaurant from '@material-ui/icons/Restaurant';

//import data from '../assets/data/dishes.json';
class Dishes extends Component {
    goBack = e => {
        e.preventDefault();
        this.props.history.push('/');
      };

      updateDish = (index, updateName) => {
          this.props.onUpdateDish(index, updateName);
      }
    render() {
        return (
            <div>
  {/*               <h1>Platillos</h1>
                <Button variant="contained"
     color="secondary" onClick={this.goBack}>Regresar</Button> */}
   {/*   {data.dishes.map(dish =>(
         <div>
             <div>{dish.name}</div>
             <div>{dish.ingredients}</div>
         </div>
     ))}
            </div> */}

           {/*  <List component="nav"
            subheader={<ListSubheader
                component="div">Platillos</ListSubheader>
            }>
                {data.dishes.map((dish,index) =>(
                    <ListItem button key={index}>
                        <ListItemIcon>
                            <Restaurant/>
                        </ListItemIcon>
                        <ListItemText inset primary={dish.name}/>
                    </ListItem>
                ))}
            </List> */}
            <GridList>
            {
                this.props.data.dishes.map((dish,index)=>(
                    <Dish key={index} name={dish.name} ingredients={dish.ingredients}
                    index={index} onUpdateDish={this.updateDish}>

                    </Dish>
                ))
            }
            </GridList>
            </div>
       )
    }
}

export default Dishes;