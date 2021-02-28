
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
    .then(response => console.log(response))
    .catch(ui.updateGameFailure)
}

//Create a function in order to determine if there is a winner

const onWinnerCheck = function () {
    if ((store.cells[0] === 'X' && store.cells[1] === 'X' && store.cells[2] === 'X') || (store.cells[0] === 'O' && store.cells[1] === 'O' && store.cells[2] === 'O') ||
     (store.cells[3] === 'X' && store.cells[4] === 'X' && store.cells[5] === 'X') || (store.cells[3] === 'O' && store.cells[4] === 'O' && store.cells[5] === 'O') ||
     (store.cells[6] === 'X' && store.cells[7] === 'X' && store.cells[8] === 'X') || (store.cells[6] === 'O' && store.cells[7] === 'O' && store.cells[8] === 'O') ||
     (store.cells[0] === 'X' && store.cells[4] === 'X' && store.cells[8] === 'X') || (store.cells[0] === 'O' && store.cells[4] === 'O' && store.cells[8] === 'O') ||
     (store.cells[2] === 'X' && store.cells[4] === 'X' && store.cells[6] === 'X') || (store.cells[2] === 'O' && store.cells[4] === 'O' && store.cells[6] === 'O') ||
     (store.cells[0] === 'X' && store.cells[3] === 'X' && store.cells[6] === 'X') || (store.cells[0] === 'O' && store.cells[3] === 'O' && store.cells[6] === 'O') ||
     (store.cells[1] === 'X' && store.cells[4] === 'X' && store.cells[7] === 'X') || (store.cells[1] === 'O' && store.cells[4] === 'O' && store.cells[7] === 'O') ||
     (store.cells[2] ==='X' && store.cells[5] === 'X' && store.cells[8] === 'X') || (store.cells[2] === 'O' && store.cells[5] === 'O' && store.cells[8] === 'O'))

     {
   ui.isWinner()
   return true
 } else if (checkForDraw()) {
   return true
 }
 return false
    }

const onTieCheck = function () {
  if ((store.cells[0] === 'X' || store.cells[0] === 'O') && (store.cells[1] === 'X' || store.cells[1] === 'O') &&
    (store.cells[2] === 'X' || store.cells[2] === 'O') && (store.cells[3] === 'X' || store.cells[3] === 'O') &&
    (store.cells[4] === 'X' || store.cells[4] === 'O') && (store.cells[5] === 'X' || store.cells[5] === 'O') &&
    (store.cells[6] === 'X' || store.cells[6] === 'O') && (store.cells[7] === 'X' || store.cells[7] === 'O') &&
    (store.cells[8] === 'X' || store.cells[8] === 'O'))

    {
      ui.isDraw()
      return true
    }
    return false
  }


const onGameBoardClick = function (event) {

  const newGame = store.game
  const selectedDivIndex = $(this).data("cellIndex")
  if ($(this).text() !== 'X' && $(this).text() !== 'O') {
    $(this).text(store.currentPlayer)
      api.playerMove(selectedDivIndex)
        .then(ui.playerMoveSuccess)
        .catch(ui.playerMoveFailure)
} else {
    ui.playerMoveFailure()
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
