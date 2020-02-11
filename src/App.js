import React from "react";
import "./styles.css";
import { Button } from "./Button";

export default function App() {
  const [cont, setCont] = React.useState(0);

  const soma = React.useCallback(function() {
    setCont(function(prevCont) {
      return prevCont + 1;
    });
  }, []);

  const subtr = React.useCallback(function() {
    setCont(function(prevCont) {
      return prevCont - 1;
    });
  }, []);

  const reset = React.useCallback(function() {
    setCont(0);
  }, []);

  return (
    <div className="App">
      <h1>Meu Contador Maneiro</h1>

      <div>{cont}</div>

      <Button onClick={soma}>+</Button>
      <Button onClick={subtr}>-</Button>
      <Button onClick={reset}>Reset</Button>
    </div>
  );
}
