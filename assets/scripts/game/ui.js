'use strict'
const store = require('../store')

const onCreateSuccess = function (data) {
  $('#message').text('Example successfully created')
  $('#message').css('background-color', 'green')

  console.log('successfully created an game')
  console.log(data)
  store.user = data.user
}

const onCreateFailure = function (error) {
  $('#message').text('Error on create of game')
  $('#message').css('background-color', 'red')
  console.error(error)
}

module.exports = {
  onCreateSuccess,
  onCreateFailure
}
