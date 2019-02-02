import React from 'react'
import Button from './Button/Button';

const OrderSummary = (props) =>  {
  const ingredientSummary = 
  Object.keys(props.ingredients)
  .map(igkey => {return (<li key={igkey}><span style = {{textTransform : 'capitalize'}}>{igkey}</span> : {props.ingredients[igkey]}</li>)})
  
  return (
    <>
     <h3>Your Order</h3>
     <p>A Delicious Burger with the following ingredients</p>
     <ul>
       {ingredientSummary} 
    </ul>
    <p><strong> price : {props.price.toFixed(2)}</strong></p>
    <p>continue to checkout</p>
    <Button clicked={props.removePurchase} btnType = 'Danger'>Cancel</Button>
    <Button btnType = "Success">CONTINUE</Button>

    </>
  )
}

export default OrderSummary
