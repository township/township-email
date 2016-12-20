var test = require('tape')
var stub = require('nodemailer-stub-transport')

var townshipEmail = require('../index')

test('confirm email', function (t) {
  var mail = townshipEmail({ transport: stub() })

  mail.confirm({
    to: 'sethvincent+emailtest@gmail.com',
    from: 'sethvincent+emailtest@gmail.com',
    url: 'https://example.com/url/for/confirming/email'
  }, function (err, info) {
    t.notOk(err)
    t.ok(info)
    t.end()
  })
})

test('welcome email', function (t) {
  var mail = townshipEmail({ transport: stub() })

  mail.welcome({
    to: 'sethvincent+emailtest@gmail.com',
    from: 'sethvincent+emailtest@gmail.com'
  }, function (err, info) {
    t.notOk(err)
    t.ok(info)
    t.end()
  })
})
