import React from 'react';
import Sidedrawer from './Navigation/Sidedrawer';


 const Layout = (props) => (
    <>
    <Sidedrawer/>
    {props.children}
    </>
)


export default Layout