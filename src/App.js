import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div data-test="component-app">
      <ul>
        Let's remove the [data-test] attributes from DOM properties in
        production mode
        <li>npm install --save-dev babel-plugin-react-remove-properties</li>
        <li>npm run eject -- in order to config react manually</li>
        <li>Update babel config file</li>
        <li>Serve your app</li>
      </ul>
    </div>
  );
}

export default App;
