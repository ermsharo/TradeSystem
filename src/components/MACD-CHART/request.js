import React from 'react';
import {useState, useEffect, useMemo} from 'react';
import MACDchart from '../../components/MACD-CHART/index';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import styled from "styled-components";
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import axios from "axios";
  const CandleFormatData = (candleData) =>{

    let close= candleData.close; 
    let date = candleData.date; 
    let high = candleData.high; 
    let low = candleData.low; 
    let open = candleData.open; 
 
    //[Timestamp, O, H, L, C]
 
     let size = date.length; 
 console.log("Date", date.length)
    let FormatCandleData = [];
    for(let i = 0 ; i < size ; i++){
 
     FormatCandleData.push({x : new Date(date[i]) , y:[ open[i], high[i], low[i], close[i]]});
    }
    
 console.log(FormatCandleData); 
 return(FormatCandleData); 
    
   }; 

   const IndicatorsBox = styled.div`

   display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    column-gap: 32px;
   row-gap: 32px;
   padding: 0px 32px; 
   padding-bottom: 32px;
   `
  


export default function RequestMACD ({source, stock, start, end, smallAvg, largeAvg}){






    const requestURL = `https://trading-system-backend.herokuapp.com/macd/yahoo/MULT3.SA?start=2020-11-17&end=2021-11-17&small_avg=9&larg_avg=16`;

    const [response, setResponse] = useState(null)
    const [loading, setLoading] = useState(true)
    const [hasError, setHasError] = useState(false)



    React.useEffect(() => {

      axios.get(requestURL).then((response) => {
        setLoading(true);
       setResponse(response.data);
       console.log("Requesitou de novo");
       setLoading(false);
      });
    }, [source, stock, start, end, smallAvg, largeAvg]); 
 
    
    function cardInside(name, value,description ){
      return(

    <React.Fragment>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        {name}
        </Typography>
        <Typography variant="h5" component="div">
          {value}  
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
         {description}
        </Typography>
        
      </CardContent>
   
    </React.Fragment>
      )}

    


  if(loading){
    return (  <Box  sx={{ display: 'flex' }}>
    <CircularProgress />
  </Box>); 
  }   
  
  if (response){
return(
  <>
  <IndicatorsBox>
  <Box >
  <Card variant="outlined">{cardInside("cumulative return", response.avaliation.cumulative_return.toFixed(2)+"%", "descrição")}</Card>
  </Box>
  <Box >
  <Card variant="outlined">{cardInside("down_periods", response.avaliation.down_periods, "Periodos de queda")}</Card>
  </Box>
  <Box >
  <Card variant="outlined">{cardInside("n_transactions", response.avaliation.n_transactions, "descrição")}</Card>
  </Box>
  <Box >
  <Card variant="outlined">{cardInside("up_periods", response.avaliation.up_periods, "descrição")}</Card>
  </Box>
  <Box >
  <Card variant="outlined">{cardInside("winning_trades_rate", response.avaliation.winning_trades_rate.toFixed(2)+"%", "descrição")}</Card>
  </Box>
  </IndicatorsBox>


    <MACDchart  traceSmall = {response.trace_small} 
    traceLarge = {response.trace_large} 
     traceMACD = {response.trace_macd} 
     candleData = {CandleFormatData(response.candle_data)}/>
</>
)
  }
    return 'error'
  
 

}