import React, { useEffect, useState } from "react";
import logo from "../logo.svg";
import "./App.css";

function App() {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);

  return (
    <div className="App">
      <main className="App-main">
        <div className="compteur">
          Total : {count}
          <button onClick={() => setCount(initialCount)}>Reset</button>
          <button onClick={() => setCount((prevCount) => prevCount - 1)}>
            -
          </button>
          <button onClick={() => setCount((prevCount) => prevCount + 1)}>
            +
          </button>
        </div>

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </main>
    </div>
  );
}

export default App;
