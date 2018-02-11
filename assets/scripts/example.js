const element = document.createElement('li')
element.id = 'myDiv'
// element.innerHTML = 'Hello World!'
document.body.appendChild(element)

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
  switchPlayer(this.id)
  winner(this.id)
  $(this).addClass('selected')
  $('.selected').off('click')
  taken()
  console.log(this)
}

// const indexOne = '.one' && indexOne = gameBoard[0]
function switchPlayer (id) {
  if (turn % 2 === 0) {
    gameBoard.splice(id, 1, 'x')
    document.getElementById(id).innerHTML = 'x'
    $('.message').text('next turn is you, team O!')
  } else {
    gameBoard.splice(id, 1, 'o')
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
    $('li').off('click')
    turn = 0
  } else if (four === x && five === x && six === x) {
    $('.message').text('Winner Winner Chicken Dinner, Xman!')
    $('li').off('click')
    turn = 0
  } else if (seven === x && eight === x && nine === x) {
    $('.message').text('Winner Winner Chicken Dinner, Xman!')
    $('li').off('click')
  } else if (one === x && five === x && nine === x) {
    $('.message').text('Winner Winner Chicken Dinner, Xman!')
    $('li').off('click')
  } else if (three === x && five === x && seven === x) {
    $('.message').text('Winner Winner Chicken Dinner, Xman!')
    $('li').off('click')
  } else if (one === x && four === x && seven === x) {
    $('.message').text('Winner Winner Chicken Dinner, mr.O')
    $('li').off('click')
  } else if (two === x && five === x && eight === x) {
    $('.message').text('Winner Winner Chicken Dinner, mr.O')
    $('li').off('click')
  } else if (three === x && six === x && nine === x) {
    $('.message').text('Winner Winner Chicken Dinner, mr.O')
    $('li').off('click')
  } else if (one === o && two === o && three === o) {
    $('.message').text('Winner Winner Chicken Dinner, mr.O!')
    $('li').off('click')
  } else if (four === o && five === o && six === o) {
    $('.message').text('Winner Winner Chicken Dinner, mr.O')
    $('li').off('click')
  } else if (seven === o && eight === o && nine === o) {
    $('.message').text('Winner Winner Chicken Dinner, mr.O!')
    $('li').off('click')
  } else if (one === o && five === o && nine === o) {
    $('.message').text('Winner Winner Chicken Dinner, mr.O')
    $('li').off('click')
  } else if (three === o && five === o && seven === o) {
    $('.message').text('Winner Winner Chicken Dinner, mr.O')
    $('li').off('click')
  } else if (one === o && four === o && seven === o) {
    $('.message').text('Winner Winner Chicken Dinner, mr.O')
    $('li').off('click')
  } else if (two === o && five === o && eight === o) {
    $('.message').text('Winner Winner Chicken Dinner, mr.O')
    $('li').off('click')
  } else if (three === o && six === o && nine === o) {
    $('.message').text('Winner Winner Chicken Dinner, mr.O')
    $('li').off('click')
  } else if (turn === 9) {
    $('.message').text('Tie!')
    $('li').off('click')
  }
}

// taken function
const taken = function () {
  $('.selected').on('click', function () {
    $('.message').text('it\'s already taken')
  })
}

const reset = function () {
  $('.reset').click(function () {
    console.log('hi')
    $('li').val('')
    $('li').removeClass('selected')
    $('li').text('#')
    // $('li').stop(taken)
    turn = 0
    gameBoard = []
    /*
const reset = function () {
  $('.reset').on('click', function () {
    console.log('hi')
    $('li').text('#')
    $('li').removeClass('selected')
    $('li').removeAttr('x')
    $('li').removeAttr('o')
    // $('li').removeClass('btn-primary')
    // $('li').removeClass('btn-info') */

  } )
}

const gameEvent = () => {
  $('.box').on('click', playGame)
}

module.exports = {
  gameEvent,
  reset
}
