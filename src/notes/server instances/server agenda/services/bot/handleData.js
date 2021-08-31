import fs from 'fs'
import util from 'util'

export async function addChat(id) {
    const file = './server/bot/chats.txt'
    const chatsString = await util.promisify(fs.readFile)(file, 'utf8')
    const chats = chatsString.split(',')
    if (!chats.includes(id.toString())) {
        fs.appendFile(file, id + ",", function(){});
    }
}
