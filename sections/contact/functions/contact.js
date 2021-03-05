exports.handler = async (event, _context, callback) => {
  const Mailgun = require('mailgun.js')
  const formData = require('form-data')
  const mailgun = new Mailgun(formData)

  const mg = mailgun.client({
    username: 'api',
    key: process.env.MAILGUN_API_KEY,
  })

  const submittedData = JSON.parse(event.body)

  try {
    const response = await mg.messages.create(process.env.MAILGUN_DOMAIN, {
      from: 'inthaHouse <inthahouse12@outlook.com>',
      to: submittedData.email,
      subject: submittedData.subject,
      text: submittedData.body,
      html: '<h1>Testing some Mailgun awesomeness!</h1>',
    })

    console.log(response)

    return {
      statusCode: 200,
      body: response.message,
    }
  } catch (error) {
    throw new Error(error)
  }
}
