import React from 'react'

const BuildControl =(props) =>  {
  return (
    <div className="BuildControl">
      <div className="Label">{props.label}</div>
      <button className="Less"  onClick={() => props.removeItem(props.type)} disabled = {props.disabledInfo[props.type]}>Less</button>
      <button className="More" onClick = {() => {props.onItemUpdate(props.type)}}>More</button>

    </div>
  )
}

export default BuildControl
