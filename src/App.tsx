import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { AddIcon } from "./components/icons/AddIcon";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="flex items-center justify-center">
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <AddIcon classes="bg-red-500 h-24 w-24" />
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
