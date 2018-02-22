'use strict'
const store = require('../store')
const gameLogic = require('../gameLogic')

const onCreateSuccess = function (data) {
  // $('#gamePage').toggle('slow')
  store.game = data.game
}

// const onCreateFailure = function () {
//   $('#checkmessage').text('Error on create of game')
//   $('#checkmessage').css('background-color', 'red')
// }

const onCreateNewSuccess = function (data) {
  gameLogic.reset()
  store.game = data.game
}

const onUpdateSuccess = function (data) {
  // $('#checkmessage').text('game successfully updated')
  // $('#checkmessage').css('background-color', 'green')
  store.game = data.game
}

// const onUpdateFailure = function (error) {
//
//   console.log(error)
// }

// const onUpdateFailure = function () {
//   $('#checkmessage').text('Error on updating the game')
//   $('#checkmessage').css('background-color', 'red')
// }

const onTrackSuccess = function (data) {
  data.game = store.game
  console.log(store.game)
  $('#messageTwo').text(store.user.email + ' played ' + data.games.length + ' times! great job!')
  $('#messageTwo').css('background-color', 'gray')
  console.log(data)
}

const onTrackSuccessTwo = function (data) {
  // $('#scoremessage').text('User\'s ID is ' + store.user.id )
  data.game = store.game
  $('#signInMessage').text(store.user.email + ' played ' + data.games.length + ' times! great job!')
//  $('#history').css('background-color', 'gray')
}

module.exports = {
  onCreateSuccess,
  // onCreateFailure,
  onUpdateSuccess,
  // onUpdateFailure,
  onTrackSuccess,
  onTrackSuccessTwo,
  // onTrackFailure,
  onCreateNewSuccess
}
