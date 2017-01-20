import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
{/* Inside a component there is something called a life cycle. It is similar if a package
  * was being shipped to you from amazon. First you have shopping, in cart, check out, item being picked ect. Like a life cycle of an order
  * Life Cycle: We have a component but its not on the DOM, now its on the DOM but not rendered, now its render ect.
   
*/}

class App extends Component {
    {/* Data Structure
      * This represents the state of the componenet*/}
    constructor(props){
        super(props)
        {/* name is state */}
        {/* arbitrary data */}
        this.state = {               
            message: "Hello, World!" 
        }
    }  
  
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {/* <h2>Welcome to React</h2> // Hard coded */}
          {/* <h2>{this.state.message}</h2> // Using the data structure */}
          {/* Simple example below. Every time we click on Hello World it will add a "!" and update
            * the state data using this.setState. 
            *
            * When you call setState it will recall render and updates the page*/}
          <h2 onClick={() => this.setState({message: this.state.message + '!'})}>{this.state.message}</h2>
          
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}
export default App;
