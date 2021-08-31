import deliverLetter from "../../controllers/deliverLetter.js";

const defineJob = (agenda) =>
agenda.define('Letter Delivery', async function (job) {
  const {
    letter,
    to
  } = job.attrs.data
  console.log(`'job is done, curent time: '` + to)
  deliverLetter(letter)
  console.log('letter delivered')
});

export default defineJob