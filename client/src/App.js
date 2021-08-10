import TransportForm from './components/transport';
import './App.css';
import { useState } from 'react';

function App() {

  const [calculation, setCalculation] = useState(0);
  const [car, setCar] = useState(0);

  const handleCalculation = (values) => {

    const carTotal = values.car * 168
    const trainTotal = values.train * 37
    const busTotal = values.bus * 103
    const bikeTotal = values.bike * 0
    const meatTotal = values.meat * 10

    const total = carTotal + trainTotal + busTotal + bikeTotal + meatTotal
    setCalculation(total)
    setCar(carTotal)

  }
  return (

<>
<TransportForm  handleCalculation = {handleCalculation} calculation = {calculation}/>

</>
  );
}

export default App;
