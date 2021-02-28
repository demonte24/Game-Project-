
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
}

const signUpFailure = function(response) {
  $('#message').text('Sign up failed, try again')
}

const signInSuccess = function(response) {
  store.user = response.user
$('#message').text('Thank you for signing In, LETS PLAY!')
  $('#sign-in').trigger('reset')
  $('#change-password').show()
  $('#sign-out').show()
  $('#game-board').hide()
  $('#new-game').show()
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('#games-played').show()
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
    $('#games-played').hide()
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

  }

const playerMoveFailure = function () {
  $('#message').text('Your move failed TRY AGAIN!')
  }


  const gamesPlayedSuccess = function (responseData) {
    $('#games-played').trigger('reset')
    const games = responseData.games
    let gamesHtml = ''
    games.forEach(game => {
      gamesHtml += `
        <p>ID: ${game.owner}<p>
        <p>Cells Used: ${game.cells}<p>
        <p>Game Over: ${game.over}<p>
        <hr>
      `
    })
    $('.gamesPlayed').html(gamesHtml)
  }

const updateGameSuccess = function (response) {
  $(response).html('X')
  store.currentGame = response.game.id
  $('message').text('Your game has updated!')
  }

const updateGameFailure = function (response) {
  $('message').text('Your game did not update try again!')
  }

  const winnerCheck = function () {
  store.over = true
  store.game.over = true
  store.game.cells = store.cells
  console.log(store.game.cells)
  console.log(store.game)
  $('#message').html('Player ' + store.startPlayer + ' has won!')
  // $('.container').css('pointer-events', 'none')
}
const tieCheck = function () {
  store.game.over = true
  $('#message').text('Looks like a tie game!  Click new game to reset.')
  // $('.container').css('pointer-events', 'none')
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
  playerMoveFailure,
  gamesPlayedSuccess,
  updateGameSuccess,
  updateGameFailure,
  winnerCheck,
  tieCheck
  }
