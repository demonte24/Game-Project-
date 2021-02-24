'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const gameEvents = require('./game/events')
// const store = require('./auth/events')
$('#change-password').hide()
$('#sign-out').hide()
$('#game-board').hide()
$('#new-game').hide()
$('#playText').hide()
$('#games-played').hide()
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#sign-up').on('submit', gameEvents.onSignUp)
  $('#sign-in').on('submit', gameEvents.onSignIn)
  $('#change-password').on('submit', gameEvents.onChangePassword)
  $('#sign-out').on('click', gameEvents.onSignOut)
  $('#new-game').on('click', gameEvents.onNewGame)
  $('.box').on('click', gameEvents.onGameBoardClick)
  $('#games-played').on('click', gameEvents.onGamesPlayed)
})
