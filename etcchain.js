var request = require('request-promise')

var API = function() {
  this.options = {
    base: 'https://etcchain.com/api/v1/',
    uri: '',
    headers: {
      'User-Agent': 'Request-Promise'
    },
    json: true
  };
}

API.prototype._request = function(endpoint) {
  try {
    this.options.uri = this.options.base + endpoint
    console.log(this.options)
    return request(this.options).then(function(response) {
      console.log(response)
      return response
    }).catch(handleError)
  } catch (err) {
    return console.log(err)
  }
}

API.prototype.getBalance = function(address) {
  var endpoint = 'getAddressBalance?address=' + address
  return this._request(endpoint);
}

function handleError(e) {
  throw e.error || e || 'Unexpected error'
}

module.exports = API;
