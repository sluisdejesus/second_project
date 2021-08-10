import React, { useState } from 'react';




const TransportForm = ({handleCalculation}) => {
    const [car, setCar] = useState(0)
    const [train, setTrain] = useState(0);
    const [bus, setBus] = useState(0);
    const [bike, setBike] = useState(0);
    const [meat, setMeat] = useState(0);
    

    
    const handleCar = (event) => setCar(event.target.value);
    const handleTrain = (event) => setTrain(event.target.value);
    const handleBus = (event) => setBus(event.target.value);
    const handleBike = (event) => setBike(event.target.value);
    const handleMeat = (event) => setMeat(event.target.value);


    const handleSubmit = event => {
        event.preventDefault();
        const values = {
            car:car,
            train:train,
            bus:bus,
            bike:bike,
            meat:meat
        }

        handleCalculation(values)
        setCar(0);
        setTrain(0);
        setBus(0);
        setBike(0);
        setMeat(0);
    }




    return(

        <form onSubmit={handleSubmit}>
            <h1>Fill in your details</h1>
            <label htmlFor="car">How much do you drive a week?</label>
            <input type = "number" id= "car" value = {car} onChange = {handleCar}></input>
            <label htmlFor="train">How far do you travel by train per week?</label>
            <input type = "number" id= "train" value={train} onChange={handleTrain}></input>
            <label htmlFor="bus">How far do you travel by bus per week?</label>
            <input type = "number" id= "bus" value= {bus} onChange = {handleBus}></input>
            <label htmlFor="bike">How many miles do you ride your bike per week?</label>
            <input type = "number" id= "bike" value={bike} onChange={handleBike}></input>
            <label for="meat">How much meat do you eat? </label>
            <select id="meatDropdown" name="meat" value={meat} onChange={handleMeat}>
            <option value="1.5">I have meat in most meals</option>
            <option value="1">I have meat in some meals</option>
            <option value="0.5"> I am a vegetarian </option>
            <option value="0" >I am a vegan</option>
            </select>
            
            
            <button onClick={handleSubmit}>Calculate</button>

            
                    
        </form>
    
    )
    

    
}   
export default TransportForm;