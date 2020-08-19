import React, { useState } from "react";
import * as math from "mathjs";
import "./App.css";
import Button from "./components/Button";
import Input from "./components/Input";
import ClearButton from "./components/ClearButton";

function App() {
  const [input, setInput] = useState("");
  // const [answer, setAnswer] = useState("");

  const displayInput = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const displayAnswer = () => {
    // setAnswer(math.evaluate(input))
    setInput(math.evaluate(input));
  };

  return (
    <div className="App">
      <div className="calc-wrapper">
        <Input input={input} />
        <div className="row">
          <Button handleClick={displayInput}>7</Button>
          <Button handleClick={displayInput}>8</Button>
          <Button handleClick={displayInput}>9</Button>
          <Button handleClick={displayInput}>/</Button>
        </div>
        <div className="row">
          <Button handleClick={displayInput}>4</Button>
          <Button handleClick={displayInput}>5</Button>
          <Button handleClick={displayInput}>6</Button>
          <Button handleClick={displayInput}>*</Button>
        </div>
        <div className="row">
          <Button handleClick={displayInput}>1</Button>
          <Button handleClick={displayInput}>2</Button>
          <Button handleClick={displayInput}>3</Button>
          <Button handleClick={displayInput}>-</Button>
        </div>
        <div className="row">
          <Button handleClick={displayInput}>.</Button>
          <Button handleClick={displayInput}>0</Button>
          <Button handleClick={displayAnswer}>=</Button>
          <Button handleClick={displayInput}>+</Button>
        </div>
        <div className="row">
          <ClearButton handleClear={() => setInput("")}>Clear</ClearButton>
        </div>
      </div>
    </div>
  );
}

export default App;
