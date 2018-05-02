'use strict'
const store = require('../store')
const gameLogic = require('../gameLogic')

const onCreateSuccess = function (data) {
  store.game = data.game
}

const onCreateNewSuccess = function (data) {
  gameLogic.reset()
  store.game = data.game
}

const onUpdateSuccess = function (data) {
  store.game = data.game
}

const onTrackSuccess = function (data) {
  data.game = store.game
  $('#messageTwo').text(store.user.email + ' played ' + data.games.length + ' times! great job!')
  $('#messageTwo').css('background-color', 'gray')
  $('#messageTwo').delay(5000).queue(function () {
    $(this).removeAttr('style')
    $(this).text('')
  })
}

const onTrackSuccessTwo = function (data) {
  data.game = store.game
  $('#signInMessage').text(store.user.email + ' played ' + data.games.length + ' times! great job!')
}

module.exports = {
  onCreateSuccess,
  onUpdateSuccess,
  onTrackSuccess,
  onTrackSuccessTwo,
  onCreateNewSuccess
}
