import React from 'react';
import {useState, useEffect, useMemo} from 'react';
import MACDchart from '../../components/MACD-CHART/index';
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
import data from './data.json'; 
import DecisionTreeChart from "./DecisionTreeChart";

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
   
    const CreateFormatedDateTime = (DateType) =>{
      console.log("Data here formated ", DateType)
      var result = Object.entries(DateType);
      console.log("DateType", result);
      let formatedData = []; 
      for(let i = 0; i < result.length; i++){
        console.log("Entrando aqui"); 
        console.log(result[i] ,"-->" );
        formatedData.push({x : new Date(result[i][0]), y: (result[i][1])});
      
      }
      
      console.log("Nossos dados formatadinhos",formatedData);
    }


export default function RequestDecisionTree ({source, stock, start, end, smallAvg, largeAvg}){

  





    const requestURL = `https://trading-system-backend.herokuapp.com/decision-tree/${source}/${stock}?start=${start}&end=${end}&series_size=10`;

    const [response, setResponse] = useState(null)
    const [loading, setLoading] = useState(true)
    const [hasError, setHasError] = useState(false)

  console.log("Decision tree data ",data); 

    React.useEffect(() => {

      axios.get(requestURL).then((response) => {
        setLoading(true);
       setResponse(response.data);
       console.log("Requesitou de novo");
  
       console.log("Decision tree", response);
       setLoading(false);
      })
      .catch(error => { 
        setHasError(true);
        console.log("Decison tree url", requestURL); 
      })
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


  
  if (data){

return(


<Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>DECISION TREE</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <>
  <IndicatorsBox>
   <Box >
  <Card variant="outlined">{cardInside("next_value", data?.next_value['245'].toFixed(2))}</Card>

  </Box> 
  <Card variant="outlined">{cardInside("f1_score", (data?.f1_score).toFixed(2))}</Card>
  </IndicatorsBox>


    <DecisionTreeChart
    High = {CreateFormatedDateTime(data.df_pred.High)} 
    Low = {CreateFormatedDateTime(data.df_pred.Low)} 
    Open = {CreateFormatedDateTime(data.df_pred.Open)} 
    Close = {CreateFormatedDateTime(data.df_pred.Close)}
    Volume = {CreateFormatedDateTime(data.df_pred.Volume)}
    AdjClose = {data.df_pred["Adj Close"]}
    Predict ={data.df_pred.predicted}
/> 
</>

        </AccordionDetails>
      </Accordion>


 
)
  }
    return 'error'
  
 

}