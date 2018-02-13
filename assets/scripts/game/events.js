'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onCreateGame = function (event) {
  event.preventDefault()
  console.log('c')
  const data = getFormFields(event.target)

  api.create(data)
    .then(ui.onCreateSuccess)
    .catch(ui.onCreateFailure)
  console.log('workingggggg')
}

// <<<<<<< HEAD
const createGame = () => {
  $('##in-button').on('click', onCreateGame)
}

module.exports = {
  onCreateGame,
  createGame
// =======
// module.exports = {
  // onCreateGame
// >>>>>>> gameapi
}
