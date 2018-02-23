'use strict'
const store = require('./store')
// const gameEvents = require('./game/events')
const api = require('./game/api')
const ui = require('./game/ui')

let gameBoard = ['', '', '', '', '', '', '', '', '']
const x = 'x'
const o = 'o'

// here is the switchPlayer -> after click, the icon shows up
// changing the icon when switch players -> icon will push into the array

const gameEvent = () => {
  $('.box').on('click', playGame)
}

let turn = 0
const playGame = function () {
  if (($(this).text() === '#') || ($(this).text() === '.selected')) {
    switchPlayer(this.id)
    winner(this.id)
    $(this).addClass('selected')
    const data = {
      index: this.id,
      value: store.player,
      over: store.over
    }
    api.updateGame(data)
      .then(ui.onUpdateSuccess)
      .catch(ui.onUpdateFailure)
    // store.game = data.game
    data.game = store.game
    data.player = store.player
    // console.log(store.game)
    // console.log(data)
  } else {
    $('.message').text('it\'s taken!')
  }
}

function switchPlayer (id) {
  if (turn % 2 === 0) {
    gameBoard[id] = 'x'
    store.player = 'x'
    store.game.cells = gameBoard
    // gameBoard.splice(id, 1, 'x')
    document.getElementById(id).innerHTML = 'x'
    $('.message').text('next turn is you, team O!')
  } else {
    // gameBoard.splice(id, 1, 'o')
    gameBoard[id] = 'o'
    store.player = 'o'
    store.game.cells = gameBoard
    document.getElementById(id).innerHTML = 'o'
    $('.message').text('next turn is you, team X!')
  }
  turn++
}

let xWin = 1
let oWin = 1
const winner = function (id) {
  const one = $('#0').text()
  const two = $('#1').text()
  const three = $('#2').text()
  const four = $('#3').text()
  const five = $('#4').text()
  const six = $('#5').text()
  const seven = $('#6').text()
  const eight = $('#7').text()
  const nine = $('#8').text()

  if (one === x && two === x && three === x) {
    $('.message').text('Winner Winner Chicken Dinner, Xman!')
    $('.four').text('yes! X')
    $('.five').text('yes! X')
    $('.six').text('yes! X')
    $('.seven').text('yes! X')
    $('.eight').text('yes! X')
    $('.nine').text('yes! X')
    $('.number-win').text(xWin++)
    turn = 0
    store.over = true
  } else if (four === x && five === x && six === x) {
    $('.message').text('Winner Winner Chicken Dinner, Xman!')
    $('.one').text('yes! X')
    $('.two').text('yes! X')
    $('.three').text('yes! X')
    $('.seven').text('yes! X')
    $('.eight').text('yes! X')
    $('.nine').text('yes! X')
    $('.number-win').text(xWin++)
    turn = 0
    store.over = true
  } else if (seven === x && eight === x && nine === x) {
    $('.message').text('Winner Winner Chicken Dinner, Xman!')
    $('.one').text('yes! X')
    $('.two').text('yes! X')
    $('.three').text('yes! X')
    $('.four').text('yes! X')
    $('.five').text('yes! X')
    $('.six').text('yes! X')
    $('.number-win').text(xWin++)
    turn = 0
    store.over = true
  } else if (one === x && four === x && seven === x) {
    $('.message').text('Winner Winner Chicken Dinner, Xman!')
    $('.two').text('yes! X')
    $('.three').text('yes! X')
    $('.five').text('yes! X')
    $('.six').text('yes! X')
    $('.eight').text('yes! X')
    $('.nine').text('yes! X')
    $('.number-win').text(xWin++)
    turn = 0
    store.over = true
  } else if (two === x && five === x && eight === x) {
    $('.message').text('Winner Winner Chicken Dinner, Xman!')
    $('.one').text('yes! X')
    $('.three').text('yes! X')
    $('.four').text('yes! X')
    $('.six').text('yes! X')
    $('.seven').text('yes! X')
    $('.nine').text('yes! X')
    $('.number-win').text(xWin++)
    turn = 0
    store.over = true
  } else if (three === x && six === x && nine === x) {
    $('.message').text('Winner Winner Chicken Dinner, Xman!')
    $('.one').text('yes! X')
    $('.two').text('yes! X')
    $('.four').text('yes! X')
    $('.five').text('yes! X')
    $('.seven').text('yes! X')
    $('.eight').text('yes! X')
    $('.number-win').text(xWin++)
    turn = 0
    store.over = true
  } else if (one === x && five === x && nine === x) {
    $('.message').text('Winner Winner Chicken Dinner, Xman!')
    $('.two').text('yes! X')
    $('.three').text('yes! X')
    $('.four').text('yes! X')
    $('.six').text('yes! X')
    $('.seven').text('yes! X')
    $('.eight').text('yes! X')
    $('.number-win').text(xWin++)
    turn = 0
    store.over = true
  } else if (three === x && five === x && seven === x) {
    $('.message').text('Winner Winner Chicken Dinner, Xman!')
    $('.one').text('yes! X')
    $('.two').text('yes! X')
    $('.four').text('yes! X')
    $('.six').text('yes! X')
    $('.eight').text('yes! X')
    $('.nine').text('yes! X')
    $('.number-win').text(xWin++)
    turn = 0
    store.over = true
  } else if (one === o && two === o && three === o) {
    $('.message').text('Winner Winner Chicken Dinner, mr.O')
    $('.four').text('yes! O')
    $('.five').text('yes! O')
    $('.six').text('yes! O')
    $('.seven').text('yes! O')
    $('.eight').text('yes! O')
    $('.nine').text('yes! O')
    $('#o_win').text(oWin++)
    turn = 0
    store.over = true
  } else if (four === o && five === o && six === o) {
    $('.message').text('Winner Winner Chicken Dinner, mr.O')
    $('.one').text('yes! O')
    $('.two').text('yes! O')
    $('.three').text('yes! O')
    $('.seven').text('yes! O')
    $('.eight').text('yes! O')
    $('.nine').text('yes! O')
    $('#o_win').text(oWin++)
    turn = 0
    store.over = true
  } else if (seven === o && eight === o && nine === o) {
    $('.message').text('Winner Winner Chicken Dinner, mr.O')
    $('.one').text('yes! O')
    $('.two').text('yes! O')
    $('.three').text('yes! O')
    $('.four').text('yes! O')
    $('.five').text('yes! O')
    $('.six').text('yes! O')
    $('#o_win').text(oWin++)
    turn = 0
    store.over = true
  } else if (one === o && four === o && seven === o) {
    $('.message').text('Winner Winner Chicken Dinner, mr.O!')
    $('.two').text('yes! O')
    $('.three').text('yes! O')
    $('.five').text('yes! O')
    $('.six').text('yes! O')
    $('.eight').text('yes! O')
    $('.nine').text('yes! O')
    $('#o_win').text(oWin++)
    turn = 0
    store.over = true
  } else if (two === o && five === o && eight === o) {
    $('.message').text('Winner Winner Chicken Dinner, mr.O')
    $('.one').text('yes! O')
    $('.three').text('yes! O')
    $('.four').text('yes! O')
    $('.six').text('yes! O')
    $('.seven').text('yes! O')
    $('.nine').text('yes! O')
    $('#o_win').text(oWin++)
    turn = 0
    store.over = true
  } else if (three === o && six === o && nine === o) {
    $('.message').text('Winner Winner Chicken Dinner, mr.O!')
    $('.one').text('yes! O')
    $('.two').text('yes! O')
    $('.four').text('yes! O')
    $('.five').text('yes! O')
    $('.seven').text('yes! O')
    $('.eight').text('yes! O')
    $('#o_win').text(oWin++)
    turn = 0
    store.over = true
  } else if (one === o && five === o && nine === o) {
    $('.message').text('Winner Winner Chicken Dinner, mr.O')
    $('.two').text('yes! O')
    $('.three').text('yes! O')
    $('.four').text('yes! O')
    $('.six').text('yes! O')
    $('.seven').text('yes! O')
    $('.eight').text('yes! O')
    $('#o_win').text(oWin++)
    turn = 0
    store.over = true
  } else if (three === o && five === o && seven === o) {
    $('.message').text('Winner Winner Chicken Dinner, mr.O')
    $('.one').text('yes! O')
    $('.two').text('yes! O')
    $('.four').text('yes! O')
    $('.six').text('yes! O')
    $('.eight').text('yes! O')
    $('.nine').text('yes! O')
    $('#o_win').text(oWin++)
    turn = 0
    store.over = true
  } else if (turn === 9) {
    $('.message').text('Tie!')
    turn = 0
    store.over = true
  } else {
    store.over = false
  }
}

const reset = function () {
  $('.box').removeClass('selected')
  $('.box').text('#')
  $('.message').text('next turn is...')
  $('#signInMessage').text('')
  $('#messageTwo').text('')
  $('input').val('')
  turn = 0
  gameBoard = ['', '', '', '', '', '', '', '', '']
}

const resetScore = function () {
  $('.number-win').text('')
  $('#o_win').text('')
  xWin = 1
  oWin = 1
}

module.exports = {
  gameEvent,
  reset,
  resetScore
}
