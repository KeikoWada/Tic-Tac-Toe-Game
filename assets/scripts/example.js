const element = document.createElement('div')
element.id = 'myDiv'
// element.innerHTML = 'Hello World!'
document.body.appendChild(element)

// const playerOne = []
// const playerTwo = []
const gameBoard = []
const x = 'x'
const o = 'o'

// here is the switchPlayer -> after click, the icon shows up
// changing the icon when switch players -> icon will push into the array
let turn = 0
const playGame = function () {
  switchPlayer(this.id)
  winner(this.id)
  $(this).addClass('selected')
  $(this).off('click')
  taken()
}

function switchPlayer (id) {
  if (turn % 2 === 0) {
    gameBoard.push(id)
    document.getElementById(id).innerHTML = 'x'
    $('.message').text('next turn is you, team O!')
  } else {
    gameBoard.push(id)
    // gameBoard.push(playerTwo[id])
    document.getElementById(id).innerHTML = 'o'
    $('.message').text('next turn is you, team X!')
  }
  turn++
  console.log(gameBoard)
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
    $('.message').text('Winner Winner Chicken Dinner, Xman!')
    $('div').off('click')
  } else if (four === x && five === x && six === x) {
    $('.message').text('Winner Winner Chicken Dinner, Xman!')
    $('div').off('click')
  } else if (seven === x && eight === x && nine === x) {
    $('.message').text('Winner Winner Chicken Dinner, Xman!')
    $('div').off('click')
  } else if (one === x && five === x && nine === x) {
    $('.message').text('Winner Winner Chicken Dinner, Xman!')
    $('div').off('click')
  } else if (three === x && five === x && seven === x) {
    $('.message').text('Winner Winner Chicken Dinner, Xman!')
    $('div').off('click')
  } else if (one === x && four === x && seven === x) {
    $('.message').text('Winner Winner Chicken Dinner, mr.O')
    $('div').off('click')
  } else if (two === x && five === x && eight === x) {
    $('.message').text('Winner Winner Chicken Dinner, mr.O')
    $('div').off('click')
  } else if (three === x && six === x && nine === x) {
    $('.message').text('Winner Winner Chicken Dinner, mr.O')
    $('div').off('click')
  } else if (one === o && two === o && three === o) {
    $('.message').text('Winner Winner Chicken Dinner, mr.O!')
    $('div').off('click')
  } else if (four === o && five === o && six === o) {
    $('.message').text('Winner Winner Chicken Dinner, mr.O')
    $('div').off('click')
  } else if (seven === o && eight === o && nine === o) {
    $('.message').text('Winner Winner Chicken Dinner, mr.O!')
    $('div').off('click')
  } else if (one === o && five === o && nine === o) {
    $('.message').text('Winner Winner Chicken Dinner, mr.O')
    $('div').off('click')
  } else if (three === o && five === o && seven === o) {
    $('.message').text('Winner Winner Chicken Dinner, mr.O')
    $('div').off('click')
  } else if (one === o && four === o && seven === o) {
    $('.message').text('Winner Winner Chicken Dinner, mr.O')
    $('div').off('click')
  } else if (two === o && five === o && eight === o) {
    $('.message').text('Winner Winner Chicken Dinner, mr.O')
    $('div').off('click')
  } else if (three === o && six === o && nine === o) {
    $('.message').text('Winner Winner Chicken Dinner, mr.O')
    $('div').off('click')
  } else if (turn === 9) {
    $('.message').text('Tie!')
    $('div').off('click')
  }
}

// taken function
const taken = function () {
  $('.selected').on('click', function () {
    $('.message').text('it\'s already taken')
  })
}

// $('div').text('#')
// $('div').removeId('o')
// $('div').removeId('x')
// $('div').removeClass('selected')
// $(this).removeClass('selected').text('#')
const reset = function () {
  $('.reset').on('click', function (id) {
    $('selected').each.removeClass('selected')
  })
}

const gameEvent = () => {
  $('.box').on('click', playGame)
}

module.exports = {
  gameEvent,
  reset
}
