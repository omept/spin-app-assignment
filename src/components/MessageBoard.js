import React from 'react'
import PlayState from "../utils/PlayState";

function MessageBoard(props) {
    let { scoreDescription, gameState } = props;
    return (
        <div className='row item'>
            {gameState.playState === PlayState.ENDED ? (
                <>
                    <div className='col-md-12 auto-margin'>
                        {scoreDescription.header.toString()}
                    </div>
                    <div className='col-md-12 auto-margin'>
                        {scoreDescription.body.toString()}
                    </div>
                    <div className='col-md-12 auto-margin'>
                        {scoreDescription.score.toString()}
                    </div>
                </>
            ) : ''
            }
        </div>
    );
}

export default MessageBoard