import React, { Component } from 'react';
import { Card, CardBody, CardTitle } from 'reactstrap';
import './App.css';
import GameControl from './components/GameControl';
import GameScreen from './components/GameScreen';
import PlayState from './utils/PlayState';
import GameHelper from './utils/GameHelper';




class App extends Component {
  constructor(props) {
    super(props);
    let gamehelper = new GameHelper();
    this.state = {
      playState: PlayState.IDLE,
      gameHelperState: gamehelper.generateTiles(),
      tileRendering: false,
    };
    this.onAnimateTilesEnd = this.onAnimateTilesEnd.bind(this);
    this.onAnimateTilesStart = this.onAnimateTilesStart.bind(this);
  }

  gamePlayState(playState) {
    this.setState({ playState })
  }

  showScore() {
    let gmhlpr = new GameHelper();
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
