
export default class Game {

const() {
  this.turn = "X"
  this.gameBoard = new array(9).fill(null)
}

nextTurn() {
  this.turn = this.turn === "X" ? "O" : "X"
}

makeMove(i) {
  if (this.gameBoard[i]) {
    return
  }

  this.gameBoard[i] = this.turn
  this.nextTurn()
  }
}
