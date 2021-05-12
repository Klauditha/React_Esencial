import React, { Component, Fragment } from 'react';

export class Flag extends Component{
    render(){
        return(
            <Fragment>
                <h1>Bandera</h1>
                {/* <h1>Bandera2</h1> */}
            </Fragment>
        )
    }
}
export class Ingredient extends Component{
    render(){
        return React.createElement('h4',{}, "Ingredientes")
    }
}

class Dish extends Component{
    render(){
        return(
            <div>
                <h1>Platillos</h1>
                <Ingredient/>
            </div>
        )
    }
}

export default Dish;