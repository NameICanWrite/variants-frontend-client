import { Telegraf } from 'telegraf'
import fs from 'fs'

import dotenv from 'dotenv'
import { addChat } from './handleData.js'

import {test} from './test/test.js'

dotenv.config({path: './server/.env'})

const bot = new Telegraf(process.env.BOT_TOKEN)

bot.start((ctx) => {
    ctx.reply('I am working')
    addChat(ctx.from.id);
})

bot.command('test', test)

// keyboardActions.forEach((action) => bot.action(action, () => console.log(123)))

export default bot
