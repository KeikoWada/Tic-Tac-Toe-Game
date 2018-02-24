'use strict'
const store = require('../store')

const signUpSuccess = function () {
  $('input').val('')
  $('#message').text('Signed up successfully')
  $('#message').css('color', 'green')
  // $('#message').delay(3000).queue(function () {
  //   $(this).css('display', 'none')
  // })
}

const signUpFailure = function () {
  $('input').val('')
  $('#message').text('Error on signing up')
  $('#message').css('color', 'red')
  // $('#message').delay(3000).queue(function () {
  //   $(this).css('display', 'none')
  // })
}

const signInSuccess = function (data) {
  $('input').val('')
  $('#signInMessage').text('Signed in successfully')
  $('#signInMessage').css('background-color', 'green')
  $('.secondPage').toggle('slow')
  $('#first-page').toggle('slow')
  $('#message').dequeue()
  // $('#signInMessage').delay(3000).queue(function () {
  //   $(this).css('display', 'none')
  // })
  store.user = data.user
}

const signInFailure = function () {
  $('input').val('')
  $('#message').text('Error in signing in')
  $('#message').css('color', 'red')
}

const changePasswordSuccess = function () {
  $('input').val('')
  $('#messageTwo').text('Change password successfully')
  $('#messageTwo').css('background-color', 'green')
  // $('.message').delay(3000).queue(function () {
  //   $(this).css('display', 'none')
  // })
}

const changePasswordFailure = function () {
  $('input').val('')
  $('#messageTwo').text('Error on changing password')
  $('#messageTwo').css('background-color', 'red')
  // $('#messageTwo').delay(3000).queue(function () {
  //   $(this).css('display', 'none')
  // })
}

const signOutSuccess = function () {
  $('input').val('')
  $('#message').text('Signed out successfully')
  $('#message').css('color', 'green')
  $('.gamePage').toggle('slow')
  $('#first-page').toggle('slow')
  $('#message').delay(3000).queue(function () {
    // $(this).removeAttr('style')
    // $(this).text('')
    $('#message').text('Welcome! Are you ready to play game?', 'green')
  })
}

const signOutFailure = function () {
  $('input').val('')
  $('#messageTwo').text('Error on signing out')
  $('#messageTwo').css('background-color', 'red')
  // $('#messageTwo').delay(3000).queue(function () {
  //   $(this).css('display', 'none')
  // })
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
