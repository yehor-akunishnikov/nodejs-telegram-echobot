const { Telegraf } = require('telegraf');
const bot = new Telegraf(process.env.BOT_TOKEN);
bot.telegram.setWebhook('https://myaddress.com');

bot.command('start', ctx => {
    console.log(ctx.from)
    bot.telegram.sendMessage(ctx.chat.id, 'Hello there! Welcome to the Code Capsules telegram bot.\nI echo messages. Please try it', {
    })
})

// copy every message and send to the user
bot.on('message', (ctx) => ctx.telegram.sendCopy(ctx.chat.id, ctx.message))
  
bot.startWebhook('/secret-path', null, process.env.PORT)