import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Muhammad Badrul's first react page.</p>
        <a
          className="App-link"
          href="https://github.com/muhammadbadrul1234"
          target="_blank"
          rel="noopener noreferrer"
        >
          Go to my Github
        </a>
      </header>
    </div>
  );
}

export default App;
