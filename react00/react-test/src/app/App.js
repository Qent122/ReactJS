import React, { useEffect, useState } from "react";
import logo from "../logo.svg";
import "./App.css";
import Modal from "../modal/modal";

function App() {
  const initialCount = 0;

  const [count, setCount] = useState(initialCount);
  const [show, setShow] = useState(false);

  function handleModal() {
    setShow(!show);
  }

  return (
    <div className="App">
      <main className="App-main">
        {show && <Modal />}
        <button onClick={handleModal}>
          {show ? "Cacher" : "montrer"} La modal
        </button>

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
