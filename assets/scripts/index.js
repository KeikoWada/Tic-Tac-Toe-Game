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
/*
const one = '#1'
const two = '#2'
const three = '#3'
const four = '#4'
const five = '#5'
const six = '#6'
const seven = '#7'
const eight = '#8'
const nine = '#9'
const x = 'x'
// const o = 'o'
*/
// player click -> function 'switchPlayer' happens
$(() => {
  $('.box').on('click', playGame)
})

// here is the switchPlayer -> after click, the icon shows up
// changing the icon when switch players -> icon will push into the array
let turn = 0
const playGame = function () {
  $(this).addClass('selected')
  switchPlayer(this.id)
  winner(this.id)
  $(this).off('click')
}

function switchPlayer (id) {
  if (turn % 2 === 0) {
    playerOne.push(id)
    gameBoard.push(playerOne)
    console.log('x')
    console.log(id)
  } else {
    playerTwo.push(id)
    gameBoard.push(playerTwo[id])
    console.log('o')
    console.log(id)
  }
  turn++
  console.log(playerOne)
  console.log(turn)
}

/* recognizing who is the winner
 const box = []
const index = function () {
  for (let i = 0; i < index.length; i++) {
    box = gameBoard[i]
  }
}
*/

// function winner () {
// if (gameBoard[0] === x && gameBoard[1] === x && gameBoard[2] === x) {
// console.log('Winner is PlayerOne!')
//  }
// }

function winner (id) {
  const one = $('#1').attr()
  const two = $('#2').attr()
  const three = $('#3').attr()
  console.log('im here!' + one)
  if (one === x && two === x && three === x) {
    console.log('Winner is PlayerOne!')
  }
}
/*
  } else if (four === x && five === x && six === x) {
    console.log('Winner is PlayerOne!')
  } else if (seven === x && eight === x && nine === x) {
    console.log('Winner is PlayerOne!')
  } else if (one === x && five === x && nine === x) {
    console.log('Winner is PlayerOne!')
  } else if (three === x && five === x && seven === x) {
    console.log('Winner is PlayerOne!')
  } else if (one === o && two === o && three === o) {
    console.log('Winner is PlayerTwo!')
  } else if (four === o && five === o && six === o) {
    console.log('Winner is PlayerTwo!')
  } else if (seven === o && eight === o && nine === o) {
    console.log('Winner is PlayerTwo!')
  } else if (one === o && five === o && nine === o) {
    console.log('Winner is PlayerTwo!')
  } else if (three === o && five === o && seven === o) {
    console.log('Winner is PlayerTwo!')
  } else if (turn === 9) {
    console.log('Tie!')
  }
}

const winCondition = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [6, 4, 2]
]

const winner = function (arr) {
  return arr === 'x'
}

console.log(playerOne.some(winCondition))
if (winner === true) {
  console.log('winner is PlayerOne!')
}

  } else if (playerTwo.some(winCondition) === true) {
    console.log('winner is PlayerTwo!')
  } else if (turn === 9) {
    console.log('Tie!')
  }
}

// top left -> bottom right
const one = '.one'
// const two = '.two'
const three = '.three'
// const four = '.four'
const five = '.five'
// const six = '.six'
const seven = '.seven'
// const eight = '.eight'
const nine = '.nine'

const winner = function () {
  console.log(one)
  if (one === five && five === nine) {
    console.log('Winner is x')
  } else if (seven === five && seven === three === x) {
    console.log('Winner is ')
  } else if (seven === five && seven === three === x) {
    console.log('Winner is ')
  }
}
*/
