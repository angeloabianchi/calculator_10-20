import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">

      <div className="border">
        <div>
          <button className="button-size">C</button>
          <input type="text" className="input"></input>
        </div>
        <div>
          <button className="button-size">7</button>
          <button className="button-size">8</button>
          <button className="button-size">9</button>
          <button className="button-size">+</button>
        </div>
        <div>
          <button className="button-size">4</button>
          <button className="button-size">5</button>
          <button className="button-size">6</button>
          <button className="button-size">-</button>
        </div>
        <div>
          <button className="button-size">1</button>
          <button className="button-size">2</button>
          <button className="button-size">3</button>
          <button className="button-size">*</button>
        </div>
        <div>
          <button className="button-size">0</button>
          <button className="button-size">.</button>
          <button className="button-size">=</button>
          <button className="button-size">/</button>
        </div>
      </div>

    </div>
  );
}

export default App;
