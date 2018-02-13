'use strict'
const authEvents = require('./auth/events')
const gameEvents = require('./game/events')

// const playerOne = []
// const playerTwo = []
let gameBoard = ['', '', '', '', '', '', '', '', '']
const x = 'x'
const o = 'o'

// here is the switchPlayer -> after click, the icon shows up
// changing the icon when switch players -> icon will push into the array
// let countx = 0
// let counto = 0
let turn = 0
const playGame = function () {
  if (($(this).text() === '#') || ($(this).text() === '.selected')) {
    switchPlayer(this.id)
    winner(this.id)
    $(this).addClass('selected')
    console.log(this)
  } else {
    $('.message').text('it\'s taken!')
  }
}

// const indexOne = '.one' && indexOne = gameBoard[0]
function switchPlayer (id) {
  if (turn % 2 === 0) {
    gameBoard[id] = 'x'
    gameBoard.splice(id, 1, 'x')
    document.getElementById(id).innerHTML = 'x'
    $('.message').text('next turn is you, team O!')
  } else {
    gameBoard.splice(id, 1, 'o')
    gameBoard[id] = 'o'
    document.getElementById(id).innerHTML = 'o'
    $('.message').text('next turn is you, team X!')
  }
  turn++
  console.log(gameBoard)
  console.log(turn)
  console.log(id)
}

function winner (id) {
  const one = $('#0').text()
  const two = $('#1').text()
  const three = $('#2').text()
  const four = $('#3').text()
  const five = $('#4').text()
  const six = $('#5').text()
  const seven = $('#6').text()
  const eight = $('#7').text()
  const nine = $('#8').text()

  console.log('im here!' + one)
  if (one === x && two === x && three === x) {
    $('.message').text('Winner Winner Chicken Dinner, Xman!')
    $('.four').text('yes! X')
    $('.five').text('yes! X')
    $('.six').text('yes! X')
    $('.seven').text('yes! X')
    $('.eight').text('yes! X')
    $('.nine').text('yes! X')
    // $('.box').off('click')
    turn = 0
    // document.getElementById('.box').innerHTML('.box').style.display = 'block'
  } else if (four === x && five === x && six === x) {
    $('.message').text('Winner Winner Chicken Dinner, Xman!')
    turn = 0
    $('.one').text('yes! X')
    $('.two').text('yes! X')
    $('.three').text('yes! X')
    $('.seven').text('yes! X')
    $('.eight').text('yes! X')
    $('.nine').text('yes! X')
    // $('.box').off('click')
  } else if (seven === x && eight === x && nine === x) {
    $('.message').text('Winner Winner Chicken Dinner, Xman!')
    $('.one').text('yes! X')
    $('.two').text('yes! X')
    $('.three').text('yes! X')
    $('.four').text('yes! X')
    $('.five').text('yes! X')
    $('.six').text('yes! X')
    // $('.box').off('click')
    turn = 0
  } else if (one === x && five === x && nine === x) {
    $('.message').text('Winner Winner Chicken Dinner, Xman!')
    $('.seven').text('yes! X')
    $('.two').text('yes! X')
    $('.three').text('yes! X')
    $('.four').text('yes! X')
    $('.eight').text('yes! X')
    $('.six').text('yes! X')
    // $('.box').off('click')
    turn = 0
  } else if (three === x && five === x && seven === x) {
    $('.message').text('Winner Winner Chicken Dinner, Xman!')
    $('.one').text('yes! X')
    $('.two').text('yes! X')
    $('.eight').text('yes! X')
    $('.four').text('yes! X')
    $('.nine').text('yes! X')
    $('.six').text('yes! X')
    // $('.box').off('click')
    turn = 0
  } else if (one === x && four === x && seven === x) {
    $('.message').text('Winner Winner Chicken Dinner, mr.O')
    $('.five').text('yes! X')
    $('.two').text('yes! X')
    $('.three').text('yes! X')
    $('.eight').text('yes! X')
    $('.nine').text('yes! X')
    $('.six').text('yes! X')
    // $('.box').off('click')
    turn = 0
  } else if (two === x && five === x && eight === x) {
    $('.message').text('Winner Winner Chicken Dinner, mr.O')
    $('.one').text('yes! X')
    $('.three').text('yes! X')
    $('.four').text('yes! X')
    $('.six').text('yes! X')
    $('.seven').text('yes! X')
    $('.nine').text('yes! X')
    // $('.box').off('click')
    turn = 0
  } else if (three === x && six === x && nine === x) {
    $('.message').text('Winner Winner Chicken Dinner, mr.O')
    $('.one').text('yes! X')
    $('.two').text('yes! X')
    $('.four').text('yes! X')
    $('.seven').text('yes! X')
    $('.five').text('yes! X')
    $('.eight').text('yes! X')
    // $('.box').off('click')
    turn = 0
  } else if (one === o && two === o && three === o) {
    $('.message').text('Winner Winner Chicken Dinner, mr.O!')
    $('.seven').text('yes! O')
    $('.eight').text('yes! O')
    $('.nine').text('yes! O')
    $('.four').text('yes! O')
    $('.five').text('yes! O')
    $('.six').text('yes! O')
    // $('.box').off('click')
    turn = 0
  } else if (four === o && five === o && six === o) {
    $('.message').text('Winner Winner Chicken Dinner, mr.O')
    $('.one').text('yes! O')
    $('.two').text('yes! O')
    $('.three').text('yes! O')
    $('.seven').text('yes! O')
    $('.eight').text('yes! O')
    $('.nine').text('yes! O')
    // $('.box').off('click')
    turn = 0
  } else if (seven === o && eight === o && nine === o) {
    $('.message').text('Winner Winner Chicken Dinner, mr.O!')
    $('.one').text('yes! O')
    $('.two').text('yes! O')
    $('.three').text('yes! O')
    $('.four').text('yes! O')
    $('.five').text('yes! O')
    $('.six').text('yes! O')
    // $('.box').off('click')
    turn = 0
  } else if (one === o && five === o && nine === o) {
    $('.message').text('Winner Winner Chicken Dinner, mr.O')
    $('.seven').text('yes! O')
    $('.two').text('yes! O')
    $('.three').text('yes! O')
    $('.four').text('yes! O')
    $('.eight').text('yes! O')
    $('.six').text('yes! O')
    // $('.box').off('click')
    turn = 0
  } else if (three === o && five === o && seven === o) {
    $('.message').text('Winner Winner Chicken Dinner, mr.O')
    $('.one').text('yes! O')
    $('.two').text('yes! O')
    $('.eight').text('yes! O')
    $('.four').text('yes! O')
    $('.nine').text('yes! O')
    $('.six').text('yes! O')
    // $('.box').off('click')
    turn = 0
  } else if (one === o && four === o && seven === o) {
    $('.message').text('Winner Winner Chicken Dinner, mr.O')
    $('.message').text('Winner Winner Chicken Dinner, mr.O')
    $('.five').text('yes! O')
    $('.two').text('yes! O')
    $('.three').text('yes! O')
    $('.eight').text('yes! O')
    $('.nine').text('yes! O')
    $('.six').text('yes! O')
    // $('.box').off('click')
    turn = 0
  } else if (two === o && five === o && eight === o) {
    $('.message').text('Winner Winner Chicken Dinner, mr.O')
    $('.one').text('yes! X')
    $('.three').text('yes! X')
    $('.four').text('yes! X')
    $('.six').text('yes! X')
    $('.seven').text('yes! X')
    $('.nine').text('yes! X')
    // $('.box').off('click')
    turn = 0
  } else if (three === o && six === o && nine === o) {
    $('.message').text('Winner Winner Chicken Dinner, mr.O')
    $('.one').text('yes! X')
    $('.two').text('yes! X')
    $('.four').text('yes! X')
    $('.seven').text('yes! X')
    $('.five').text('yes! X')
    $('.eight').text('yes! X')
    // $('.box').off('click')
    turn = 0
  } else if (turn === 9) {
    $('.message').text('Tie!')
    // $('.box').off('click')
    turn = 0
  } else {

  }
}

const reset = function () {
  $('.reset').on('click', function () {
    console.log('hi')
    $('.box').removeClass('selected')
    $('.box').text('#')
    $('.message').text('next turn is...')
    turn = 0
    gameBoard = ['', '', '', '', '', '', '', '', '']
  }
  )
}

const createGames = () => {
  $('#createButton').on('click', function () {
    gameEvents.onCreateGame(event)
  })
}

const signOut = () => {
  $('#out-button').click(function () {
    $('.gamePage').toggle('slow')
    $('#first-page').toggle('slow')
    $('.gamePage').text()
  })
}

const gameEvent = () => {
  $('.box').on('click', playGame)
}

module.exports = {
  gameEvent,
  reset,
  // signIn,
  signOut,
  createGames
}
