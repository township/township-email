var assert = require('assert')
var nodemailer = require('nodemailer')
var xtend = require('xtend')

var emails = require('./emails')

/**
*
* @name townshipEmail
* @param {Object} config – config object
**/
module.exports = function townshipEmail (config) {
  assert(typeof config === 'object', 'config object is required')
  assert(config.transport, 'config.transport object or string is required')

  config.emails = config.emails || {}
  assert(typeof config.emails === 'object', 'config.emails property must be an object')

  var mailer = nodemailer.createTransport(config.transport)
  var fromEmail = config.fromEmail

  emails = xtend(emails, config.emails)

  function send (options, callback) {
    options.from = options.from || fromEmail
    mailer.sendMail(options, callback)
  }

  function confirm (options, callback) {
    options.html = options.html || emails.confirm(options)
    send(options, callback)
  }

  function welcome (options, callback) {
    options.html = options.html || emails.welcome(options)
    send(options, callback)
  }

  send.confirm = confirm
  send.welcome = welcome
  send.send = send
  return send
}
