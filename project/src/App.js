import React, {useState} from 'react';
import './App.css';
import {CleanButton, DialButton, Display} from "./Functions.js";


function App() {
  const [numberOne, setNumberOne] = React.useState('');
  const [numberTwo, setNumberTwo] = React.useState('');
  const [operation, setOperation] = React.useState('');
  const [result, setResult] = React.useState('');
  const addNumber = n => {
    if (operation === '') {
    setNumberOne(numberOne + '' + n);
    } else {
    setNumberTwo(numberTwo + '' + n);
    }
  }
  const clearNumber = () => setNumberOne('') + setOperation('') + setNumberTwo('');
  const solve = () => {
    if(operation === '+') {
      setResult (parseFloat(numberOne) + parseFloat(numberTwo));
    }
    if(operation === '-') {
      setResult(numberOne - numberTwo);
    }
    if(operation === '*') {
      setResult (numberOne * numberTwo);
    }
    if(operation === '/') {
      setResult (numberOne / numberTwo);
    }
  }

  return (
    <div className="App">
      <div className="line first-line">
        <CleanButton onClick={clearNumber} />
        <Display content={numberOne + operation + numberTwo} />
        <Display content={result}/>
      </div>

      <div className="line">
        <DialButton value={7} onClick={addNumber} />
        <DialButton value={8} onClick={addNumber} />
        <DialButton value={9} onClick={addNumber} />
        <DialButton value="+" onClick={setOperation} />
      </div>

      <div className="line">
        <DialButton value={4} onClick={addNumber} />
        <DialButton value={5} onClick={addNumber} />
        <DialButton value={6} onClick={addNumber} />
        <DialButton value="-" onClick={setOperation} />
      </div>

      <div className="line">
        <DialButton value={1} onClick={addNumber} />
        <DialButton value={2} onClick={addNumber} />
        <DialButton value={3} onClick={addNumber} />
        <DialButton value="*" onClick={setOperation} />
      </div>

      <div className="line last-line">
        <DialButton value={0} onClick={addNumber} />
        <DialButton value="." onClick={addNumber} />
        <DialButton value="=" onClick={solve} />
        <DialButton value="/" onClick={setOperation} />
      </div>
    </div>
  );
}

export default App;
