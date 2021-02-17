
const store = require('./../store')

const switchPlayer = function () {

  if(store.currentPlayer === 'X') {
    store.currentPlayer = 'O'
  } else {
    store.currentPlayer = 'X'
    // console.log(currentPlayer)
  }
}

const signUpSuccess = function(response) {

  alert('Thank you for signing up, Your ready to play!')
  $('#sign-up').trigger('reset')
  console.log(response)
}
const signUpFailure = function(response) {
  alert('Sign up failed, try again')
}

const signInSuccess = function(response) {
  store.user = response.user
  alert('Thank you for signing In, LETS PLAY!')
  $('#sign-In').trigger('reset')
  $('#change-password').show()
  $('#sign-out').show()
  $('#game-board').hide()
  $('#new-game').show()
  $('#sign-up').hide()
  $('#sign-in').hide()
}

const signInFailure = function(response) {
  alert('Sign In failed, try again')
}

const changePasswordSuccess = function(response) {

  alert('Your password has been successfully changed!')
  $('#change-password').trigger('reset')
}

const changePasswordFailure = function(response) {
  alert('Change Password failed, try again')
}

const signOutSuccess = function(response) {

  alert('Thank you for playing')
  $('#sign-out').trigger('reset')
  $('#sign-in').show()
  $('#sign-up').show()
  $('#change-password').hide()
  $('#sign-out').hide()
  $('#game-board').hide()
  $('#new-game').hide()
}

const signOutFailure = function(response) {
  alert('Sign Out failed, try again')
}

const newGameSuccess = function (response) {
  alert('New game has started!')
  store.game = response.game
  store.currentPlayer = 'X'
  $('#game-board').show()
}

const newGameFailure = function (response) {
  alert('New game failed TRY AGAIN!')
}

const playerMoveSuccess = function (response) {
  alert('You successfully made a move')
  store.game = response.game
  // $('#playerMove').text('X')
  const gameBoardBoxes = $('.row').children()
  console.log('this is the game board', gameBoardBoxes)
  gameBoardBoxes.each(index => {
    console.log("this is a box", index)
    console.log("this is the corrasonpding game cell", store.game.cells[index])
    $(this).html(`<p>${store.game.cells[index]}</p>`)
  })
  console.log('this is the response to playerMove', response)
  switchPlayer()
}

const playerMoveFailure = function () {
  alert('Your move failed TRY AGAIN!')
}




module.exports = {
  signUpSuccess,
  signInSuccess,
  signUpFailure,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure,
  newGameSuccess,
  newGameFailure,
  playerMoveSuccess,
  playerMoveFailure
}
