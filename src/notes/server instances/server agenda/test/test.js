import { createSimpleSchedule } from "../controllers/scheduleController.js"

export async function testSchedule(letter) {
    let from = new Date()
    let to = new Date()
    to.setSeconds(parseInt(from.getSeconds()) + 10)

    const deliveryId = "deliver:letter:" + letter.markup.id

    console.log('now: ' + from)
    console.log('will do the job: ' + to + ' id: ' + deliveryId)

    createSimpleSchedule(letter, to)

    console.log('scheduled: ' + deliveryId)
}