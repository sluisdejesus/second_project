import React, { useState } from 'react';

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
            <label htmlFor="transport">What is your main mode of transport</label>
            <input
            ></input>



            <label htmlFor="diet">Tell us about your diet</label>
            <input 
            type="radio"
            id="diet"
            name="diet"
            value={diet}
            required
            onchange={handleNameChange}/>         
        </form>
    )



}

export default TransportForm;