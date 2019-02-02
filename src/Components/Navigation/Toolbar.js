import React from 'react'
import Logo from '../Logo';
import NavigationItems from './NavigationItems';

const Toolbar = () =>  {
  return (
    <header className = "Toolbar">
        <div>Menu</div>
        <Logo/>
        <nav>
            <NavigationItems/>
        </nav>

    </header>
  )
}

export default Toolbar
