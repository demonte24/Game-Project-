
const config = require('../config')
const store = require('./../store')

const signUp = function (data) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-up',
    data: data
  })
}

const signIn = function (data) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-in',
    data: data
  })
}

const changePassword = function (data) {
  return $.ajax({
  method: 'PATCH',
  url: config.apiUrl + '/change-password',
  data: data,
  headers: {
    Authorization: 'Bearer ' + store.user.token
    }
  })
}

const signOut = function () {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/sign-out',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const newGame = function () {
  return $.ajax({
  method: 'POST',
  url: config.apiUrl + '/games',
  data: {},
  headers: {
    Authorization: 'Bearer ' + store.user.token
    }
  })
}

const playerMove = function (cellIndex) {
  return $.ajax({
  method: 'PATCH',
  url: config.apiUrl + '/games/' + store.game._id,
  headers: {
    Authorization: 'Bearer ' + store.user.token
  },
  data: {
    "game": {
      "cell": {
        "index": cellIndex,
        "value": store.currentPlayer,
      },
      "over": false
  }
}
  })
}

const gamesPlayed = function () {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/games',
    data: {},
    headers: {
      Authorization: 'Bearer ' + store.user.token
      }
  })
}




module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
  newGame,
  playerMove,
  gamesPlayed,
}
