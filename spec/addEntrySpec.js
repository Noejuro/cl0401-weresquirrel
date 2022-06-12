import { addEntry } from '../dist/utils/correlation.js'

describe('Testing addEntry function', () => {
    it('Events = ["pizza", "peanut", "brush teeth"] squirrel = false', () => {
        const result = addEntry(["pizza", "peanut", "brush teeth"], false).pop();
        expect(result).toEqual({events: ["pizza", "peanut", "brush teeth"], squirrel: false});
    })
    it('Events = ["peanut"] squirrel = true', () => {
        const result = addEntry(["peanut"], true).pop();
        expect(result).toEqual({events: ["peanut"], squirrel: true});
    })
    it('Events = [] squirrel = true', () => {
        const result = addEntry([], true).pop();
        expect(result).toEqual({events: [], squirrel: true});
    })
    it('Events = undefined squirrel = true', () => {
        const result = addEntry(undefined, true).pop();
        expect(result).toEqual({events: [], squirrel: true});
    })
})