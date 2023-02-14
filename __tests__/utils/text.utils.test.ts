import { includeNormalizedStrings } from "@/utils/text.utils";

describe('includeNormalizedStrings', () => {
    it('Should verify as false two different strings', () => {
        const differentStrings = includeNormalizedStrings('AAA', 'BBB')

        expect(differentStrings).toBe(false)
    })

    it('Should verify as true two similar strings differing only in uppercasing', () => {
        const similarStrings = includeNormalizedStrings('AAA', 'aaa');

        expect(similarStrings).toBe(true)
    })

    it('Should verify as false when the second string surpases the first one', () => {
        const secondsStringLargerThanFirst = includeNormalizedStrings('AAA', 'AAAA');

        expect(secondsStringLargerThanFirst).toBe(false)
    })

    it('Should verify as true when the seconds string is included in the first one with accents', () => {
        const secondStringIncluded = includeNormalizedStrings('Condé', 'Conde');

        expect(secondStringIncluded).toBe(true)
    })
})