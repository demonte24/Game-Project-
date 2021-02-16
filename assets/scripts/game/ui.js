
const store = require('./../store')

const signUpSuccess = function(response) {

  alert('Thank you for signing up')
  $('#sign-up').trigger('reset')
  console.log(response)
}
const signUpFailure = function(response) {
  $('#error-message').text('Sign up failed, try again')
}

const signInSuccess = function(response) {
  store.user = response.user
  alert('Thank you for signing In, lets play')
  $('#sign-In').trigger('reset')
  $('#change-password').show()
  $('#sign-out').show()
  $('#game-board').show()
  $('#new-game').show()
  $('#sign-up').hide()
  $('#sign-in').hide()
}

const signInFailure = function(response) {
  $('#error-message').text('Sign In failed, try again')
}

const changePasswordSuccess = function(response) {

  alert('Thank you for chnaging password')
  $('#change-password').trigger('reset')
}

const changePasswordFailure = function(response) {
  $('#error-message').text('Change Password failed, try again')
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
  $('#error-message').text('Sign Out failed, try again')
}


module.exports = {
  signUpSuccess,
  signInSuccess,
  signUpFailure,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
