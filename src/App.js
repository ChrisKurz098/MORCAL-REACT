import './App.css';
import { useState } from 'react';
import Input from './components/Input';
import Results from './components/Results';

function App() {
  const [inputState, setInputState] = useState({apr: 0, debt: 0,  down:0, years: 30 });
  return (
    <div className="App">
 <Input inputState = {inputState} setInputState={setInputState}></Input>
 <Results inputState = {inputState}></Results>
    </div>
  );
}

export default App;
