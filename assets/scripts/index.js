'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')

$(() => {
  setAPIOrigin(location, config)
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

// const sqr1 = document.col-md-4.box.one
let playerOne = []
let playerTwo = []
// let gameBoard = []
const id = '#id'
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
const o = 'o'
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

// different file
// switch player
function switchPlayer (id) {
  if (turn % 2 === 0) {
    playerOne.push(id)
    console.log('x')
    console.log(id)
  } else {
    playerTwo.push(id)
    console.log('o')
    console.log(id)
  }
  turn++
  console.log(playerOne)
  console.log(turn)
}

//
// recognizing who is the winner

function winner (id) {
  if (one === x && two === x && three === x) {
    console.log('Winner is PlayerOne!')
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

// top left -> bottom right
/*
const winner = function () {
  if (
    '#1' === '#5' &&
    '#1' === '#9') {
      console.log('Winner is x')
      }
  else if (
    '#7' === '#5' &&
    '#7' === '#3') {
      console.log('Winner is ')
    }
  else if (
    '#7' === '#5' &&
    '#7' === '#3') {
      console.log('Winner is ')
    }
*/
