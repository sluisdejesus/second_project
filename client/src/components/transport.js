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
            <select>
                <option value="Bike">Bike</option>
                <option value="E car">Electric car</option>
                <option value="P car">Petrol car</option>
                <option value="D car">Diesel car</option>
                <option value="Train">Train</option>
                <option value="Bus">Bus</option>
            </select>
            <button onClick={handleSubmit}>SAVE</button>

            
                    
        </form>
    )
    

    
}   
export default TransportForm;