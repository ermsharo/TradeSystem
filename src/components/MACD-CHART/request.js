import React from 'react';
import {useState, useEffect, useMemo} from 'react';
import MACDchart from '../../components/MACD-CHART/index';
import Request from '../../../src/services/request';

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


export default function MACDrequest (){



    const [response, loading, hasError ] = useMemo(() => Request(urlMacd) ,[]); 


    const urlMacd = `https://trading-system-backend.herokuapp.com/macd/yahoo/MULT3.SA?start=2020-11-17&end=2021-11-17&small_avg=9&larg_avg=16`;
 




    if (!response) return null;


    if(loading) return "loading ...";
    

    return(
    <MACDchart  traceSmall = {response.trace_small} 
    traceLarge = {response.trace_large} 
     traceMACD = {response.trace_macd} 
     candleData = {CandleFormatData(response.candle_data)}/>
    )
}