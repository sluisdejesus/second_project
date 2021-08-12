import React from 'react';

const CarbonInfo = ({co2, deleteCarbonData}) => {

    const total = () => {
        const carTotal = co2.car * 168
        const trainTotal = co2.train * 37
        const busTotal = co2.bus * 103
        const bikeTotal = co2.bike * 0
        const meatTotal = co2.meat * 10

        return  carTotal + trainTotal + busTotal + bikeTotal + meatTotal
    }

    const handleDelete = () => {
        deleteCarbonData(co2._id)
    }

    return (
        <>
        <h2>Your stored value : {total()}</h2>
        <div>
            <button onClick = {handleDelete}>DELETE ME!</button>
        </div>
        </>
    )
}

export default CarbonInfo;