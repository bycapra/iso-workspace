import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const setCounter = (type) => {
    if (type == "+") setCount(count + 1);
    else if (type == "-") {
      let value = count - 1 > 0 ? count - 1 : 0;

      setCount(value);
    } else if (type == null || type === "0") setCount(0);
    else throw "Hatalı parametre! Parametre Degeri: " + type;
  };

  return (
    <>
      <div>Hooks - Test | Counter = {count}</div>
      <div>
        <button
          onClick={() => {
            setCounter("+");
          }}
        >
          Artır (+)
        </button>
        <button
          onClick={() => {
            setCounter("-");
          }}
        >
          Azalt (-)
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            setCounter("0");
          }}
        >
          Sıfırla
        </button>
      </div>
    </>
  );
}

export default App;
