'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const store = require('../store')
const gameLogic = require('../gameLogic')

const onCreateGame = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)

  api.create(data)
    .then(ui.onCreateSuccess)
  //  .catch(ui.onCreateFailure)
}

const onCreateNewGame = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)

  api.create(data)
    .then(ui.onCreateNewSuccess)
}

const onUpdate = function (event) {
  if (($(this).text() === '#') || ($(this).text() === '.selected')) {
  //  console.log('store.game.over')
    event.preventDefault()
    const data = {
      id: event.target.id,
      value: store.game.id,
      over: store.game.over
    }

    api.updateGame(data)
      .then(ui.onUpdateSuccess)
    //  .catch(ui.onUpdateFailure)
  }
}

const onTrack = function (event) {
  // console.log(store.game)
  // if (gameLogic.over === true) {
  //  console.log('joooo')
    event.preventDefault()
    api.tracker(event)
      .then(ui.onTrackSuccess)
    //    .catch(ui.onTrackFailure)
  }
// }

module.exports = {
  onCreateGame,
  onUpdate,
  onTrack,
  onCreateNewGame
}
