import bot from '../Bot.js'
import { Markup } from 'telegraf'

export default function deliverLetter(letter, chatId = '555439833') {
    //called extra in telegraf
    let sensor
    const text = 
        `
<b>${letter.markup.name.toUpperCase()}</b>

<b>Analyze:</b>
<i>${letter.sourceData.plain.text}</i>

<b>Calculate value:</b>
<code class="language-javascript">${letter.expression.text}</code>
\   \   `
    switch(letter.expression.expectedType) {
        case 'bool': 
            sensor = keyboards.bool(letter.markup.id, (key, ctx) => answerLetter(key, ctx, letter))
    }
    const extra = {
        parse_mode: 'HTML',
        ...sensor
    }
    bot.telegram.sendMessage(chatId, text, extra)
}

export function answerLetter(key, ctx, letter) {
    ctx.reply(
        `
letter <b>${letter.markup.name.toUpperCase()}</b>  answered.
<i>You said:</i>
<code>(${letter.expression.text}) == ${key}</code>
        `, 
    {parse_mode: 'HTML'})

    ctx.answerCbQuery()
    ctx.editMessageReplyMarkup()
}

export const keyboards = {
    bool: function (id, callback, label = 'letter') {
        const actions = {
            true: `${label}:${id}:true`,
            false: `${label}:${id}:false`
        }
        const markup = Markup.inlineKeyboard([
            Markup.button.callback('Yes', actions.true),
            Markup.button.callback('No', actions.false)
        ])
        //!should be slow one
        Object.keys(actions).forEach(key => {
            bot.action(actions[key], (ctx) => {
                console.log(actions[key])
                callback(key, ctx)
            })
        })
        return markup
    }
}