var express = require('express')
var morgan = require('morgan')
var bodyParser = require('body-parser')

var VERIFY_TOKEN = process.env.SLACK_VERIFY_TOKEN
if (!VERIFY_TOKEN) {
  console.error('SLACK_VERIFY_TOKEN is required')
  process.exit(1)
}
var PORT = process.env.PORT
if (!PORT) {
  console.error('PORT is required')
  process.exit(1)
}

var app = express()
app.use(morgan('dev'))

app.route('/beepboop')
  .get(function (req, res) {
    res.sendStatus(200)
  })
  .post(bodyParser.urlencoded({ extended: true }), function (req, res) {
    if (req.body.token !== VERIFY_TOKEN) {
      return res.sendStatus(401)
    }

    var message = 'boopbeep'

    // Handle any help requests
    if (req.body.text === 'help') {
      message = "Sorry, I can't offer much help, just here to beep and boop"
    }

    res.json({
      response_type: 'ephemeral',
      text: message
    })
  })

app.listen(PORT, function (err) {
  if (err) {
    return console.error('Error starting server: ', err)
  }

  console.log('Server successfully started on port %s', PORT)
})
