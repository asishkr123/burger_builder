import React, { Component } from 'react';
import Layout from './Components/Layout';
import { BurgerBuilder } from './Components/BurgerBuilder';
import  "./App.css";
class App extends Component {
  render() {
    return (
      <div className="App">
       <Layout>
         <BurgerBuilder/>
        </Layout> 
      </div>
    );
  }
}

export default App;







