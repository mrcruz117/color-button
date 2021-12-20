import { useState } from "react";
import "./App.css";

function App() {
  const [buttonColor, setButtonColor] = useState("red");
  const [disabled, setDisabled] = useState(false);
  const newButtonColor = buttonColor === "red" ? "blue" : "red";

  return (
    <div>
      <button
        style={{ backgroundColor: disabled ? "grey" : buttonColor }}
        disabled={disabled}
        onClick={() => setButtonColor(newButtonColor)}
      >
        Change to {newButtonColor}
      </button>
      <input
        id="disable-button-checkbox"
        type="checkbox"
        defaultChecked={disabled}
        aria-checked={disabled}
        onChange={(e) => setDisabled(e.target.checked)}
      />
      <label htmlFor="disable-button-checkbox">Disable Button</label>
    </div>
  );
}

export default App;
