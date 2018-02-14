'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const gameLogic = require('../gameLogic')
const store = require('../store')

const onCreateGame = function (event) {
  event.preventDefault()
  console.log('c')
  const data = getFormFields(event.target)

  api.create(data)
    .then(ui.onCreateSuccess)
    .catch(ui.onCreateFailure)
  console.log('workingggggg')
}

const onUpdate = function (event) {
  // event.preventDefault()
  const data = {
    id: event.target.id,
    value: store.player,
    over: gameLogic.gameBoard
  }
  console.log(event.target.id)

  api.updateGame(event)
    .then(ui.onUpdateSuccess)
    .catch(ui.onUpdateFailure)
  console.log(data)
}

const onTrack = function (event) {
  event.preventDefault()
  api.tracker(event)
    .then(ui.onTrackSuccess)
    .catch(ui.onTrackFailure)
}

module.exports = {
  onCreateGame,
  onUpdate,
  onTrack
}
