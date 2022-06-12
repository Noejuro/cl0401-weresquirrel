import JOURNAL from './utils/JOURNAL.js'
import { addEntry, phi, tableFor, journalEvents } from './utils/correlation.js';

for (let event of journalEvents(JOURNAL)) {
    let correlation: number = phi(tableFor(event, JOURNAL));
    if (correlation > 0.1 || correlation < -0.1) {
        console.log(event + ":", correlation);
    }
}

let testJournal = JSON.parse(JSON.stringify(JOURNAL));

for (let entry of testJournal) {
    if (entry.events.includes("peanuts") &&
        !entry.events.includes("brushed teeth")) {
        entry.events.push("peanut teeth");
    }
}

console.log(phi(tableFor("peanut teeth", testJournal)));