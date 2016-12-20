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

module.exports = {
  confirm: confirm,
  welcome: welcome
}
