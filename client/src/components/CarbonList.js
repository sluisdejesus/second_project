import React from 'react';


const CarbonList = ({co2Data}) => {
    const co2DataNodes = co2Data.map(co2 =>{
        return <CarbonInfo
        key = {co2._id}
        co2 = {co2}
        />
    })
    return (
        {co2Data}
    )
}







export default CarbonList;