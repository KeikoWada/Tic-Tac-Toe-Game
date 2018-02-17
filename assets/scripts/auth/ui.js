'use strict'
const store = require('../store')
// const signInOut = require('./signinOut')

const signUpSuccess = function () {
  $('input').val('')
  $('#message').text('Signed up successfully')
  $('#message').css('background-color', 'green')
}

const signUpFailure = function () {
  $('#message').text('Error on signing up')
  $('#message').css('background-color', 'red')
}

const signInSuccess = function (data) {
  $('input').val('')
  $('#messageTwo').text('Signed in successfully')
  $('#messageTwo').css('background-color', 'green')
  $('#message').text('Signed in successfully')
  $('#message').css('background-color', 'green')
  $('.secondPage').toggle('slow')
  $('#first-page').toggle('slow')
  store.user = data.user
}

const signInFailure = function () {
  $('#message').text('Error in signing up')
  $('#message').css('background-color', 'red')
}

const changePasswordSuccess = function () {
  $('input').val('')
  $('#messageTwo').text('Change password successfully')
  $('#messageTwo').css('background-color', 'green')
}

const changePasswordFailure = function () {
  $('#messageTwo').text('Error on changing password')
  $('#messageTwo').css('background-color', 'red')
}

const signOutSuccess = function () {
  $('#message').text('Signed out successfully')
  $('#message').css('background-color', 'green')
  $('.gamePage').toggle('slow')
  $('#first-page').toggle('slow')
}

const signOutFailure = function () {
  $('#messageTwo').text('Error on signing out')
  $('#messageTwo').css('background-color', 'red')
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
