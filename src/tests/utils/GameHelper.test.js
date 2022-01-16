import { GameHelper } from "../../utils/Utils";

describe('Game Helper test', () => {
    // All tile tests are for 1 x 3 tiles.
    test('should return a score of 10 for two identical non-consecutive symbols for a', () => {
        let gameHelper = new GameHelper(3);
        let tiles = ['A', 'T', 'A'];
        let { scoreDescription } = gameHelper.evaluateScore(tiles);
        expect(scoreDescription.score).toBe(10);
    });

    test('should return a score of 20 for two  consecutive symbols', () => {
        let gameHelper = new GameHelper(3);
        let tiles = ['A', 'A', 'L'];
        let { scoreDescription } = gameHelper.evaluateScore(tiles);
        expect(scoreDescription.score).toBe(20);
    });


    test('should return a score of 100 four consecutive symbols', () => {
        let gameHelper = new GameHelper(3);
        let tiles = ['A', 'A', 'A'];
        let { scoreDescription } = gameHelper.evaluateScore(tiles);
        expect(scoreDescription.score).toBe(100);
    });

    test('can generate tiles', () => {
        let generatedCnt = 4;
        let result = new GameHelper(generatedCnt).generateTiles();
        expect(result.tiles.length).toBe(generatedCnt);
    });
});
