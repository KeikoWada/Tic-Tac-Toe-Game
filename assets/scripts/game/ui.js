'use strict'
const store = require('../store')

const onCreateSuccess = function (data) {
  $('#messageTwo').text('game successfully created')
  $('#messageTwo').css('background-color', 'green')

  // console.log('successfully created an game')
  console.log(data)
  store.game = data.game
}

const onCreateFailure = function (error) {
  $('#message').text('Error on create of game')
  $('#message').css('background-color', 'red')
  console.error(error)
}

const onUpdate = function (data) {
  $('#messageTwo').text('game successfully updated')
  $('#messageTwo').css('background-color', 'green')

  // console.log('successfully created an game')
  store.game = data.game
}

const onUpdateFailure = function (error) {
  $('#message').text('Error on updating the game')
  $('#message').css('background-color', 'red')
  console.error(error)
}

const onCountSuccess = function (data) {
  $('#messageTwo').text('Winner successfully updated')
  $('#messageTwo').css('background-color', 'green')

  // console.log('successfully created an game')
  console.log(data)
  store.game = data.game
}

const onCountFailure = function (error) {
  $('#message').text('Error on updating the Winner')
  $('#message').css('background-color', 'red')
  console.error(error)
}

module.exports = {
  onCreateSuccess,
  onCreateFailure,
  onUpdate,
  onUpdateFailure,
  onCountSuccess,
  onCountFailure
}
