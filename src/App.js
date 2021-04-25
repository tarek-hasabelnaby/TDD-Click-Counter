import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div data-test="component-app">
      <h1 data-test="display-counter">
        The Counter is currently&nbsp; <span data-test="count">{counter}</span>
      </h1>
      <button data-test="inc-btn" onClick={() => setCounter(counter + 1)}>
        Increment Counter
      </button>
    </div>
  );
}

export default App;
