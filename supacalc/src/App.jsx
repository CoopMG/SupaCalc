//CODE FOR WHAT WILL RENDER
import './App.css';
import { HeaderComponent } from './Components/Header/Header';
import { OutputFieldComponent } from './Components/OutputFieldComponent/OutputFieldComponent';

function App() {
  return (
    <div className = "screen">
      <HeaderComponent/>
      <OutputFieldComponent/>
    </div>
  );
}

export default App;
