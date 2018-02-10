'use strict'

const config = require('../config')
const store = require('../store')

const create = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/examples',
    method: 'POST',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=<token>'
    },
    data
  })
}

module.exports = {
  create
}
