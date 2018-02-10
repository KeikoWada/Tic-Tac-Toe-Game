'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const authEvents = require('./auth/events.js')

$(() => {
  setAPIOrigin(location, config)
})

$(() => {
  authEvents.addHandlers()
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

// const sqr1 = document.col-md-4.box.one
const playerOne = []
const playerTwo = []
const gameBoard = []
const x = 'x'
const o = 'o'

// player click -> function 'switchPlayer' happens
$(() => {
  $('.box').on('click', playGame)
})

// here is the switchPlayer -> after click, the icon shows up
// changing the icon when switch players -> icon will push into the array
let turn = 0
const playGame = function () {
  switchPlayer(this.id)
  winner(this.id)
  $(this).addClass('selected')
  $(this).off('click')
}

function switchPlayer (id) {
  if (turn % 2 === 0) {
    playerOne.push(id)
    document.getElementById(id).innerHTML = 'x'
    console.log(id)
  } else {
    playerTwo.push(id)
    gameBoard.push(playerTwo[id])
    document.getElementById(id).innerHTML = 'o'
    console.log(id)
  }
  turn++
  console.log(playerOne)
  console.log(turn)
}

function winner (id) {
  const one = $('#1').text()
  const two = $('#2').text()
  const three = $('#3').text()
  const four = $('#4').text()
  const five = $('#5').text()
  const six = $('#6').text()
  const seven = $('#7').text()
  const eight = $('#8').text()
  const nine = $('#9').text()

  console.log('im here!' + one)
  if (one === x && two === x && three === x) {
    console.log('Winner Winner Chicken Dinner, Xman!')
  } else if (four === x && five === x && six === x) {
    console.log('Winner Winner Chicken Dinner, Xman!')
  } else if (seven === x && eight === x && nine === x) {
    console.log('Winner Winner Chicken Dinner, Xman!')
  } else if (one === x && five === x && nine === x) {
    console.log('Winner Winner Chicken Dinner, Xman!')
  } else if (three === x && five === x && seven === x) {
    console.log('Winner Winner Chicken Dinner, Xman!')
  } else if (one === x && four === x && seven === x) {
    console.log('Winner Winner Chicken Dinner, mr.O')
  } else if (two === x && five === x && eight === x) {
    console.log('Winner Winner Chicken Dinner, mr.O')
  } else if (three === x && six === x && nine === x) {
    console.log('Winner Winner Chicken Dinner, mr.O')
  } else if (one === o && two === o && three === o) {
    console.log('Winner Winner Chicken Dinner, mr.O!')
  } else if (four === o && five === o && six === o) {
    console.log('Winner Winner Chicken Dinner, mr.O')
  } else if (seven === o && eight === o && nine === o) {
    console.log('Winner Winner Chicken Dinner, mr.O!')
  } else if (one === o && five === o && nine === o) {
    console.log('Winner Winner Chicken Dinner, mr.O')
  } else if (three === o && five === o && seven === o) {
    console.log('Winner Winner Chicken Dinner, mr.O')
  } else if (one === o && four === o && seven === o) {
    console.log('Winner Winner Chicken Dinner, mr.O')
  } else if (two === o && five === o && eight === o) {
    console.log('Winner Winner Chicken Dinner, mr.O')
  } else if (three === o && six === o && nine === o) {
    console.log('Winner Winner Chicken Dinner, mr.O')
  } else if (turn === 9) {
    console.log('Tie!')
  }
}
