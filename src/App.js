import logo from './logo.svg';
import './App.css';
import Conditional from './components/Conditional';
import { useState } from 'react';
import ConditionalText from './components/ConditionalText';
import ConditionalElements from './components/ConditionalElements';

function App() {

  const [data, setData] = useState(null);

  setTimeout(() => {
    setData(8);
  }, 2000);

  return (
    <div className="App">
      Nav bar
      <ConditionalText />
      <hr />
      <ConditionalElements />
      {data && <Conditional />}
      Footer
    </div>
  );
}

export default App;
