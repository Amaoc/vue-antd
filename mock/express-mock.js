const express = require('express')
const bodyParser = require('body-parser')
const dbApi = require('./db')
const config = require('../config')

// express 配置server
var apiServer = express()
apiServer.use(bodyParser.urlencoded({ extended: true }))
apiServer.use(bodyParser.json())
var apiRouter = express.Router()
apiRouter.route('/:apiName') // 接口路径
  .all(function (req, res) {
    if (dbApi[req.params.apiName]) {
      res.json(dbApi[req.params.apiName])
    } else {
      res.json(dbApi['error'])
    }
  })

apiServer.use('/mockapi', apiRouter)
apiServer.listen(config.dev.mockPort, function (err) {
  if (err) {
    console.log(err)
    return
  }
  console.log('Listening at http://localhost:' + config.dev.mockPort + '\n')
})
