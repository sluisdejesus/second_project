import TransportForm from './components/transport';
import './App.css';
import { useState } from 'react';

function App() {

  const [calculation, setCalculation] = useState(0);

  const handleCalculation = (values) => {
    console.log(values)
  }
  return (

<>
<TransportForm  handleCalculation = {handleCalculation}/>

</>
  );
}

export default App;
