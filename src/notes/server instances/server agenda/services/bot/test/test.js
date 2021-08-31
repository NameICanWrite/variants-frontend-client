import {
    letter,
    letter2
} from './template.js'
import deliverLetter from '../controllers/deliverLetter.js'
import bot from '../Bot.js'

export function test() {
    deliverLetter(letter, '555439833')
}

export function botLaunch() {
    bot.launch()
}