'use strict'

const signIn = () => {
  $('#in-button').click(function () {
    $('.gamePage').toggle('slow')
    $('#first-page').toggle('slow')
    $('#message').off('text')
  })
}

const signOut = () => {
  $('#out-button').click(function () {
    $('.gamePage').toggle('slow')
    $('#first-page').toggle('slow')
    $('.gamePage').text()
  })
}

module.exports = {
  signIn,
  signOut
}
