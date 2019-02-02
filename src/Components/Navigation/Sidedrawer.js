import React from 'react'
import Logo from '../Logo';
import NavigationItems from '../Navigation/NavigationItems';





export default function Sidedrawer() {
  return (
    <div className = "SideDrawer">
        <Logo/>
        
        <nav>
            <NavigationItems/>
        </nav>
    </div>
  )
}
