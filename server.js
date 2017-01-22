const Telegraf = require('telegraf');
const express = require('express');

const decrypt = require('./src/decrypt');

const app = new Telegraf(process.env.BOT_TOKEN);

app.command('start', (ctx) => {
  console.log('start', ctx.from);
  ctx.reply('This machine has no brain use your own!');
});

app.on('text', (ctx) => {
  console.log(ctx.message);
  var reply = decrypt(ctx.message.text);
  ctx.reply('👍: ' + reply);
});

app.startPolling();

const web = express(); // needed for Heroku not to consider app failed

web.set('port', (process.env.PORT || 5000));

web.get('/', function(request, response) {
  response.send('Hello, Heroku!\n\nThis response is just to make Heroku happy.')
});

web.listen(web.get('port'), function() {
  console.log('Node app is running on port', web.get('port'));
});


