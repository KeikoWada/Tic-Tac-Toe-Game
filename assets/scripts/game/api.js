'use strict'

const config = require('../config')
const store = require('../store')

const create = function (data) {
  console.log('data: ', data)
  return $.ajax({
    url: config.apiOrigin + '/games',
    method: 'POST',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const updateGame = function (index, value, over) {
  return $.ajax({
    url: config.apiOrigin + '/games/' + store.game.id,  // or user
    method: 'PATCH',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      'game': {
        'cell': {
          'index': index,
          'value': value
        },
        'over': over
      }
    }
  })
}

module.exports = {
  create,
  updateGame
}
