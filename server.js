const credentials = require('../credentials/bot');
const decrypt = require('src/decrypt');

const Telegraf = require('telegraf');

const app = new Telegraf(credentials.token);

app.command('start', (ctx) => {
  console.log('start', ctx.from);
  ctx.reply('Welcome!');
});

app.on('text', (ctx) => {
  console.log(ctx.message);
  var reply = decrypt(ctx.message.text);
  ctx.reply('👍: ' + reply);
});

app.startPolling();