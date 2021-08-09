import React, {useState} from 'react';

const DietForm = ({SelectDiet}) => {
    const [diet, setDiet] = useState("");
    const [C02Emissions, setCo2Emissions] = useState("");

    const handleDiet = (ev) => setDiet(ev.target.value);
    const handleCo2Emissions = (ev) => setCo2Emissions(ev.target.value);

    const handleSubmit = ev => {
        ev.preventDefault();

        setDiet("");
        setCo2Emissions("");
    }

    return(
        <form onSubmit={handleSubmit}>
            <h1>Diet</h1>
            <label htmlFor="diet">What is your diet?</label>
            <select>
                <option value="Vegan">Vegan</option>
                <option value="Vegetarian">Vegetarian</option>
                <option value="Omnivore">Omnivore</option>
            </select>
            <button onClick={handleSubmit}>save</button>
        </form>
    )
}
export default DietForm;