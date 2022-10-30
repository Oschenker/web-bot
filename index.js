const TelegramBot = require('node-telegram-bot-api');

// replace the value below with the Telegram token you receive from @BotFather
const token = '5607906910:AAEZllfu1l3xpaF-DJAih5jKmrx-xFzShwQ';

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});

// Web-App url
webAppUrl = 'https://delicate-piroshki-dd55ad.netlify.app/'

bot.on('message', async (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text;

    if(text === '/start') {
        await bot.sendMessage(chatId, 'Press button below', {
                reply_markup: {
                    keyboard: [
                        [{text: 'Fill a form'}]
                    ]
                }
            }

        );
    }

    
    if(text === '/help') {
        await bot.sendMessage(chatId, 'Press this button', {
                reply_markup: {
                    inline_keyboard: [
                        [{text: 'Order now', web_app: {url: webAppUrl}}]
                    ]
                }
            }

        );
    }
});