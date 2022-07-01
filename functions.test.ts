const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    it("returns an array", () => {
        expect(shuffleArray).toReturn()
    });

    it("return array should be shuffled", () => {
        expect(shuffleArray).toContainEqual(shuffleArray)
    })
});