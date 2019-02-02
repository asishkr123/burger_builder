import React from 'react'
import BuildControl from './buildControl';

const controls = [
    {
      label : 'Salad',
      type : 'salad'

    },
    {
      label : 'Bacon',
      type : 'bacon'

    },
    {
      label : 'Meat',
      type : 'meat'

    },
    {
      label : 'Cheese',
      type : 'cheese'

    }

]   






const BuildControls = (props) =>  {
  return (
    <div className="buildControls">
     <p>{props.totalPrice.toFixed(2)}</p>
      {
        controls.map(control =>
           (<BuildControl disabledInfo = {props.disabledInfo}  removeItem = {props.removeItem}
             onItemUpdate = {props.addItem} type={control.type}
             key={control.type} label={control.label}/>))
      }
      <button  onClick = {props.purchaseHandler} disabled = {!props.purchaseable} className = "OrderButton" >ORDER NOW</button>
    </div>
  )
}

export default BuildControls
