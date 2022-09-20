import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { AddIcon, CloseIcon } from "./components/Icons";
import { Button } from "./components/Button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <AddIcon classes="rect-80" />
      <div className="flex items-center space-x-16 mt-32">
        <Button startIcon={<AddIcon />}>Label</Button>
        <Button
          variant="outlined"
          endIcon={<CloseIcon classes="text-red-500" />}
        >
          <CloseIcon classes="text-green-500" />
          Label
        </Button>
      </div>
    </>
  );
}

export default App;
