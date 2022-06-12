import JOURNAL from './JOURNAL.js'
import IEntry from '../interfaces/Journal.js';

function addEntry(events: string[] = [], squirrel: boolean = false) {
    let tempJournal = JSON.parse(JSON.stringify(JOURNAL));
    tempJournal.push({events, squirrel});
    return tempJournal;
}
  
function phi([n00, n01, n10, n11]: number[] = [0, 0, 0, 0]): number {
    return (n11 * n00 - n10 * n01) /
    Math.sqrt((n10 + n11) * (n00 + n01) *
                (n01 + n11) * (n00 + n10));
}

function tableFor(event: string = "", journal: IEntry[] = []): number[] {
    if(event === "") return [0,0,0,0];

    let table: number[] = [0, 0, 0, 0];
    for (let entry of journal) {
        let index: number = 0;
        if (entry.events.includes(event)) index += 1;
        if (entry.squirrel) index += 2;
        table[index] += 1;
    }
    return table;
}

function journalEvents(journal: IEntry[] = []): string[] {
    if(!journal.length) return []
    let events: string[] = [];
    for (let entry of journal)
        for (let event of entry.events)
            if (!events.includes(event))
                events.push(event);
    return events;
}

export {
    addEntry,
    phi,
    tableFor,
    journalEvents
}