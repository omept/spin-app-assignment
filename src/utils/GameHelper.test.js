import GameHelper from "./GameHelper";

test('should return a score of 10 for two identical non-consecutive symbols', () => {
    let gameHelper = new GameHelper();
    let tiles = ['A', 'T', 'A', 'B'];
    let { scoreDescription } = gameHelper.evaluateScore(tiles);
    expect(scoreDescription.score).toBe(10);
});

test('should return a score of 20 for two  consecutive symbols', () => {
    let gameHelper = new GameHelper();
    let tiles = ['A', 'A', 'L', 'B'];
    let { scoreDescription } = gameHelper.evaluateScore(tiles);
    expect(scoreDescription.score).toBe(20);
});


test('should return a score of 100 four consecutive symbols', () => {
    let gameHelper = new GameHelper();
    let tiles = ['A', 'A', 'A', 'A'];
    let { scoreDescription } = gameHelper.evaluateScore(tiles);
    expect(scoreDescription.score).toBe(100);
});

test('can generate tiles', () => {
    let result = new GameHelper().generateTiles();
    expect(result.tiles.length).toBe(4);
});
