//CODE FOR WHAT WILL RENDER
import './App.css';
import { TestComponent } from './Components/TestComponent/TestComponent.jsx'
import { LogoComponent } from './Components/LogoComponent/LogoComponent.jsx';

function App() {
  return (
    <div className = "screen">
      <div className = "header">
        <div className='Options'>
          
          <text>Standard</text>
        </div>
        <LogoComponent className = "logo"/>
      </div>
      
      
      <TestComponent />
      <button>
        hello im a button
      </button>
    </div>
  );
}

export default App;
