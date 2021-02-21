
const store = require('./../store')

const switchPlayer = function () {

  if(store.currentPlayer === 'X') {
    store.currentPlayer = 'O'
  } else {
    store.currentPlayer = 'X'

  }
}

const signUpSuccess = function(response) {

$('#message').text('Thank you for signing up, Your ready to play!')
  $('#sign-up').trigger('reset')
  // console.log(response)
}
const signUpFailure = function(response) {
  $('#message').text('Sign up failed, try again')
}

const signInSuccess = function(response) {
  store.user = response.user
$('#message').text('Thank you for signing In, LETS PLAY!')
  $('#sign-In').trigger('reset')
  $('#change-password').show()
  $('#sign-out').show()
  $('#game-board').hide()
  $('#new-game').show()
  $('#sign-up').hide()
  $('#sign-in').hide()
}

const signInFailure = function(response) {
  $('#message').text('Sign In failed, try again')
}

const changePasswordSuccess = function(response) {

  $('#message').text('Your password has been successfully changed!')
  $('#change-password').trigger('reset')
}

const changePasswordFailure = function(response) {
  $('#message').text('Change Password failed, try again')
}

const signOutSuccess = function(response) {

$('#message').text('Thank you for playing')
  $('#sign-out').trigger('reset')
  $('#sign-in').show()
  $('#sign-up').show()
  $('#change-password').hide()
  $('#sign-out').hide()
  $('#game-board').hide()
  $('#new-game').hide()
  $('#playText').hide()
}

const signOutFailure = function(response) {
  $('#message').text('Sign Out failed, try again')
}

const newGameSuccess = function (response) {
  $('#message').text('New game has started!')
  store.game = response.game
  store.currentPlayer = 'X'
  $('#game-board').show()
  $('#playText').show()
  $('.box').text('')

}

const newGameFailure = function (response) {
  $('#message').text('New game failed TRY AGAIN!')
}

const playerMoveSuccess = function (response) {
  $('#message').text('You successfully made a move')
  store.game = response.game
  $('#playerMove').text(store.currentPlayer)
   switchPlayer()

  const gameBoardBoxes = $('.row').children()

  gameBoardBoxes.each(index => {
    if ($(store.game.cells[index]).text() !== 'X' && $(store.games.cells[index]).text() !== 'O'){
      console.log(cellsIndex)
      $(this).html(`<p>${store.game.cells[index]}</p>`)
    }else{
      $('#message').text('Your move failed TRY AGAIN!')
    }

  })

}

const playerMoveFailure = function () {
  $('#message').text('Your move failed TRY AGAIN!')
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
