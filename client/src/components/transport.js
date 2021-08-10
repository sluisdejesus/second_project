import React, { useState } from 'react';

// const ImportMissingFile = require('.')

const FormView = function(form){
    this.form:
    this.allData = null;
    
}

FormView.prototype.Events = function () {
    MissingFile.subscribe('carbonCollection:data-loaded', (event) => {
        const busField = document.querySelector('#bus');
        const busValues = event.detail[0].bus;
    })
}

const TransportForm = ({SelectTransport}) => {
    const [transport, setTransport] = useState("");
    const [C02Emisions, setC02Emisions] = useState("");
    

    
    const handleTransport = (ev) => setTransport(ev.target.value);
    const handleC02Emsions = (ev) => setC02Emisions(ev.target.value);

    const handleSubmit = ev => {
        ev.preventDefault();
        
        setTransport("");
        setC02Emisions("");
    }




    return(
        <form onSubmit={handleSubmit}>
            <h1>Fill in your details</h1>
            <label htmlFor="ar">How much do you drive a week?</label>
            <input type = "text" id= "car"></input>
            <label htmlFor="train">How far do you travel by train per week?</label>
            <input type = "text" id= "train"></input>
            <label htmlFor="bus">How far do you travel by bus per week?</label>
            <input type = "text" id= "bus"></input>
            <label htmlFor="bike">How many miles do you ride your bike per week?</label>
            <input type = "text" id= "bike"></input>
            <label for="meat">How much meat do you eat? </label>
            <select id="meatDropdown" name="meat">
            <option value=1.5>I have meat in most meals</option>
             <option value=1>I have meat in some meals</option>
            <option value=0.5>I am a vegetarian</option>
            <option value=0 >I am a vegan</option>
                </select>
            
            
            <button onClick={handleSubmit}>Calculate</button>

            
                    
        </form>
    )
    

    
}   
export default TransportForm;