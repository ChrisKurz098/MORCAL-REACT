import './App.css';
import { useState } from 'react';
import Input from './components/Input';

function App() {
  const [inputState, setInputState] = useState({apr: 0, debt: 0,  down:0, years: 0 });
  return (
    <div className="App">
 <Input inputState = {inputState} setInputState={setInputState}></Input>
    </div>
  );
}

export default App;
