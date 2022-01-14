import React, { useState, useEffect } from 'react'
import PlayState from '../utils/PlayState';
import MessageBoard from './MessageBoard';




function GameScreen(props) {
    let { gameState, onAnimateTilesEnd, onAnimateTilesStart } = props;
    let { tiles, scoreDescription } = gameState.gameHelperState;
    let [animationEnded, setAnimationEnded] = useState(false);
    let [animTiles, setAnimTiles] = useState([]);
    useEffect(() => {
        if (gameState.playState === PlayState.ENDED) {
            animateTile(tiles);
        }
    }, [gameState.playState, tiles]);


    let messageBoard = <MessageBoard scoreDescription={scoreDescription} gameState={gameState} />;
    let animateTile = (tiles) => {
        onAnimateTilesStart();
        setAnimationEnded(false);
        let i = 0;
        let holdr = [];
        let intrvlDsply = setInterval(() => {
            if (tiles[i]) {

                holdr.push(tiles[i]);
                let newTiles = [...holdr];
                if (i === 3) {
                    i = 0;
                    holdr = [];
                    setAnimTiles(newTiles);
                    setAnimationEnded(true);
                    onAnimateTilesEnd();
                    clearInterval(intrvlDsply);

                } else {
                    i += 1;
                    setAnimTiles(newTiles);
                }
            }
        }, 1000);
    }


    return (
        <div>
            <div className='container game-screen'>
                <div className='row item'>
                    <div className='col-md-12 auto-margin'>
                        {gameState.playState === PlayState.IDLE ? tiles.toString() :
                            gameState.playState === PlayState.ENDED ? animTiles.toString() : ''}
                    </div>
                </div>
                {animationEnded ? messageBoard : <div className='row'> </div>}
            </div>
        </div>
    )
}

export default GameScreen
