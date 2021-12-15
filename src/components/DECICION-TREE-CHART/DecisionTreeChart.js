
import Chart from 'react-apexcharts'
import ReactDOM from 'react-dom';
import React from 'react';
import styled from "styled-components";




class DecisionTreeChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    
      series: [{
    
    
        name: 'LOW',
        data: [this.props.High],
    type : 'line',
       
     
      },
      {
    
    
        name: 'Height',
        data: [this.props.Low],
    type : 'line',
       
     
      }


    
    ],
      options: {
        chart: {
          type: 'line',
          stacked: false,
          height: 350,
        
          toolbar: {
            autoSelected: 'zoom'
          }
        },
        dataLabels: {
          enabled: false
        },
        markers: {
          size: 0,
        },
        title: {

          align: 'left'
        },
        fill: {
          type: 'gradient',
          gradient: {
            shadeIntensity: 1,
            inverseColors: false,
            opacityFrom: 0.5,
            opacityTo: 0,
            stops: [0, 90, 100]
          },
        },
        yaxis: {
          labels: {
            formatter: function (val) {
              return (val / 1000000).toFixed(0);
            },
          },
          title: {
            text: 'Price'
          },
        },
        xaxis: {
          type: 'datetime',
        },
        tooltip: {
          shared: false,
          y: {
            formatter: function (val) {
              return (val / 1000000).toFixed(0)
            }
          }
        }
      },
    
    
    };
  }



  render() {


    return (
      

<div id="chart">
<Chart options={this.state.options} series={this.state.series}  height={350} />
</div>


      );
    }
  }
export default DecisionTreeChart; 
