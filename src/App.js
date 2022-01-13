import logo from './logo.svg';
import './App.css';
import GameHelper from './utils/GameHelper';

function App() {
  const gH = new GameHelper();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{gH.sayHello()}</p>

      </header>
    </div>
  );
}

export default App;
