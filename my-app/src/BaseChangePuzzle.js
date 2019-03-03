import React from 'react';
import Board from './board';
import {genrandom, createAnswer} from './generate.js';

class BaseChangePuzzle extends React.Component {

  'use strict';

  constructor(props) {
    super(props);
    // Getting random numbers
    var randomResults = genrandom();
    var htmlOfNums = randomResults[0];
    var correctPlaces = randomResults[1];
    this.title = randomResults[2];

    // Setting up the game
    this.score = 0;
    this.board = new Board(props.width, htmlOfNums, correctPlaces);
    this.state = {player: 1, freezeBoard: false, cont: 0, attempts: 0};
  }

  nextPlayer() {
    return this.state.player === 1 ? 2 : 1;
  }

  // Place a move on the board and check for a winner.
  move(x, y) {
    let end = this.board.move(x, y);
    this.setState({attempts: this.state.attempts+1})
    if (end == 1 || end == -1) {
      this.setState({cont: end, freezeBoard: true});
    }
  }

  // Handle a player's move, and switch to the next player.
  playerMove(event) {
    const [ x, y ] = event.target.dataset.cell.split('_');
    const cellEmpty = this.board.getCell(x, y) === 0;

    console.log("Player tried to move\n" + "cellEmpty: " + cellEmpty);

    if (cellEmpty) {
      this.move(x, y);
    }
  }

  reset() {
    // Getting results fromm genrandom
    var randomResults = genrandom();
    var htmlOfNums = randomResults[0];
    var corrects = randomResults[1];
    this.title = randomResults[2];

    // Setting up the new board
    this.board = new Board(this.props.width, htmlOfNums, corrects);
    this.setState({player: 1, freezeBoard: false, cont: 0});
  }

  render() {
    const guesses = this.board.guesses ;
    const board = this.board.board;
    let announcement;

    if (this.state.cont === 1 || this.state.cont === -1) {
      const msg = this.state.cont == 1 ? 'You got\'em all!' : 'That was wrong :(';
      const final_msg = this.state.cont == 1? '' : 'Your final score is: ' + this.score;
      this.score = this.state.cont === 1 ? this.score + 1 : 0;
      announcement = (
        <div className="announcement">
          <p>{ msg }</p>
          <p>{ final_msg }</p>
          <button onClick={ this.reset.bind(this) }>Reset</button>
        </div>
      );
    }

    console.log(guesses);

    const grid = guesses.map((row, rowInd) => {
        console.log("row: " + row + " rowInd: " + rowInd);
        const cells = row.map((cell, cellInd) => {
          //console.log("cell: " + guesses[rowInd][cellInd])
          const classString = guesses[rowInd][cellInd] === 1 ? board[rowInd][cellInd] === 1 ? 'cell-p1' : 'cell-p2' : 'cell';
          const coords = `${rowInd}_${cellInd}`;
          let clickHandler;

          if (!this.state.freezeBoard) { clickHandler = this.playerMove.bind(this); }

          return <div className={ classString } key={ cellInd } onClick={ clickHandler } data-cell={ coords } dangerouslySetInnerHTML={this.board.htmlForSquares[rowInd][cellInd]}></div>;
        });

        return <div className="row" key={ rowInd }>{ cells }</div>;
      });

      console.log(grid[0][0]);


    return (
      <div>
        <div class="title"> Which are equivalent to ... </div>
        <div class="question" dangerouslySetInnerHTML={createAnswer(this.title)}></div>
        <div className="grid">
          { grid }
          { announcement }
        </div>
      </div>
    );

  }
}

export default BaseChangePuzzle;
