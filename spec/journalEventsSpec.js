import { journalEvents } from '../dist/utils/correlation.js'
import JOURNAL from '../dist/utils/JOURNAL.js';

describe('Testing journalEvents function', () => {
    it('Journal = JOURNAL.json', () => {
        const result = journalEvents(JOURNAL);
        expect(result).toEqual([
            'carrot',       'exercise',
            'weekend',      'bread',
            'pudding',      'brushed teeth',
            'touched tree', 'nachos',
            'cycling',      'brussel sprouts',
            'ice cream',    'computer',
            'potatoes',     'candy',
            'dentist',      'running',
            'pizza',        'work',
            'beer',         'cauliflower',
            'lasagna',      'lettuce',
            'television',   'spaghetti',
            'reading',      'peanuts'
          ]);
    })

    it('Journal = undefined', () => {
        const result = journalEvents();
        expect(result).toEqual([]);
    })
})