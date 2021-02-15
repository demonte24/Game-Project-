
export default class Game {

const() {
  this.turn = "X"
  this.bored = new array(9).fill(null)
}

nextTurn() {
  this.turn = this.turn === "X" ? "O" : "X"
}

makeMove(i) {
  if (this.bored[i]) {
    return
  }

  this.bored[i] = this.turn
  this.nextTurn()
  }
}
