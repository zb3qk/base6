'use strict';

class Board {
  constructor(width, htmlOfNums, correctPlaces) {
    if (typeof width !== 'number') {
      throw new Error('Width must be a number');
    }

    if (width < 3 || width > 10) {
      throw new Error('Width cannot be less than 3 or greater than 10');
    }

    // Initialize all the neccesary stuff
    this.htmlForSquares = [];
    this.BEST_POSSIBLE = correctPlaces.length;
    this.correct = 0;
    this.board = [];
    this.guesses = [];

    console.log("correct: " + correctPlaces);

    for (let i = 0; i < width; i++) {
      let board_row = [];
      let guesses_row = [];
      let htmlForSquares_row = [];
      for (let j = 0; j < width; j++) {
        var found = false;
        for(var n = 0; n < correctPlaces.length; n++) {
          if(correctPlaces[n] == i * width + j) {
            found = true;
            board_row.push(1);
            break;
          }
        }
        if(!found) {
          board_row.push(0);
        }
        guesses_row.push(0);
        htmlForSquares_row.push(htmlOfNums[i*width + j]);
      }
      this.board.push(board_row);
      this.guesses.push(guesses_row);
      this.htmlForSquares.push(htmlForSquares_row);
    }
  }

  // Return the board width.
  getDim() {
    return this.board.length;
  }

  // Return the value of a given cell.
  getCell(x, y) {
    return this.guesses[x][y];
  }

  // Assign a cell on the board to a given player.
  move(x, y) {
    this.guesses[x][y] = 1;
    return this.checkCont(x, y);
  }

  // Return the coordinates of all empty cells.
  getEmptyCells() {
    return this.guess.map((row, rowInd) => {
      return row.map((cell, cellInd) => {
        if (cell === 0) {
          return [rowInd, cellInd];
        }
      });
    }).reduce((a, b) => {
      return a.concat(b);
    }).filter((cell) => {
      return typeof cell !== 'undefined';
    });
  }

  // Check if all values in an array are equal.
  static allEqual(arr) {
    return !arr.some((val, i, arr) => {
      return val !== arr[0];
    });
  }

  // Check if the game has been won.
  // Returns player number, 3 in the case of a tie, or false if no winner.
  checkCont(x, y) {
    // Check if this was a proper guess
    if(this.board[x][y] === 1) {
      this.correct += 1;
      console.log("corect: " + this.correct);
      // Check if have found all of the guesses
      if(this.correct === this.BEST_POSSIBLE) {
        return 1;
      }
    } // Return -1 if it was a wrong guess.
    else {
      return -1;
    }
    // Else just keep going as usual
    return 0;
  }
}

export default Board;
