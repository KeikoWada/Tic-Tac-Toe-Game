'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const authEvents = require('./auth/events.js')
const gameEvents = require('./game/events.js')
// const store = require('./store')

$(() => {
  setAPIOrigin(location, config)
})

const gameLogic = require('./gameLogic.js')

$(() => {
  // player click -> function 'switchPlayer' happens
  // create a new Games on the server
  authEvents.addHandlers()
  $('.newGame').on('click', function () {
    $('#gamePage').toggle('slow')
    $('.secondPage').toggle('slow')
    $('#user').toggle('hi')
  })
  $('.newGame').on('click', gameEvents.onCreateGame)
  $('.record').on('click', gameEvents.onTrack)
  $('.history-button').on('click', gameEvents.onTrackTwo)
  gameLogic.gameEvent()
  // $('.restart').on('click', gameLogic.reset)
  $('#restart').on('click', gameEvents.onCreateNewGame)
  $('#out-button').on('click', gameLogic.reset)
  $('#out-button').on('click', gameLogic.resetScore)
//  $('.game-states').on('click', gameEvents.onTrack)
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
