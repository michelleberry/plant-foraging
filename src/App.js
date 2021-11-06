import logo from './plant.jfif';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>PLANT FORAGING!</h1>
        <p>
          Welcome to our website :) 
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Start Eating
        </a>
      </header>
    </div>
  );
}

export default App;
