
const api = require('./api')
const ui = require('./ui')


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

  const form = event.target
  const data = getFormFields(form)

  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onGameBoard = function (event) {
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)
}

const onNewGame = function (event) {
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)

  api.newGame()
    .then(ui.newGametSuccess)
    .catch(ui.newGameFailure)
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onGameBoard,
  onNewGame
}
