export default class GameHelper {

    constructor() {
        this.defaultTiles = this.defaultTiles.bind(this);
        this.generateTiles = this.generateTiles.bind(this);
        this.randomTile = this.randomTile.bind(this);
        this.evaluateScore = this.evaluateScore.bind(this);
    }

    defaultTiles = () => ["S", "B", "O", "M"]

    generateTiles = (withEvaluation = true) => {
        let tiles = [
            this.randomTile(),
            this.randomTile(),
            this.randomTile(),
            this.randomTile(),
        ];

        if (withEvaluation) {
            let { scoreDescription } = this.evaluateScore(tiles);
            return { tiles, scoreDescription };
        }

        return { tiles };
    }

    evaluateScore = (tiles) => {
        let headerText = "";
        let bodyText = "";
        let score = 0;
        const tileStr = tiles.join("").toString();
        ///if a character appera more than once, it is a match
        tiles.forEach(tile => {
            if (score > 0) {
                return;
            }

            let cond1 = `${tile}`;
            let cond2 = `${tile}${tile}`;
            let re1 = new RegExp(cond1, "g");
            let re2 = new RegExp(cond2, "g");
            const result1 = tileStr.match(re1);
            const result2 = tileStr.match(re2);
            if (result1 != null && result1.length === 4) {
                headerText = "Winner";
                bodyText = ` four consecutive symbols of ${tile}`;
                score = 100;
            } else if ((result2 != null)) {
                /// Two consecutive symbols, then the prize is 20 dollars
                headerText = "Winner";
                bodyText = `two consecutive symbols of ${tile}`;
                score = 20;
            } else if ((result1 != null && result1.length === 2) && (result2 == null)) {
                ///two identical non-consecutive symbols, the prize is 10 dollars
                headerText = "Winner";
                bodyText = `two identical non-consecutive symbols of ${tile}`;
                score = 10;
            } else {
                headerText = "Try Again";
                bodyText = 'No matches';
            }
            // console.log({ tileStr, result1, result2, score, tile });
        });

        let scoreDescription = {
            header: headerText,
            body: bodyText,
            score
        };
        return { scoreDescription }
    }

    randomTile = () => {
        const tiles = this.defaultTiles();
        const random = Math.floor(Math.random() * tiles.length);
        return tiles[random];
    }
}