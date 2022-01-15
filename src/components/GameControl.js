import React from 'react'
import { Button, Spinner } from 'reactstrap'
import PlayState, { Config } from '../utils/PlayState';
import SecondsCountDown from './SecondsCountDown '

function GameControl(props) {

    let { spin, stop, gameState } = props;
    let autoPlayMessage = <p> Auto play in  <SecondsCountDown from={Config.AUTO_PLAY_COUNTDOWN} onFinish={spin} /> </p>
    let autoEndMessage = <p> Auto ends in  <SecondsCountDown from={Config.AUTO_END_COUNTDOWN} onFinish={stop} /> </p>
    let stopBtn = <Button color="danger" onClick={stop}> Stop </Button>
    let spinBtn = <Button color="primary" disabled={gameState.tileRendering} onClick={spin}> Spin </Button>
    return (
        <div className='container game-control'>
            <div className='row item'>
                <div className='col-md-12 auto-margin'>
                    {gameState.playState === PlayState.IDLE ? autoPlayMessage : ''}
                </div>
            </div>
            <div className='row item'>
                <div className='col-md-6 auto-margin'>
                    {gameState.playState !== PlayState.PLAYING ? spinBtn : ''}
                </div>
                <div className='col-md-6 auto-margin'>
                    {gameState.playState === PlayState.PLAYING ? stopBtn : ''}
                </div>
            </div>
            <div className='row item'>
                <div className='col-md-12 auto-margin'>
                    {gameState.playState === PlayState.PLAYING ? <Spinner> Loading ... </Spinner> : ''}
                </div>
                <div className='col-md-12 auto-margin'>
                    {gameState.playState === PlayState.PLAYING ? autoEndMessage : ''}
                </div>
            </div>
        </div>
    )
}

export default GameControl
