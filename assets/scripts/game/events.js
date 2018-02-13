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

const onUpdate = function (event) {
  event.preventDefault()
  console.log(ui.data)
  const data = getFormFields(event.target)

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
  onUpdate
  // Update

}
