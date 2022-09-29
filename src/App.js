import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>My Resume</h1>
        <p>
          More info please visite{" "}
          <a href="https://github.com/napatwongchr">my github</a>
        </p>
      </header>
    </div>
  );
}

export default App;
