import './App.css';
import Logo from './components/Logo';
import Button from './components/Button';
import Screen from './components/Screen';
import ButtonClear from './components/ClearBtn';
import { useState } from 'react';
import { evaluate } from 'mathjs';

let operatorCount = 0;

function App() {

  const [input, setInput] = useState("");

  const addInput = val => {
    if(!input && (val === "*" || val === "/" || val === "+")){
      return;
    }      
    if (val !== "-" && val !== "+" && val !== "/" && val !== "*"){
      //mejorar logica poara puntos decimales a futuro.
      // if(val === "." && input.includes(".")){
      //   return
      // }
      setInput(input + val);
    } else {
      if(operatorCount !== 0){
        alert("You already selected an operator")
      }
      else if(val === "+" && operatorCount === 0){
        setInput(input + val);
        operatorCount++;
      }
      else if(val === "-" && operatorCount === 0){
        setInput(input + val);
        operatorCount++;
      }
      else if(val === "/" && operatorCount === 0){
        setInput(input + val);
        operatorCount++;
      }
      else if(val === "*" && operatorCount === 0){
        setInput(input + val);
        operatorCount++;
      }
    }       
  };

  const calculateResult = () => {
    try{
      input ? setInput(evaluate(input)) : alert("Please enter values to calculate");
      operatorCount = 0;
    } catch{
      alert("Please check your expression");
    }
    
  };


  return (
    <div className="App">
      <Logo />
      <div className="container-calculator">
        <Screen input={input} />
        <div className="row">
          <Button handleClick={addInput}>1</Button>
          <Button handleClick={addInput}>2</Button>
          <Button handleClick={addInput}>3</Button>
          <Button handleClick={addInput}>+</Button>
        </div>
        <div className="row">
          <Button handleClick={addInput}>4</Button>
          <Button handleClick={addInput}>5</Button>
          <Button handleClick={addInput}>6</Button>
          <Button handleClick={addInput}>-</Button>
        </div>
        <div className="row">
          <Button handleClick={addInput}>7</Button>
          <Button handleClick={addInput}>8</Button>
          <Button handleClick={addInput}>9</Button>
          <Button handleClick={addInput}>*</Button>
        </div>
        <div className="row">
          <Button handleClick={calculateResult}>=</Button>
          <Button handleClick={addInput}>0</Button>
          <Button handleClick={addInput}>.</Button>
          <Button handleClick={addInput}>/</Button>
        </div>
        <div className="row">
          <ButtonClear handleClear={ () => setInput("") }>
            Clear
          </ButtonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
