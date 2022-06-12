import { phi } from '../dist/utils/correlation.js'

describe('Testing phi function', () => {
    it('Two-by-two table = [76, 9, 4, 1]', () => {
        const result = phi([76, 9, 4, 1]);
        expect(result).toEqual(0.06859943405700354);
    })

    it('Two-by-two table = [45, 14, 32, 5]', () => {
        const result = phi([45, 14, 32, 5]);
        expect(result).toEqual(-0.12478311766407547);
    })

    it('Two-by-two table = [0, 0, 0, 0]', () => {
        const result = phi([0, 0, 0, 0]);
        expect(result).toEqual(NaN);
    })

    it('Two-by-two table = undefined', () => {
        const result = phi();
        expect(result).toEqual(NaN);
    })
})