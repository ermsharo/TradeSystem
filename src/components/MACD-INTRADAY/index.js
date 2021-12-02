
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


 const ChartsGrid = styled.div`
 display: grid; 
 grid-template-columns: 1fr 1fr;
 
 
 `



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
          name: 'candle',
          type :'candlestick',
          data: this.props.candleData,
        },
        {
          name: this.props.traceSmall.name,
          type: 'line',
          data: traceFormatedData(this.props.traceSmall),
          
            stroke:{
              color: 'red',
              fillColor: 'red', 
              strokeColor: 'red', 
              width: '5px',
            },
            fill:{
                   color: 'red',
            },
            style: {
              color: 'red',
            }
         
        },
        
        {
          name: this.props.traceLarge.name,
          type: 'line',
          data: traceFormatedData(this.props.traceLarge),
            color: 'blue',
            stroke:{
              color: 'red',
              fillColor: 'red', 
              strokeColor: 'red', 
              width: '5px',
            },
            fill:{
              color: 'red',
            }
        
        },
        
        ],


        MACDBar: [{
          name: 'macd',
           data: this.props.candleData
        }],
              options: {
                chart: {


                  animations: {
                    enabled: false,
                  
                },
                  type: 'candlestick',
                  height: 290,
                  id: 'candles',
                  toolbar: {
                    autoSelected: 'pan',
                    show: true
                  },
                  zoom: {
                    enabled: false
                  },
                },
                plotOptions: {
                  candlestick: {
                    colors: {
                      upward: '#3C90EB',
                      downward: '#DF7D46'
                    }
                  },
                  line:{
                    color: 'red'
                  }
                },
                xaxis: {
                  type: 'datetime'
                }
              },
            
              optionsMACD: {
                chart: {

                  animations: {
                    enabled: false,
                  
                },
                  type: 'candlestick',
                  height: 290,
                  id: 'candles',
                  toolbar: {
                    autoSelected: 'pan',
                    show: true
                  },
                  zoom: {
                    enabled: false
                  },
                },
                plotOptions: {
                  candlestick: {
                    colors: {
                      upward: '#3C90EB',
                      downward: '#DF7D46'
                    }
                  },
                  line:{
                    color: 'red'
                  }
                },
                xaxis: {
                  type: 'datetime'
                }
              },
            


              seriesBar: [{
                name: 'volume',
              data:   MACDFormatedData(this.props.traceMACD),
              }],
              optionsBar: {
                chart: {

                  animations: {
                    enabled: false,
                  
                },
                  height: '100%',
                  type: 'bar',
                  brush: {
                    enabled: true,
                    target: 'candles'
                  },
                  selection: {
                    enabled: true,
                    xaxis: {
                    
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
  

    let seriesMACD = {
      data: MACDFormatedData(this.props.traceMACD)
    }; 

    let OptionsMACD = {
   /*    chart: {
        type: 'bar',
        height: 430
      }, */
     /*  plotOptions: {
        bar: {
          horizontal: true,
          dataLabels: {
            position: 'top',
          },
        }
      }, */
   /*    dataLabels: {
        enabled: true,
        offsetX: -6,
        style: {
          fontSize: '12px',
          colors: ['#fff']
        }
      }, */
      stroke: {
        show: true,
        width: 1,
        colors: ['#fff']
      },
      tooltip: {
        shared: true,
        intersect: false
      },
/*       xaxis: {
        categories: [2001, 2002, 2003, 2004, 2005, 2006, 2007],
      }, */
    };



    return (
      

<div class="chart-box">
<div id="chart-candlestick">
<Chart options={this.state.options} series={this.state.series} type="candlestick" height={350} />

</div>


<div id="chart-bar">
  
<Chart options={this.state.optionsBar} series={this.state.seriesBar} type="bar" height={160} />
</div>
</div>





      );
    }
  }

