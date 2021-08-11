import React, {} from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

const HighChart = ({co2Data}) => {

  const options = {
  
    title: {
      text: 'C02'
    },
    series: [{   
       
      borderColor: "#257025",
      color: "#257025",
      type: "bar",
      name: "C02 Footprint Parts Per Million",
      data: [
        ["Your", co2Data],
        ["Average", 331]
      ],
      
    }]
  }

  if(co2Data === 0){
    return(
      <p>Please select some values from above</p>
    )
  }

  return(
    <div>
    <HighchartsReact
      highcharts={Highcharts}
      options={options}
    />
    </div>
  )
}



export default HighChart;