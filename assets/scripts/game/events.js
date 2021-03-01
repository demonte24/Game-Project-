
const api = require('./api')
const ui = require('./ui')
const store = require('../store')

const getFormFields = require('../../../lib/get-form-fields')

const onSignUp = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signUpFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onNewGame = function (event) {
  event.preventDefault()
  api.newGame()
    .then(ui.newGameSuccess)
    .catch(ui.newGameFailure)
}

const resetGame = function (event) {
  api.newGame()
    .then(ui.newGameSuccess)
    .catch(ui.newGameFailure)
}


const onGamesPlayed = function (events) {
 // const winnerCheck = $(dataCellIndex).length
  api.gamesPlayed()
    .then(ui.gamesPlayedSuccess)
    .catch(ui.gamesPlayedFailure)
}

const onUpdateGame = function (event) {
  const box = event.target
  const boxIndex = $(box).data('cell-index')
  const boxValue = $(box).val()
  const gameData = {
    game: {
      cell: {
        index: boxIndex,
        value: 'x'
      },
      over: false
    }
  }
  api.updateGame(gameData)
    .then(response => (response))
    .catch(ui.updateGameFailure)
}

//Create a function in order to determine if there is a winner

const onWinnerCheck = () => {
    if ((store.game.cells[0] === 'X' && store.game.cells[1] === 'X' && store.game.cells[2] === 'X') ||
        (store.game.cells[0] === 'O' && store.game.cells[1] === 'O' && store.game.cells[2] === 'O') ||
        (store.game.cells[3] === 'X' && store.game.cells[4] === 'X' && store.game.cells[5] === 'X') ||
        (store.game.cells[3] === 'O' && store.game.cells[4] === 'O' && store.game.cells[5] === 'O') ||
        (store.game.cells[6] === 'X' && store.game.cells[7] === 'X' && store.game.cells[8] === 'X') ||
        (store.game.cells[6] === 'O' && store.game.cells[7] === 'O' && store.game.cells[8] === 'O') ||
        (store.game.cells[0] === 'X' && store.game.cells[4] === 'X' && store.game.cells[8] === 'X') ||
        (store.game.cells[0] === 'O' && store.game.cells[4] === 'O' && store.game.cells[8] === 'O') ||
        (store.game.cells[2] === 'X' && store.game.cells[4] === 'X' && store.game.cells[6] === 'X') ||
        (store.game.cells[2] === 'O' && store.game.cells[4] === 'O' && store.game.cells[6] === 'O') ||
        (store.game.cells[0] === 'X' && store.game.cells[3] === 'X' && store.game.cells[6] === 'X') ||
        (store.game.cells[0] === 'O' && store.game.cells[3] === 'O' && store.game.cells[6] === 'O') ||
        (store.game.cells[1] === 'X' && store.game.cells[4] === 'X' && store.game.cells[7] === 'X') ||
        (store.game.cells[1] === 'O' && store.game.cells[4] === 'O' && store.game.cells[7] === 'O') ||
        (store.game.cells[2] === 'X' && store.game.cells[5] === 'X' && store.game.cells[8] === 'X') ||
        (store.game.cells[2] === 'O' && store.game.cells[5] === 'O' && store.game.cells[8] === 'O')){
          return true
    } else {
        return false
    }
  }


const onTieCheck = function () {
  if ((store.game.cells[0] === 'X' || store.game.cells[0] === 'O') &&
      (store.game.cells[1] === 'X' || store.game.cells[1] === 'O') &&
      (store.game.cells[2] === 'X' || store.game.cells[2] === 'O') &&
      (store.game.cells[3] === 'X' || store.game.cells[3] === 'O') &&
      (store.game.cells[4] === 'X' || store.game.cells[4] === 'O') &&
      (store.game.cells[5] === 'X' || store.game.cells[5] === 'O') &&
      (store.game.cells[6] === 'X' || store.game.cells[6] === 'O') &&
      (store.game.cells[7] === 'X' || store.game.cells[7] === 'O') &&
      (store.game.cells[8] === 'X' || store.game.cells[8] === 'O')){
        return true
  } else {
        return false
  }
}

const switchPlayer = function () {
  if(store.currentPlayer === 'X') {
    store.currentPlayer = 'O'
  } else {
    store.currentPlayer = 'X'
  }
}

const onGameBoardClick = function (event) {
  const newGame = store.game
  const selectedDivIndex = $(this).data("cellIndex")
  if ($(this).text() !== 'X' && $(this).text() !== 'O') {
    $(this).text(store.currentPlayer)
    api.playerMove(selectedDivIndex)
    .then(playerMoveSuccess)
    .catch(ui.playerMoveFailure)
    store.game.over = true
  } else {
    ui.playerMoveFailure()
  }
}

const playerMoveSuccess = function (response) {
  store.game = response.game
  if (onWinnerCheck() == true){
    store.game.over = true
    $('#message').html('Player ' + store.currentPlayer + ' has won!')
    setTimeout(resetGame, 2000)
  } else if (onTieCheck() == true) {
    store.game.over = true
    $('#message').text('Looks like a tie game!')
    setTimeout(resetGame, 2000)
  } else {
    $('#message').text('You successfully made a move')
    $('#playerMove').text(store.currentPlayer)
     switchPlayer()
     const gameBoardBoxes = $('.row').children()
  }
}







module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onNewGame,
  onGameBoardClick,
  onGamesPlayed,
  onUpdateGame,
  onWinnerCheck,
  onTieCheck

}
