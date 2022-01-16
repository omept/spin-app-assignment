import React, { useState, useEffect } from 'react'
import PlayState, { Config } from '../utils/PlayState';
import MessageBoard from './MessageBoard';


function Tile(props) {
    return (
        <div className='tile' data-testid="screenTile">
            {props.tileValue}
        </div>
    );
}


function GameScreen(props) {
    let { gameState, onAnimateTilesEnd, onAnimateTilesStart } = props;
    // console.log('gameState.gameHelperState');
    // console.log(gameState.gameHelperState);
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
        setAnimTiles([]);
        setAnimationEnded(false);
        let i = 0;
        let holdr = [];
        let intrvlDsply = setInterval(() => {
            if (tiles[i]) {

                holdr.push(tiles[i]);
                let newTiles = [...holdr];
                if (i === (tiles.length - 1)) {
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
            } else {
                clearInterval(intrvlDsply);
            }
        }, Config.TILE_DISPLAY_WAIT_TIME);
    }

    let dfltTls = tiles.map((val, index) =>
        <Tile tileValue={val} key={index}></Tile>
    );

    let anmTls = animTiles.map((val, index) =>
        <Tile tileValue={val} key={index}></Tile>
    );

    return (
        <div>
            <div className='container game-screen'>
                <div className='row item'>
                    <div className='col-md-12 auto-margin game-screen-tiles'>
                        {gameState.playState === PlayState.IDLE ? dfltTls :
                            gameState.playState === PlayState.ENDED ? anmTls : ''}
                    </div>
                </div>
                {animationEnded ? messageBoard : <div className='row'> </div>}
            </div>
        </div>
    )
}

export default GameScreen
