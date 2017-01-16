const credentials = require('../credentials/bot')

const Telegraf = require('telegraf')

const app = new Telegraf(credentials.token)

app.command('start', (ctx) => {
  console.log('start', ctx.from)
  ctx.reply('Welcome!')
})

app.on('text', (ctx) => {
  console.log(ctx.message)
  ctx.reply('👍: ' + ctx.message.text)
})

app.startPolling()