import React, { useState } from "react";

const Counter2 = () => {
  const [counter, setCounter] = useState(0); // valid javascript syntax.
  return (
    <div>
      <h1>{counter}</h1>
      <div className="ui grid">
        <div className="ui row">
          <div className="four wide column">
            <button
              onClick={() => {
                setCounter(counter + 1);
              }}
            >
              INCREMENT
            </button>
          </div>
          <div className="four wide column">
            <button
              onClick={() => {
                setCounter(0);
              }}
            >
              RESET
            </button>
          </div>
          <div className="four wide column">
            <button
              onClick={() => {
                setCounter(counter - 1);
              }}
            >
              DECREMENT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter2;
