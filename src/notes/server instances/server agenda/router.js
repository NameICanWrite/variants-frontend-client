import express from 'express'
import fs from 'fs'

import { addScheduledLetter } from './models/handleLetters.js';
import { testSchedule } from './test/test.js';
// import { createSimpleSchedule } from ''

const router = express.Router()
router.use(express.json());
router.use(express.urlencoded({extended: true}))


router.post('/test', (req, res) => {
    if (req.body.stuff) {
        //test()
    }
})

router.post('/scheduledLetters', (req, res) => {
    addScheduledLetter(req.body)
    testSchedule(req.body)
})

export default router