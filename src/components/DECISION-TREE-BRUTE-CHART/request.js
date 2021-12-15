import React from 'react';
import {useState, useEffect, useMemo} from 'react';
import MACDchart from '../MACD-CHART/index';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import styled from "styled-components";
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


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
  


export default function RequestDecisionTree ({source, stock, start, end, smallAvg, largeAvg}){


    const requestURL = `http://trading-system-backend.herokuapp.com/decision-tree-brutef/${source}/${stock}?start=${start}&end=${end}&series_size=10&ranges=1,2,3`
   // const requestURL = `http://trading-system-backend.herokuapp.com/decision-tree-brutef/${source}?/${stock}?start=${start}&end=${end}&series_size=10`;
   
  // const requestURL  = "https://trading-system-backend.herokuapp.com/decision-tree/yahoo/MULT3.SA?start=2020-11-17&end=2021-11-17&series_size=10"

    const [response, setResponse] = useState(null)
    const [loading, setLoading] = useState(true)
    const [hasError, setHasError] = useState(false)



    React.useEffect(() => {

      axios.get(requestURL).then((response) => {
        setLoading(true);
       setResponse(response.data);
       console.log("Requesitou de novo");
       console.log("Decision tree", response);
       setLoading(false);
      })
      .catch(error => { setHasError(true)})
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

      if(hasError) return (
<Accordion disabled>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>DECISION TREE BRUTEFORCE</Typography>
        </AccordionSummary>
        <AccordionDetails>
     
        </AccordionDetails>
      </Accordion>

      )
  if(loading){
    return (  <Box  sx={{ display: 'flex' }}>
    <CircularProgress />
  </Box>); 
  }   
 
  
  if (response){
return(


<Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>DECISION TREE BRUTEFORCE</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <>
  <IndicatorsBox>
  <Box >
{/*   <Card variant="outlined">{cardInside("next_value", response.next_value[0].toFixed(2))}</Card>
  <Card variant="outlined">{cardInside("f1_score", response.f1_score.toFixed(2))}</Card> */}
  </Box>

  </IndicatorsBox>


{/*     <MACDchart  traceSmall = {response.trace_small} 
    traceLarge = {response.trace_large} 
     traceMACD = {response.trace_macd} 
     candleData = {CandleFormatData(response.candle_data)}/> */}
</>

        </AccordionDetails>
      </Accordion>


 
)
  }

  
 

}