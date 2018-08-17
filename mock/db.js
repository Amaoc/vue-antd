const loginApi = require('./api/login.api.js')

let mockApi = {
  ...loginApi,
  'error': {
    'code': -1,
    'message': 'no such api name'
  }
}

module.exports = mockApi
