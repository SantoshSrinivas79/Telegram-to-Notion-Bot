const {Telegraf} = require('telegraf')
const {apiKey} = require('./apiKey')
const {Markup} = require('telegraf')

const generateAdminFirebase = require('./Firebase Querys/GenerateAdminFirebase')

const addUser  = require('./Firebase Querys/AddUser')
const determinateDBselected = require('./Firebase Querys/determinateDBselected')

const bot = new Telegraf(apiKey)
const db = generateAdminFirebase()

bot.start(async (ctx) => {

    ctx.reply('Bot Started')
    console.log(ctx.update.message.from.id)
    
    await addUser(db, ctx.update.message.from.id)
})

bot.help((ctx) => {

    ctx.reply('This is a bot for integrate Notion to Telegram. You say to what Database send your message, and is added.')
})

bot.command(['auth', 'Auth', 'AUTH'], (ctx) => {

    ctx.reply('Click on here 👇 for authorize the bot to write in your Notion Database', Markup.inlineKeyboard([
            Markup.button.url("Go to Notion", "https://www.google.com"),
            //! CREO QUE NOTION DEVUELVE UN CODIGO, ASI QUE, CREAR UNA CONDICIONAL DE SI ESTOY ESPERANDO EL CODIGO. SI SI, ACEPTARLO, CIFRARLO, GUARDARLO EN LA BD Y MODIFICAR ESTE MENSAJE PARA QUE TENGA COMO BOTONES CADA UNA DE LAS BASES DE DATOS AGREGADAS.
        ])
    )
})

bot.action('https://www.google.com', (ctx) => {

    ctx.reply('aaa')
})


bot.hears('❤️', (ctx) => {

    ctx.reply('❤️')
})

// bot.on('text', async (ctx) => {

//     const NotionDB = await determinateDBselected(db, ctx.update.message.from.id)
    
//     if (!NotionDB) {

//         ctx.reply(`The next message is gonna sended to ${ctx.update.message.text} DB`)
//     }

//     else {

//         ctx.reply('Message added to DB')
//     }
// })

bot.launch()