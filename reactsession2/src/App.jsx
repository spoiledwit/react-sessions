import React from "react";
import { useState, useEffect } from "react";

const App = () => {
  let [counter, setCount] = useState(0);

  const increment = () => {
    setCount(counter + 1);
  };

  const decrement = () => {
    setCount(counter - 1);
  };

  return (
    <div>
      <h1>
        Magic Counter:
        {counter}
      </h1>

      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default App;
