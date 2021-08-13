import CarbonForm from './components/CarbonForm';
import ChartDisplay from './components/ChartDisplay';
import carbonServices from './services/carbonServices';
import CarbonList from './components/CarbonList';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  // const [co2Data, setco2Data] = useState([]);
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    carbonServices.getCarbonData()
      .then(Carbon => setAllData(Carbon));
  }, []);

  

  const addCarbonData = () => {
    carbonServices.addCarbonData(values)
    .then(savedCarbon => {
      // setco2Data(savedCarbon)
      setAllData([...allData,savedCarbon])
    }
      
      )
  }

  const deleteCarbonData = (id) => {
    carbonServices.deleteCarbonData(id)
    setAllData(allData.filter(data => data._id !== id))
  }

 

  // const updateCarbonData = () => {
  //   carbonServices.updateCarbonData(updatedCarbonData);

  //   const updatedCarbonDataIndex = co2Data.findIndex(co2Data => co2Data._id === updatedCarbonData._id);
  //   const updatedCarbonData = [...co2Data];
  //   updatedCarbonData[updatedCarbonDataIndex] = updatedCarbonData;
  //   setco2Data(updatedCarbonData);
  // };

  const [calculation, setCalculation] = useState(0);
  const [values, setValues] = useState(0);

  const handleCalculation = (values) => {

    const carTotal = values.car * 168
    const trainTotal = values.train * 37
    const busTotal = values.bus * 103
    const bikeTotal = values.bike * 0
    const meatTotal = values.meat * 10

    const total = carTotal + trainTotal + busTotal + bikeTotal + meatTotal
    setCalculation(total)
    setValues(values)

  }
  return (

<>
<CarbonForm  handleCalculation = {handleCalculation} calculation = {calculation} />
<ChartDisplay calculation = {calculation} addCarbonData ={addCarbonData} />
<CarbonList co2Data = {allData} deleteCarbonData = {deleteCarbonData}/>

</>
  );
}


export default App;
