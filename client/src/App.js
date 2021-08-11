import CarbonForm from './components/CarbonForm';
import ChartDisplay from './components/ChartDisplay';
import carbonServices from './services/carbonServices';
import CarbonList from './components/CarbonList';
import './App.css';
import { useEffect, useState } from 'react';
import HighChart from './components/HighChart';


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

    const carTotal = values.car * 0.000168
    const trainTotal = values.train * 0.000037
    const busTotal = values.bus * 0.000103
    const bikeTotal = values.bike * 0
    const meatTotal = values.meat * 10

    const total = carTotal + trainTotal + busTotal + bikeTotal + meatTotal
    setCalculation(total)
    setValues(values)

  }
  return (
    
    
    <div> 
   <video muted autoplay loop id="video-background">
      <source src="./images/Background.mp4" type="video/mp4"/>
    </video> 
    

    <logo><img src="/CO2 logo.png" /> A Carbon footprint calculator, designed to help you make a real difference </logo> 
  {/* <header> A Carbon footprint calculator, designed to help you make a real difference</header> */}
 
  <section>
<CarbonForm  handleCalculation = {handleCalculation} calculation = {calculation} class ="form"/>
<ChartDisplay calculation = {calculation} addCarbonData ={addCarbonData} class = "display"/>
<CarbonList co2Data = {allData} deleteCarbonData = {deleteCarbonData} class = "list"/>
<HighChart co2Data = {calculation} class = "chart"/>
</section>
<footer>Codeclan cohort E50. Developed by Blue Sky Development: Sergio Eneide, Craig Smith, Stephanie Lucas, Stephen Corcoran & Sara Luis de Jesus</footer>
</div> 
  );
}

export default App; 
