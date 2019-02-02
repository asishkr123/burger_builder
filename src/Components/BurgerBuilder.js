import React, { Component } from 'react'
import Burger from './Burger';
import BuildControls from './BuildControls';
import Modal from './Modals/Modal';
import OrderSummary from './OrderSummary';
import Backdrop from './Modals/Backdrop';


const INGREDIENT_PRICES = {
  salad : 0.5,
  cheese : 0.4,
  meat : 1.3,
  bacon : 0.7
}



export class BurgerBuilder extends Component {
  state = {
      ingredients : {
          salad : 0,
          bacon : 0,
          cheese : 0,
          meat :   0,
      },
      totalPrice : 4,
      purchaseable : false,
      purchasing : false,
  }

  updatePurchaseState = (ingredients) => {  
      const sum = Object.keys(ingredients).map(ingredient => {return ingredients[ingredient]} ).reduce((sum,index) => {return sum + index},0)
      this.setState({purchaseable : sum > 0})
      
  }
  addIngredient = (type) => {
      const oldCount = this.state.ingredients[type];
      const updatedCount = oldCount + 1;
      const upgradedItems = {
               ...this.state.ingredients
      }
      upgradedItems[type] = updatedCount;
      const priceAddition = INGREDIENT_PRICES[type];
      const oldPrice = this.state.totalPrice;
      const newPrice  = oldPrice + priceAddition;
      this.setState({ingredients : upgradedItems , totalPrice : newPrice}); 
      this.updatePurchaseState(upgradedItems);
    }
    removeIngredients = (type) => {
      const oldCount = this.state.ingredients[type];
      if(oldCount <=0){
        return;
      }
      const updatedCount = oldCount - 1;
      const upgradedItems = {
               ...this.state.ingredients
      }
      upgradedItems[type] = updatedCount;
      const priceReduction = INGREDIENT_PRICES[type];
      const oldPrice = this.state.totalPrice;
      const newPrice  = oldPrice - priceReduction;
      this.setState({ingredients : upgradedItems , totalPrice : newPrice}); 
      this.updatePurchaseState(upgradedItems);

      
       
    }
    purchaseHandler  = () => {
      this.setState({
        purchasing : true
      })
    }
    removePurchase  = () => {
      this.setState({
        purchasing : false
      })
    }
    purchaseContinueHandler = () => {

    }

  render() {
    const disabledInfo = {
        ...this.state.ingredients

    };
    for(let key in disabledInfo){
      disabledInfo[key] = disabledInfo[key] <=0 ? true : false
    }
    return (
      <div className = "Content">
        <Backdrop removePurchase = {this.removePurchase} purchasing = {this.state.purchasing}/>
        <Modal  purchasing = {this.state.purchasing}><OrderSummary price = {this.state.totalPrice} removePurchase = {this.removePurchase} ingredients = {this.state.ingredients}/></Modal>
        <Burger  items= {this.state.ingredients}/>
        <BuildControls
         purchaseHandler = {this.purchaseHandler} purchaseable = {this.state.purchaseable} addItem= {this.addIngredient} disabledInfo = {disabledInfo} removeItem = {this.removeIngredients}
         totalPrice = {this.state.totalPrice}/>
         
      </div>
    )
  }
}

export default BurgerBuilder
