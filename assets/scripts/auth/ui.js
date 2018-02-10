'use strict'
const store = require('../store')

const signUpSuccess = function (data) {
  $('#message').text('Signed up successfully')
  $('#message').css('background-color', 'green')
  console.log(data)
}

const signUpFailure = function (error) {
  $('#message').text('Error on signing up')
  $('#message').css('background-color', 'red')
  console.log(error)
}

const signInSuccess = function (data) {
  $('#message').text('Signed in successfully')
  $('#message').css('background-color', 'green')
  console.log(data)
  store.user = data.user
}

const signInFailure = function (error) {
  $('#message').text('Error in signing up')
  $('#message').css('background-color', 'red')
  console.log(error)
}

const changePasswordSuccess = function () {
  $('#message').text('Change password successfully')
  $('#message').css('background-color', 'green')
  console.log('change password successfully')
}

const changePasswordFailure = function (error) {
  $('#message').text('Error on changing password')
  $('#message').css('background-color', 'red')
  console.log(error)
}

const signOutSuccess = function () {
  $('#message').text('Signed out successfully')
  $('#message').css('background-color', 'green')
  console.log('signed out successfully')
}

const signOutFailure = function (error) {
  $('#message').text('Error on signing out')
  $('#message').css('background-color', 'red')
  console.log(error)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
