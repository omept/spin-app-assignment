import React from 'react'
import PlayState from '../utils/PlayState';


function MessageBoard(props) {
    let { scoreDescription, gameState } = props;
    return (
        <div className='row item'>
            {gameState.playState === PlayState.ENDED ? (
                <>
                    <div className='col-md-12'>
                        {scoreDescription.header.toString()}
                    </div>
                    <div className='col-md-12'>
                        {scoreDescription.body.toString()}
                    </div>
                    <div className='col-md-12'>
                        {scoreDescription.score.toString()}
                    </div>
                </>
            ) : <div className='col-md-12 auto-margin'>
                Your results will be loaded here
            </div>
            }
        </div>
    );
}


function GameScreen(props) {
    let { gameState } = props;
    let { tiles, scoreDescription } = gameState.gameHelper;
    let messageBoard = <MessageBoard scoreDescription={scoreDescription} gameState={gameState} />;
    return (
        <div>
            <div className='container game-control'>
                <div className='row item'>
                    <div className='col-md-12'>
                        {tiles.toString()}
                    </div>
                </div>
                {messageBoard}
            </div>
        </div>
    )
}

export default GameScreen
