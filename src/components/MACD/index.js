
import Chart from 'react-apexcharts'
import ReactDOM from 'react-dom';
import React from 'react';
import styled from "styled-components";


const MACDFormatedData = (MACD) =>{
 console.log('MACD', MACD);

  let x = MACD.x; 
  let y = MACD.y; 

  //[Timestamp, O, H, L, C]

   let size = x.length; 
console.log("Date", x.length)

  let MACDFormatedData = [];

  for(let i = 0 ; i < size ; i++){

    MACDFormatedData.push({x : new Date(x[i]) , y: y[x[i]] });
  }
  
console.log('macd --->',MACDFormatedData);  
/*  return(FormatCandleData);  */

return MACDFormatedData; 
  
 }; 




const traceFormatedData = (trace) =>{


    let x = trace.x; 
    let y = trace.y; 

    //[Timestamp, O, H, L, C]
 
     let size = x.length; 
 console.log("Date", x.length)

    let traceFormatedData = [];
 
    for(let i = 0 ; i < size ; i++){
 
      traceFormatedData.push({x : new Date(x[i]) , y:y[i]});
    }
    
 console.log(traceFormatedData);  
/*  return(FormatCandleData);  */

return traceFormatedData; 
    
   }; 


export default class ApexChart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        
          series: [{
            data:   MACDFormatedData(this.props.traceMACD),
          }],
          options: {
            chart: {
              type: 'bar',
              height: 290,
              id: 'bar',
              toolbar: {
                autoSelected: 'pan',
                show: false
              },
              zoom: {
                enabled: false
              },
              toolbar: {
                autoSelected: 'pan',
                show: true
              },
            },
            plotOptions: {
              candlestick: {
                colors: {
                  upward: '#3C90EB',
                  downward: '#DF7D46'
                }
              }
            },
            xaxis: {
              type: 'datetime'
            }
          },
        
          seriesBar: [{
            name: 'volume',
            data:   MACDFormatedData(this.props.traceMACD)
          }],
          optionsBar: {
            chart: {
              height: 160,
              type: 'bar',
              brush: {
                enabled: true,
                target: 'candles'
              },
              selection: {
                enabled: true,
                xaxis: {
                  min: new Date('20 Jan 2017').getTime(),
                  max: new Date('10 Dec 2017').getTime()
                },
                fill: {
                  color: '#ccc',
                  opacity: 0.4
                },
                stroke: {
                  color: '#0D47A1',
                }
              },
            },
            dataLabels: {
              enabled: false
            },
            plotOptions: {
              bar: {
                columnWidth: '80%',
                colors: {
                  ranges: [{
                    from: -1000,
                    to: 0,
                    color: '#F15B46'
                  }, {
                    from: 1,
                    to: 10000,
                    color: '#FEB019'
                  }],
            
                },
              }
            },
            stroke: {
              width: 0
            },
            xaxis: {
              type: 'datetime',
              axisBorder: {
                offsetX: 13
              }
            },
            yaxis: {
              labels: {
                show: false
              }
            }
          },
        
        
        };
      }



  render() {


    let CandleFormatdata = {
      data: this.props.candleData
    }

    
    MACDFormatedData(this.props.traceMACD)
  


    return (
      
<div class="chart-box">
  <div id="chart">
  <Chart options={this.state.options} series={this.state.series} type="bar" height={290} />
</div>
  <div id="chart-bar">
  <Chart options={this.state.optionsBar} series={this.state.seriesBar} type="bar" height={160} />
</div>
</div>

      );
    }
  }

