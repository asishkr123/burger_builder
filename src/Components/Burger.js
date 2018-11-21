 import React from 'react';
 import BurgerIngridents from './BurgerIngridents'
import { BurgerBuilder } from './BurgerBuilder';
 
 function Burger(props) {  
  const transformedIngridients = 
  Object.keys(props.items)
  .map(item => {return [...Array(props.items[item])].map((_,i) => (<BurgerIngridents key ={item + i} type={item}/>)) })
  .reduce((acc,i) => {return acc.concat(i)},[])
  console.log(transformedIngridients)
                     
   return (
     <div className="Burger">
      <BurgerIngridents type={'bread-top'}/>
      {
          !transformedIngridients.lenght ? <p>Please add your burger items</p> : transformedIngridients
       }
      <BurgerIngridents type={'bread-bottom'}/>
       
     </div>
   )
 }
 
 export default Burger
 