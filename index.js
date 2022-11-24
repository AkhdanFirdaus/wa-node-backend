const qrcode = require('qrcode-terminal')

const { Client, LocalAuth } = require('whatsapp-web.js')

const client = new Client({
  authStrategy: new LocalAuth({
    clientId: 'client-1'
  })
})

client.on('ready', () => {
  console.log('Client is ready!')
})

client.on('qr', qr => {
  qrcode.generate(qr, {small: true})
})

client.on('authenticated', () => {
  console.log('Authenticated')
})

client.on('message', message => {
  console.log(message.body)

  if (message.body === '!test') {
    message.reply('Maaf sedang tidak ingin diganggu')
  }
})

client.initialize()
