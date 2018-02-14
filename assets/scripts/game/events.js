'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const gameLogic = require('../gameLogic')

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
  event.preventDefault()
  const data = {
    id: event.target.id,
    value: gameLogic.playerIcon   // store.player.id
    over:
  }
  // store.player.id
  // store.data = game.data
  // data.store
  console.log(event.target.id)

  api.updateGame(event)
    .then(ui.onUpdateSuccess)
    .catch(ui.onUpdateFailure)
  console.log(data)
}

// const Update = () => {
//   $('.box').on('click', onCreateGame)
//   console.log('yup')
// }

module.exports = {
  onCreateGame,
  // createGame,
  //             onUpdate
  // Update
  onUpdate
}
