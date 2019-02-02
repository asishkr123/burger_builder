import React from 'react'

const  Modal =(props) =>  { 
  return (
    <div className = "Modal" style = {{
        opacity : props.purchasing ? '1' : '0',
        transform : props.purchasing ? 'translateY(0)' : 'translateY(-100vh)',
        }}
        
        
        >
      {props.children}
    </div>
  )
 }


 export default Modal