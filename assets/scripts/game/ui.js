
const store = require('./../store')

const signUpSuccess = function(response) {

  alert('Thank you for signing up')
  $('#sign-up').trigger('reset')
}
const signUpFailure = function(response) {
  $('#error-message').text('Sign up failed, try again')
}

const signInSuccess = function(response) {
  store.user = response.user
  alert('Thank you for signing In, lets play')
  $('#sign-In').trigger('reset')
}

const signInFailure = function(response) {
  $('#error-message').text('Sign In failed, try again')
}

const changePasswordSuccess = function(response) {

  $('#error-message').text('Thank you for chnaging password')
  $('#change-password').trigger('reset')
}

const changePasswordFailure = function(response) {
  $('#error-message').text('Change Password failed, try again')
}

const signOutSuccess = function(response) {

  $('#error-message').text('Thank you for playing')
  $('#sign-out').trigger('reset')
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
