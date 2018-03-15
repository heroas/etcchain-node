var request = require('request-promise')
var q = require('q')

var ETCCHAIN = function() {
  this.options = {
    base: 'https://etcchain.com/api/v1/',
    uri: '',
    headers: {
      'User-Agent': 'Request-Promise'
    },
    json: true
  };
}

ETCCHAIN.prototype._request = function(endpoint) {
  try {
    this.options.uri = this.options.base + endpoint
    console.log(this.options)
    return request(this.options).then(function(response) {
      console.log(response)
      return response
    }).catch(handleError)
  } catch (err) {
    return q.reject(err)
  }
}

ETCCHAIN.prototype.getBalance = function(address) {
  var endpoint = 'getAddressBalance?address=' + address
  return this._request(endpoint);
}

ETCCHAIN.prototype.getIndex = function() {
  var endpoint = 'getIndex'
  return this._request(endpoint);
}

ETCCHAIN.prototype.getTransactionsByAddress = function(address, page, offset, sort) {
  var endpoint = 'getTransactionsByAddress?address=' + address + '&page=' + page + '&offset=' + offset + '&sort=' + sort
  return this._request(endpoint);
}


function handleError(e) {
  throw e.error || e || 'Unexpected error'
}

module.exports = ETCCHAIN;
