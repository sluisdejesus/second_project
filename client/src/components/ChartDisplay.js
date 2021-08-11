import React from 'react';

const ChartDisplay = ({calculation}) => {
if (!calculation){
    return (
        
        <h1>Please enter your data</h1>
    )

}

return (
    <div>
        <h3> Here is your total: </h3>
        <h2>{calculation}</h2>
    </div>


)};

export default ChartDisplay;