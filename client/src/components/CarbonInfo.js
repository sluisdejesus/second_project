import React from 'react';

const CarbonInfo = ({co2, deleteCarbonData}) => {

    const total = () => {
        const carTotal = values.car * 0.000168
        const trainTotal = values.train * 0.000037
        const busTotal = values.bus * 0.000103
        const bikeTotal = values.bike * 0
        const meatTotal = values.meat * 10

        return  carTotal + trainTotal + busTotal + bikeTotal + meatTotal
    }

    const handleDelete = () => {
        deleteCarbonData(co2._id)
    }

    return (
        <>
        <h2>Your stored value : {total()} metric tonnes CO2</h2>
        <div>
            <button onClick = {handleDelete}>DELETE ME!</button>
        </div>
        </>
    )
}

export default CarbonInfo;