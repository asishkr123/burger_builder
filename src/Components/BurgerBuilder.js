import React, { Component } from 'react'
import Burger from './Burger';

export class BurgerBuilder extends Component {
  state = {
      ingridients : {
          salad : 0,
          bacon : 0,
          cheese : 0,
          meat :   0,
      },
  }
  render() {
    return (
      <div>
        <h1>burger builder</h1>
        <Burger items= {this.state.ingridients}/>
      </div>
    )
  }
}

export default BurgerBuilder
