import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [err, setErr] = useState(false);
  const handleDecrementCounter = () => {
    if (counter === 0) {
      setErr(true);
    } else {
      setCounter(counter - 1);
      setErr(false);
    }
  };
  return (
    <div data-test="component-app">
      <h1 data-test="display-counter">
        The Counter is currently&nbsp; <span data-test="count">{counter}</span>
      </h1>
      <div data-test="err-msg" className={`err ${err ? "" : "hidden"}`}>
        The counter cannot go below 0
      </div>
      <button
        data-test="inc-btn"
        onClick={() => {
          if (err) {
            setErr(false);
          }
          setCounter(counter + 1);
        }}
      >
        Increment counter
      </button>
      <button
        data-test="dec-btn"
        onClick={() => {
          if (counter > 0) {
            setCounter(counter - 1);
          } else {
            setErr(true);
          }
        }}
      >
        Decrement Counter
      </button>
    </div>
  );
}

export default App;
