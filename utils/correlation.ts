import JOURNAL from './JOURNAL.js'

function addEntry(events: string[], squirrel: boolean) {
    JOURNAL.push({events, squirrel});
  }
  
function phi(table: number[]): number {
    return (table[3] * table[0] - table[2] * table[1]) /
        Math.sqrt((table[2] + table[3]) *
                (table[0] + table[1]) *
                (table[1] + table[3]) *
                (table[0] + table[2]));
}

function tableFor(event, journal): number[] {
    let table: number[] = [0, 0, 0, 0];
    for (let entry of journal) {
        let index: number = 0;
        if (entry.events.includes(event)) index += 1;
        if (entry.squirrel) index += 2;
        table[index] += 1;
    }
    return table;
}

function journalEvents(journal): string[] {
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