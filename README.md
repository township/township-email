# township-email

A wrapper around nodemailer for township transactional emails.

[![npm][npm-image]][npm-url]
[![travis][travis-image]][travis-url]
[![standard][standard-image]][standard-url]
[![conduct][conduct]][conduct-url]

[npm-image]: https://img.shields.io/npm/v/township-email.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/township-email
[travis-image]: https://img.shields.io/travis/sethvincent/township-email.svg?style=flat-square
[travis-url]: https://travis-ci.org/sethvincent/township-email
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: http://npm.im/standard
[conduct]: https://img.shields.io/badge/code%20of%20conduct-contributor%20covenant-green.svg?style=flat-square
[conduct-url]: CONDUCT.md

## About

This module collection of helper functions for sending authentication/authorization emails.

### Example: confirming an email account

```js
mail.confirm({
  to: 'test@example.com',
  from: 'test@example.com',
  url: 'https://example.com/url/for/confirming/email'
})
```

## Install

```sh
npm install --save township-email
```

## Usage

```js
var townshipEmail = require('township-email')

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
```

## Using nodemailer transports

You can use any nodemailer transport you like with this library. The above example shows basic SMTP usage.

[Check out nodemailer for more information on transports](https://www.npmjs.com/package/nodemailer)

## Writing your own email HTML

You can override any of the emails this module sends be using the `emails` option in the constructor.

Each email is a function that takes an options object and returns a string.

```js
var townshipEmail = require('township-email')

var mail = townshipEmail({
  transport: `smtps://${process.env.GMAIL_USER}%40gmail.com:${process.env.GMAIL_PASS}@smtp.gmail.com`,
  emails: {
    confirm: confirm,
    welcome: welcome
  }
})

function confirm (options) {
  return `<div>
    <p>Hello!</p>
    <p>Verify your email address by clicking this link:</p>
    <p><b><a href="${options.url}">Confirm your account</a></b></p>
    <p>Or by following this url:</p>
    <p><a href="${options.url}">${options.url}</a></p>
  </div>`
}

function welcome (options) {
  return `<div>
    <p>Welcome, and thank you for creating an account!</p>
    <p>Please reply to this email if you have any questions.</p>
  </div>`
}
```

### Examples
- [Basic example](examples/basic-usage.js)

## Contributing

Contributions are welcome! Please read the [contributing guidelines](CONTRIBUTING.md) first.

## Conduct

It's important that this project contributes to a friendly, safe, and welcoming environment for all, particularly for folks that are historically underrepresented in technology. Read this project's [code of conduct](CONDUCT.md)

## Change log

Read about the changes to this project in [CHANGELOG.md](CHANGELOG.md). The format is based on [Keep a Changelog](http://keepachangelog.com/) and this project adheres to [Semantic Versioning](http://semver.org/).

## License

[ISC](LICENSE.md)
