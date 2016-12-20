var townshipEmail = require('../index')

var mail = townshipEmail({
  transport: `smtps://${process.env.GMAIL_USER}%40gmail.com:${process.env.GMAIL_PASS}@smtp.gmail.com`
})

mail.confirm({
  to: 'sethvincent+emailtest@gmail.com',
  from: 'sethvincent+emailtest@gmail.com',
  url: 'https://example.com/url/for/confirming/email'
}, function (err) {
  console.log(err)
})
