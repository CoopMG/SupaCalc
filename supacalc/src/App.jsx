//CODE FOR WHAT WILL RENDER
import './App.css';
import React, {useState} from 'react';
import { HeaderComponent } from './Components/Header/Header';
import { OutputFieldComponent } from './Components/OutputFieldComponent/OutputFieldComponent';
import { InputFieldComponent } from './Components/InputFieldComponent/InputFieldComponent';
import { CalculatorButtonsComponent } from './Components/CalculatorButtonsComponent/CalculatorButtonsComponent';

function App() {
  const [userInput, setUserInput] = useState('')

  return (
    <div className = "screen">
      <HeaderComponent/>
      <OutputFieldComponent userInput = { userInput }/>
      <InputFieldComponent userInput = { userInput }/>
      <CalculatorButtonsComponent userInput = { userInput } setUserInput = { setUserInput }/>
    </div>
  );
}

export default App;
