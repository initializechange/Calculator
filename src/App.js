import React, { useState } from "react";
import "./styles.css";
import KeyPadComponent from "./KeyPadComponent";
import ResultComponent from "./ResultComponent";

export default function App() {
  const [result, setResult] = useState("");

  function onClick(button) {
    if (button === "=") {
      calculate();
    } else if (button === "C") {
      reset();
    } else if (button === "CE") {
      backspace();
    } else {
      setResult(result + button);
    }
  }

  function calculate() {
    var checkResult = "";
    if (result.includes("--")) {
      checkResult = result.replace("--", "+");
    } else {
      checkResult = result;
    }
    try {
      setResult(eval(checkResult));
    } catch (e) {
      setResult("error");
    }
  }

  function reset() {
    setResult("");
  }

  function backspace() {
    setResult(result.slice(0, -1));
  }

  return (
    <div>
      <div className="calculator-body">
        <ResultComponent result={result} />
        <KeyPadComponent onClick={onClick} />
      </div>
    </div>
  );
}
