import JOURNAL from './JOURNAL.js';
function addEntry(events = [], squirrel = false) {
    let tempJournal = JSON.parse(JSON.stringify(JOURNAL));
    tempJournal.push({ events, squirrel });
    return tempJournal;
}
function phi([n00, n01, n10, n11] = [0, 0, 0, 0]) {
    return (n11 * n00 - n10 * n01) /
        Math.sqrt((n10 + n11) * (n00 + n01) *
            (n01 + n11) * (n00 + n10));
}
function tableFor(event = "", journal = []) {
    if (event === "")
        return [0, 0, 0, 0];
    let table = [0, 0, 0, 0];
    for (let entry of journal) {
        let index = 0;
        if (entry.events.includes(event))
            index += 1;
        if (entry.squirrel)
            index += 2;
        table[index] += 1;
    }
    return table;
}
function journalEvents(journal = []) {
    if (!journal.length)
        return [];
    let events = [];
    for (let entry of journal)
        for (let event of entry.events)
            if (!events.includes(event))
                events.push(event);
    return events;
}
export { addEntry, phi, tableFor, journalEvents };
