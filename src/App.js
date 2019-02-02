import React, { Component } from 'react';
import Layout from './Components/Layout';
import { BurgerBuilder } from './Components/BurgerBuilder';
import  "./App.css";
import Toolbar from './Components/Navigation/Toolbar';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Layout>
        <Toolbar/>
         <BurgerBuilder/>
        </Layout> 
      </div>
    );
  }
}

export default App;







