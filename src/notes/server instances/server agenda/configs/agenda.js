import { Agenda } from 'agenda'
let configureMongoDBObj = {
  db: {
    address: process.env.DATABASE,
    collection: "jobs",
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  },
};
const agenda = new Agenda(configureMongoDBObj);

export default agenda
