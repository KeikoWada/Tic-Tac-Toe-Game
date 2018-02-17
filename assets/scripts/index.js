'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const authEvents = require('./auth/events.js')
const gameEvents = require('./game/events.js')

$(() => {
  setAPIOrigin(location, config)
})

const gameLogic = require('./gameLogic.js')

$(() => {
  // player click -> function 'switchPlayer' happens
  // create a new Games on the server
  authEvents.addHandlers()
  // $('.newGame').on('click', function () {
  //   $('#gamePage').toggle('slow')
  // })
  $('.newGame').on('click', gameEvents.onCreateGame)
  $('.box').on('click', gameEvents.onUpdate)
  $('#gameTraker').on('click', gameEvents.onTrack)
  gameLogic.gameEvent()
  // $('.restart').on('click', gameLogic.reset)
  $('#restart').on('click', gameEvents.onCreateNewGame)
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
