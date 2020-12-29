import React, {useState} from 'react';
import './App.css';
import {CleanButton, DialButton, Display, CleanOneButton} from "./Functions.js";


function App() {
  const [numberOne, setNumberOne] = React.useState('');
  const [numberTwo, setNumberTwo] = React.useState('');
  const [operation, setOperation] = React.useState('');
  const [history, setHistory] = React.useState([]);
  const [result, setResult] = React.useState('');

  const addNumber = n => {
    setResult('');
    if (operation === '') {
    setNumberOne(numberOne + '' + n);
    } else {
    setNumberTwo(numberTwo + '' + n);
    }
  }

  const addOperation = op => {
    setResult('');
    setOperation(op);
  }

  const clearAll = () => setNumberOne('') + setOperation('') + setNumberTwo('') + setResult('');

  const clearNumber = () => {
    if(result===''){
      setNumberTwo('');
    }
    if(numberTwo===''){
      setOperation('');
    }
    if(operation===''){
      setNumberOne('');
    }
  }

  const solve = () => {
    if(operation === '+') {
      const thisResult = parseFloat(numberOne) + parseFloat(numberTwo)
      setResult (thisResult);
      setHistory([...history, numberOne + operation + numberTwo + "=" + thisResult]);
    }
    if(operation === '-') {
      const thisResult = (numberOne - numberTwo);
      setResult(thisResult);
      setHistory([...history, numberOne + operation + numberTwo + "=" + thisResult]);
    }
    if(operation === '*') {
      const thisResult = (numberOne * numberTwo);
      setResult (thisResult);
      setHistory([...history, numberOne + operation + numberTwo + "=" + thisResult]);
    }
    if(operation === '/') {
      const thisResult = numberOne / numberTwo
      setResult (thisResult);
      setHistory([...history, numberOne + operation + numberTwo + "=" + thisResult]);
    }
    setNumberOne('');
    setNumberTwo('');
    setOperation('');
  }

  function oneDisplay () {
    if (result === '') {
      return (numberOne + operation + numberTwo);
    } else {
      return (result);
    }
  }

  return (
    <div className="App">
      <div className="line first-line">
        <CleanOneButton onClick={clearNumber} />
        <CleanButton onClick={clearAll} />
        <Display content={oneDisplay(result)} />
      </div>
      <div>{history.map(x => <div>{x}</div>)}</div>

      <div className="line">
        <DialButton value={7} onClick={addNumber} />
        <DialButton value={8} onClick={addNumber} />
        <DialButton value={9} onClick={addNumber} />
        <DialButton value="+" onClick={addOperation} />
      </div>

      <div className="line">
        <DialButton value={4} onClick={addNumber} />
        <DialButton value={5} onClick={addNumber} />
        <DialButton value={6} onClick={addNumber} />
        <DialButton value="-" onClick={addOperation} />
      </div>

      <div className="line">
        <DialButton value={1} onClick={addNumber} />
        <DialButton value={2} onClick={addNumber} />
        <DialButton value={3} onClick={addNumber} />
        <DialButton value="*" onClick={addOperation} />
      </div>

      <div className="line last-line">
        <DialButton value={0} onClick={addNumber} />
        <DialButton value="." onClick={addNumber} />
        <DialButton value="=" onClick={solve} />
        <DialButton value="/" onClick={addOperation} />
      </div>
    </div>
  );
}

export default App;
