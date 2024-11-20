import "./App.css";
import { useState } from "react";

function App() {
  const [showText, setShowText] = useState(true);

  return (
    <div className="App">
      <button
        onClick={() => {
          setShowText(!showText);
        }}
      >
        Show / hide
      </button>
      {showText === true && <h1>hi my name is jhfk</h1>}
    </div>
  );
}

export default App;
