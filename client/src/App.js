import TransportForm from './components/transport';
import ChartDisplay from './components/ChartDisplay';
import carbonServices from './services/carbonServices';
import './App.css';
import { useState } from 'react';

function App() {

  const [co2Data, setco2Data] = useState([]);

  const addCarbonData = newData => {
    carbonServices.addCarbonData(newData)
    .then(savedCarbon => setco2Data([...co2Data, savedCarbon]))
  }

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
<TransportForm  handleCalculation = {handleCalculation} calculation = {calculation} addCarbonData ={addCarbonData}/>
<ChartDisplay calculation = {calculation}/>


</>
  );
}

export default App;
