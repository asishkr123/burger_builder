import React from 'react'

const Backdrop = (props)  => {
  return (
      <>
       {
           props.purchasing ? <div className="Backdrop" onClick={props.removePurchase}></div> : null
       }
      </>
  )
}

export default Backdrop 
