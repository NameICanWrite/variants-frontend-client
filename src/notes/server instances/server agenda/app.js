import express from 'express'
import path from 'path'
import {
    dirname
} from 'path'
import {
    fileURLToPath
} from 'url';
import cors from 'cors'
import {
    Agenda
} from 'agenda'
import helmet from 'helmet';

import {
    test,
    botLaunch
} from './services/bot/test/test.js'
import router from './router.js'
import connectDB from './configs/db.js';
import agenda from './jobs/agenda.js'



const app = express()

const port = 5000
const __dirname = dirname(fileURLToPath(
    import.meta.url))


// console.log(agenda)

app.use(cors({
    origin: '*'
}))
app.use(helmet())


app.use(express.json());
app.use(express.urlencoded({
    extended: true
}))
app.use('/', router)

botLaunch()
connectDB()

app.listen(port, () => console.log(`Listening on port ${port}`)); //Line 6

//botLaunch()

let abc = ['a', 'b', 'c']

abc.forEach(c => {
    if (c === 'c') alert(C)
})
