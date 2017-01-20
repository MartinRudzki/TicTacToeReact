import React, { Component } from 'react';
import './App.css';
import Announcement from './Announcement.js';
import ResetButton from './ResetButton.js';
{/* Inside a component there is something called a life cycle. It is similar if a package
  * was being shipped to you from amazon. First you have shopping, in cart, check out, item being picked ect. Like a life cycle of an order
  * Life Cycle: We have a component but its not on the DOM, now its on the DOM but not rendered, now its render ect.
*/}

class App extends Component {
    constructor(props){
        super(props)
        {/* name is state */}
        this.state = {    
          title_name: "Tic Tac Toe in React",
          PLAYER_ONE_SYMBOL: "X",
          PLAYER_TWO_SYMBOL: "0",
          currentTurn: "X",
          gamewinner: null,
          board: [
          "","","","","","","","",""]
        }
    }  
  handleClick(index) {
    {/* checks to see if symbol is already placed in a spot if true then it cant be changed */}
    if(this.state.board[index] === "" && !this.state.boardpieces) {
      this.state.board[index] = this.state.currentTurn
      {/* we are updating the current turn. If the current turn is X change it to O, otherwise change it to X */}
      this.setState({
        board: this.state.board,
        currentTurn: this.state.currentTurn === this.state.PLAYER_ONE_SYMBOL ? this.state.PLAYER_TWO_SYMBOL : this.state.PLAYER_ONE_SYMBOL,
        gamewinner:  this.state.gamewinner  === this.state.PLAYER_ONE_SYMBOL ? this.state.PLAYER_TWO_SYMBOL : this.state.PLAYER_ONE_SYMBOL,
        boardpieces: this.checkForWinner()
      })
    }
  }
  
  checkForWinner() {
    var currentTurn = this.state.currentTurn
    var symbols = this.state.board
    var winningCombos = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]
    return winningCombos.find(function(combo) {
      if(symbols[combo[0]] !== "" && symbols[combo[1]] !== ""  && symbols[combo[2]] !== ""  && symbols[combo[0]] === symbols[combo[1]] && symbols[combo[1]] === symbols[combo[2]]) {
        return currentTurn
      } else {
        return false
      }
    })
  }
  
  resetBoard(){
    this.setState({
      currentTurn: "X",
      boardpieces: null,
      gamewinner: null,
      board: [
      "","","","","","","","",""]
    })
  }

  
  render() {
    return (
      <div className="app-container">
        <h1>{this.state.title_name}</h1>
        {this.state.boardpieces ? <h1>{`The coordinates are ${this.state.boardpieces} and the winner is ${this.state.gamewinner}`}</h1> : null}
        <div className="board">
        {this.state.board.map((cell, index) => {
          return <div onClick={() => this.handleClick(index)} className="square">{cell}</div>;
        })}
        <ResetButton className="reset_game" reset={this.resetBoard.bind(this)} />
        </div>
      </div>
      
    )
  }
}
export default App;
