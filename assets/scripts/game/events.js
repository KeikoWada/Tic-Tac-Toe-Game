'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onCreateExample = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)

  api.create(data)
    .then(ui.onCreateSuccess)
    .catch(ui.onCreateFailure)
}

const addHandlers = () => {
  $('#example-create').on('submit', onCreateExample)
}

module.exports = {
  addHandlers
}
