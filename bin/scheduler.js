const schedule = require("node-schedule");
const every = require("every.js");
const parse = require("date-fns/parse");
const subHours = require("date-fns/subHours");

// Module permettant de lancer des écouteurs de date
class Scheduler {
  constructor() {
    // Ecouteurs
    this.jobs = [];
  }

  // Ajouter un écouteur d'une date, avec une fonction à exécuter à cette date
  on(dateStr, cb) {
    const hoursLeft = 48; /* Alert 48 hours before */
    const alertDate = subHours(parse(dateStr), hoursLeft);

    this.jobs.push([schedule.scheduleJob(alertDate, cb)]);
  }

  // Exécuter une fonction à une fréquence définie
  each(freq, cb) {
    every(`${freq} hours`, cb);
  }
}

module.exports = new Scheduler();
