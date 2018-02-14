'use strict'
const store = require('../store')

const onCreateSuccess = function (data) {
  $('#checkmessage').text('game successfully created')
  $('#checkmessage').css('background-color', 'green')

  // console.log('successfully created an game')
  console.log(data)
  store.game = data.game
}

const onCreateFailure = function (error) {
  $('#checkmessage').text('Error on create of game')
  $('#checkmessage').css('background-color', 'red')
  console.error(error)
}

const onUpdate = function (data) {
  $('#checkmessage').text('game successfully updated')
  $('#checkmessage').css('background-color', 'green')

  // console.log('successfully created an game')
  store.game = data.game
}

const onUpdateFailure = function (error) {
  $('#checkmessage').text('Error on updating the game')
  $('#checkmessage').css('background-color', 'red')
  console.error(error)
}

const onTrackSuccess = function (data) {
  $('#checkmessage').text('Winner successfully updated')
  $('#checkmessage').css('background-color', 'green')

  // console.log('successfully created an game')
  console.log(data)
  store.game = data.game
}

const onTrackFailure = function (error) {
  $('#checkmessage').text('Error on updating the Winner')
  $('#checkmessage').css('background-color', 'red')
  console.error(error)
}

module.exports = {
  onCreateSuccess,
  onCreateFailure,
  onUpdate,
  onUpdateFailure,
  onTrackSuccess,
  onTrackFailure
}
