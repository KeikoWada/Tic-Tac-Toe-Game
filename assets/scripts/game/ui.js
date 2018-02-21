'use strict'
const store = require('../store')
const gameLogic = require('../gameLogic')

const onCreateSuccess = function (data) {
  $('#gamePage').toggle('slow')
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
//   $('#checkmessage').text('Error on updating the game')
//   $('#checkmessage').css('background-color', 'red')
// }

const onTrackSuccess = function (data) {
  $('#scoremessage').text('here')
  $('#scoremessage').css('background-color', 'green')
  store.game = data.game
}

// const onTrackFailure = function () {
//   $('#checkmessage').text('Error on updating the Winner')
//   $('#checkmessage').css('background-color', 'red')
// }

module.exports = {
  onCreateSuccess,
  // onCreateFailure,
  onUpdate,
  // onUpdateFailure,
  onTrackSuccess,
  // onTrackFailure,
  onCreateNewSuccess
}
