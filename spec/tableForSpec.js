import { tableFor } from '../dist/utils/correlation.js'
import JOURNAL from '../dist/utils/JOURNAL.js';

describe('Testing tableFor function', () => {
    it('Event = "pizza"', () => {
        const result = tableFor("pizza", JOURNAL);
        expect(result).toEqual([76, 9, 4, 1]);
    })

    it('Event = "peanuts"', () => {
        const result = tableFor("peanuts", JOURNAL);
        expect(result).toEqual([77, 8, 0, 5]);
    })

    it('Event = "brushed teeth"', () => {
        const result = tableFor("brushed teeth", JOURNAL);
        expect(result).toEqual([21, 64, 5, 0]);
    })

    it('Event = ""', () => {
        const result = tableFor("", JOURNAL);
        expect(result).toEqual([0, 0, 0, 0]);
    })

    it('Event = undefined', () => {
        const result = tableFor(undefined, JOURNAL);
        expect(result).toEqual([0, 0, 0, 0]);
    })
})