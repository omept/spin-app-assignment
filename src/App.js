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
      gameHelper: gamehelper.generateTiles(),
    };
  }

  gamePlayState(playState) {
    this.setState({ playState })
  }

  showScore() {
    let gmhlpr = new GameHelper();
    this.setState(() => ({ gameHelper: gmhlpr.generateTiles(), playState: PlayState.ENDED }));
  }

  render() {
    return (
      <div className="App" >
        <div className="container">
          <div className="row white">
            Game State : {this.state.playState.toString()}
          </div>
          <div className="row">
            <div className="offset-md-2 col-md-5 game-column">
              <Card className='game-card'>
                <CardBody>
                  <CardTitle tag="h5">
                    <GameScreen
                      gameState={this.state}
                    />
                  </CardTitle>
                </CardBody>
              </Card>
            </div>
            <div className="col-md-3 game-column">
              <Card className='game-card'>
                <CardBody tag="h5">

                  <GameControl
                    gameState={this.state}
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
