'use strict'
const store = require('../store')
// const signInOut = require('./signinOut')

const signUpSuccess = function (data) {
  $('#message').text('Signed up successfully')
  $('#message').css('background-color', 'green')
  console.log(data)
}

// const signIn = function () {
//  if ($('#message').text() === 'Signed up successfully') {
//    console.log('hi')
//  }
// }

const signUpFailure = function (error) {
  $('#message').text('Error on signing up')
  $('#message').css('background-color', 'red')
  console.log(error)
}

const signInSuccess = function (data) {
  $('#message').text('Signed in successfully')
  $('#message').css('background-color', 'green')
  $('#gamePage').toggle('slow')
  $('#first-page').toggle('slow')
  console.log(data)
  store.user = data.user
}

const signInFailure = function (error) {
  $('#message').text('Error in signing up')
  $('#message').css('background-color', 'red')
  console.log(error)
}

const changePasswordSuccess = function () {
  $('#messageTwo').text('Change password successfully')
  $('#messageTwo').css('background-color', 'green')
  console.log('change password successfully')
}

const changePasswordFailure = function (error) {
  $('#messageTwo').text('Error on changing password')
  $('#messageTwo').css('background-color', 'red')
  console.log(error)
}

const signOutSuccess = function () {
  $('#messageTwo').text('Signed out successfully')
  $('#messageTwo').css('background-color', 'green')
  console.log('signed out successfully')
}

const signOutFailure = function (error) {
  $('#messageTwo').text('Error on signing out')
  $('#messageTwo').css('background-color', 'red')
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
  // signIn
}
