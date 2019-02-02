import React from 'react'

const Button =(props) => {
  return (
    <button 
    className = {` Button  ${props['btnType']}`}
    onClick = {props.clicked} >
      {props.children}
    </button>
  )
}

export default Button
