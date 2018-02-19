'use strict'
const store = require('../store')
const gameLogic = require('../gameLogic')

const onCreateSuccess = function (data) {
  $('#gamePage').toggle('slow')
  $('.secondPage').toggle('slow')
  store.game = data.game
}

// const onCreateFailure = function () {
//   $('#checkmessage').text('Error on create of game')
//   $('#checkmessage').css('background-color', 'red')
// }

const onCreateNewSuccess = function (data) {
  gameLogic.reset()
  store.game = data.game
  console.log(store.game)
}

const onUpdate = function (data) {
  $('#checkmessage').text('game successfully updated')
  $('#checkmessage').css('background-color', 'green')
  store.game = data.game
}

// const onUpdateFailure = function () {
//   $('#checkmessage').text('It\'s already taken')
//   $('#checkmessage').css('background-color', 'red')
// }

const onTrackSuccess = function (data) {
  $('#checkmessage').text('Winner successfully updated')
  $('#checkmessage').css('background-color', 'green')
  store.game = data.game
}

// const onTrackFailure = function () {
//   $('#checkmessage').text('Error on updating the Winner')
//   $('#checkmessage').css('background-color', 'red')
// }

const menuPage = function () {
  $('.secondPage').toggle('slow')
  $('#gamePage').toggle('slow')
}

module.exports = {
  onCreateSuccess,
  // onCreateFailure,
  onUpdate,
  // onUpdateFailure,
  onTrackSuccess,
  // onTrackFailure,
  onCreateNewSuccess,
  menuPage
}
