import React, { Component } from 'react';
import { Card, CardBody } from 'reactstrap';
import './App.css';
import GameControl from './components/GameControl';
import GameScreen from './components/GameScreen';
import PlayState, { Config } from './utils/PlayState';
import { GameHelper } from './utils/Utils';

class App extends Component {
  constructor(props) {
    super(props);
    let gamehelper = new GameHelper(Config.GAME_TILES_CNT);
    this.state = {
      playState: PlayState.IDLE,
      gameHelperState: gamehelper.generateTiles(false),
      tileRendering: false,
    };
    this.onAnimateTilesEnd = this.onAnimateTilesEnd.bind(this);
    this.onAnimateTilesStart = this.onAnimateTilesStart.bind(this);
  }

  gamePlayState(playState) {
    this.setState(() => ({ playState }));
  }

  showScore() {
    let gmhlpr = new GameHelper(Config.GAME_TILES_CNT);
    this.setState(() => ({ gameHelperState: gmhlpr.generateTiles(), playState: PlayState.ENDED }));
  }

  onAnimateTilesEnd() {
    this.setState(() => ({
      tileRendering: false
    }));
  }
  onAnimateTilesStart() {
    this.setState(() => ({
      tileRendering: true
    }));
  }

  render() {
    return (
      <div className="App" >
        <div className="container">
          <p className="game-title">
            Spin Game
            <br />
            <a href="https://github.com/ong-gtp/spin-app-assignment" target="_blank" rel="noreferrer"> view code base </a>
          </p>
          <p className="game-title-description">
            <span> O = Orange  </span>
            <span> S = Strawberry  </span>
            <span> B = Banana  </span>
            <span> M = Monkey  </span>
          </p>
          <div className="row">
            <div className="offset-md-2 col-md-5 game-column">
              <Card className='game-card'>
                <CardBody tag="h5">
                  <GameScreen
                    onAnimateTilesStart={this.onAnimateTilesStart}
                    onAnimateTilesEnd={this.onAnimateTilesEnd}
                    gameState={this.state}
                  />
                </CardBody>
              </Card>
            </div>
            <div className="col-md-3 game-column">
              <Card className='game-card'>
                <CardBody tag="h5">

                  <GameControl
                    gameState={this.state}
                    animationIsRendering={this.state.playState === PlayState.RENDERING}
                    spin={() => this.gamePlayState(PlayState.PLAYING)}
                    stop={() => this.showScore(PlayState.ENDED)}
                  />
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
