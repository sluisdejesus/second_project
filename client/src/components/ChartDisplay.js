import React from 'react';

const ChartDisplay = ({calculation, addCarbonData}) => {
if (!calculation){
    return (
        
        <h1>Please enter your data</h1>
    )

}

const handleSave = () => {
    addCarbonData()
    
}

return (
    <div>
        <h3> Here is your total: </h3>
        <h2>{calculation}</h2>
        <button onClick={handleSave}> Save your entry </button> 

    </div>


)};

export default ChartDisplay;