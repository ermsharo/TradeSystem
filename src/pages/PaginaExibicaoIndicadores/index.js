import React from 'react';


import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styled from "styled-components";
/* import { useFetch } from '../../../services/requests'; */
import { RepeatOneSharp } from '@mui/icons-material';
import {useState, useEffect, useMemo} from 'react';
import MACDchart from '../../components/MACD-CHART/index';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Header from './../../components/Header';
import Footer from './../../components/Footer';
import axios from "axios";
import { height } from '@mui/system';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import MobileDatePicker from '@mui/lab/MobileDatePicker';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import Stack from '@mui/material/Stack';
import MACD from './../../components/MACD/index';
import RequestMACD from '../../../src/components/MACD-CHART/request'; 
import RequestMACDintraDaily from '../../../src/components/MACD-INTRADAY-CHART/request';
import RequestMACDbest from '../../../src/components/MACD-BEST-CHART/request';
import RequestDecisionTree from '../../../src/components/DECICION-TREE-CHART/request';
import RequestDecisionTreeBruteForce from '../../components/DECISION-TREE-BRUTE-CHART/request';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';



const PageGrid = styled.div`
padding: 64px;
margin-top: 32px;


`


const ChartGrid = styled.div`
 display: grid; 
 grid-template-columns: 1fr 1fr;

`


const InfoGrid = styled.div`

display: flex;
padding: 32px;
justify-content: space-between;

`




const IndicatorsBox = styled.div`

display: grid;
 grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
 column-gap: 32px;
row-gap: 32px;
padding: 0px 32px; 
padding-bottom: 32px;
`


const DatePicker = styled.div`




display:grid; 
  grid-template-columns: 1fr 1fr ;
 column-gap: 32px;
row-gap: 32px;
padding: 0px 32px; 
padding-bottom: 32px;


@media(max-width: 1200px){


display :none; 
}





`

const DatePickerMobile = styled.div`
display:none; 

@media(max-width: 1200px){
  

  display: grid;
 grid-template-columns: 1fr 1fr ;
 column-gap: 32px;
row-gap: 32px;
padding: 0px 32px; 
padding-bottom: 32px;
}


`






const LineTwo = styled.div`
display: grid;
grid-template-columns: 160px 1fr;

row-gap: 32px;
margin-top:32px; 

`


const AvgBox = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
max-width: 400px;
column-gap: 16px;



`;

const AvgBoxAlign = styled.div`
display: flex;
justify-content: end;
margin-right: 32px;

`;



const LineThree = styled.div`


`

const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );

  
  
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


      function TabPanel(props) {
        const { children, value, index, ...other } = props;
      
        return (
          <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
          >
            {value === index && (
              <Box >
                <Typography>{children}</Typography>
              </Box>
            )}
          </div>
        );
      }
      
      TabPanel.propTypes = {
        children: PropTypes.node,
        index: PropTypes.number.isRequired,
        value: PropTypes.number.isRequired,
      };
      

      function a11yProps(index) {
        return {
          id: `vertical-tab-${index}`,
          'aria-controls': `vertical-tabpanel-${index}`,
        };
      }
      






const PaginaExibicaoIndicadores = (props) => {


  var EndDefault = new Date(); 
  var x = 360; 
  EndDefault.setDate(EndDefault.getDate() - x);

  const [Indicator, setIndicator] = React.useState('macd');
  const [startDateValue, setSartDateValue] = React.useState(EndDefault);
  const [endDateValue, setEndDateValue] =   React.useState(new Date());
  const [smallAvg, setSmallAvg] =  React.useState(9);
  const [largeAvg, setLargeAvg] = React.useState(16);

    const [value, setValue] = React.useState(0);
      
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    let { source, label, stock, indicator ,start, end , small, large } = useParams();
    const urlMacd = `http://trading-system-backend.herokuapp.com/${Indicator}/${source}/${stock}?start=${startDateValue.toISOString().split('T')[0]}&end=${endDateValue.toISOString().split('T')[0]}&small_avg=${smallAvg}&larg_avg=${largeAvg}`;
 
    
    const MemorizedMACDfunc = (source, stock, start, end, smallAvg, largeAvg ) =>{
      return <RequestMACD source= {source} stock ={stock} start ={start} end = {end} smallAvg = {smallAvg} largeAvg = {largeAvg} />
    }
    const memorizedMACD = React.useMemo(() => 
    MemorizedMACDfunc(source,stock ,startDateValue.toISOString().split('T')[0],endDateValue.toISOString().split('T')[0], smallAvg, largeAvg),
     [source,stock ,startDateValue,endDateValue, smallAvg, largeAvg]);
   
     const MemorizedMACDintraDayfunc = (source, stock, start, end, smallAvg, largeAvg ) =>{
      return <RequestMACDintraDaily source= {source} stock ={stock} start ={start} end = {end} smallAvg = {smallAvg} largeAvg = {largeAvg} />
    }
    const memorizedMACDintraDay = React.useMemo(() => 
    MemorizedMACDintraDayfunc(source,stock ,startDateValue.toISOString().split('T')[0],endDateValue.toISOString().split('T')[0], smallAvg, largeAvg),
     [source,stock ,startDateValue,endDateValue, smallAvg, largeAvg]);
   
     const MemorizedMACDbest = (source, stock, start, end, smallAvg, largeAvg ) =>{
      return <RequestMACDbest source= {source} stock ={stock} start ={start} end = {end} smallAvg = {smallAvg} largeAvg = {largeAvg} />
    }
    const memorizedMACDbest = React.useMemo(() => 
    MemorizedMACDbest(source,stock ,startDateValue.toISOString().split('T')[0],endDateValue.toISOString().split('T')[0], smallAvg, largeAvg),
     [source,stock ,startDateValue,endDateValue, smallAvg, largeAvg]);
   

     const MemorizedDecisionTree = (source, stock, start, end, smallAvg, largeAvg ) =>{
      return <RequestDecisionTree source= {source} stock ={stock} start ={start} end = {end} smallAvg = {smallAvg} largeAvg = {largeAvg} />
    }
    const memorizedDecisionTree = React.useMemo(() => 
    MemorizedDecisionTree(source,stock ,startDateValue.toISOString().split('T')[0],endDateValue.toISOString().split('T')[0], smallAvg, largeAvg),
     [source,stock ,startDateValue,endDateValue, smallAvg, largeAvg]);


     const MemorizedDecisionTreeBruteforce = (source, stock, start, end, smallAvg, largeAvg ) =>{
      return <RequestDecisionTreeBruteForce source= {source} stock ={stock} start ={start} end = {end} smallAvg = {smallAvg} largeAvg = {largeAvg} />
    }
    const  memorizedDecisionTreeBruteforce = React.useMemo(() => 
    MemorizedDecisionTreeBruteforce(source,stock ,startDateValue.toISOString().split('T')[0],endDateValue.toISOString().split('T')[0], smallAvg, largeAvg),
     [source,stock ,startDateValue,endDateValue, smallAvg, largeAvg]);



  function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box >
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }


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



  return (
   
    <>  <Header />
     
  <PageGrid>
    <InfoGrid> 
      <div>
  <Typography variant = "h3" > {label}</Typography>
  <Typography variant = "h5" > {source}</Typography>
  </div>
  <div>
  <LocalizationProvider dateAdapter={AdapterDateFns}>
    <DatePicker>
    <DesktopDatePicker
          label="Data do inicio"
          value={startDateValue}
          onChange={(newValue) => {
            setSartDateValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />

<DesktopDatePicker
          label="Data do fim"
          value={endDateValue}
          onChange={(newValue) => {
            setEndDateValue(newValue)
          }}
          renderInput={(params) => <TextField {...params} />}
        />

   </DatePicker>
   <DatePickerMobile>
       
<MobileDatePicker
          label="Data do inicio"
          value={startDateValue}
          onChange={(newValue) => {
            setSartDateValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />

<MobileDatePicker
          label="Data do fim"
          value={endDateValue}
          onChange={(newValue) => {
            setEndDateValue(newValue)
          }}
          renderInput={(params) => <TextField {...params} />}
        />

 </DatePickerMobile>
    </LocalizationProvider>
<AvgBoxAlign>
    <AvgBox> 

    <TextField
          id="outlined-number"
          label="small avg"
          type="number"
        

          value={smallAvg}
          onChange={(event) => {
            setSmallAvg(event.target.value);
          }}
        />
           <TextField
          id="outlined-number"
          label="large avg"
          type="number"
         
          value={largeAvg}
          onChange={(event) => {
            setLargeAvg(event.target.value);
          }}
        />
    </AvgBox>
    </AvgBoxAlign>
  </div>
  </InfoGrid>
                <LineTwo>
         
        <div>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
  
      >
        <Tab label="MACD" {...a11yProps(0)} />
        <Tab label="MACD INTRADAY" {...a11yProps(1)} />
       
       {/*  <Tab label="Indicadior 4" {...a11yProps(3)} /> */}
 
      </Tabs>
      </div>
      <div>
      {/* <TabPanel value={value} index={0}>


      {memorizedMACD}
       
      </TabPanel>
      <TabPanel value={value} index={1}>
      {memorizedMACDintraDay}
      </TabPanel> */}

<div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>MACD</Typography>
        </AccordionSummary>
        <AccordionDetails>
        {memorizedMACD}
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>MACD INTRADAY</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          {memorizedMACDintraDay}
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>MACD BEST</Typography>
        </AccordionSummary>
        <AccordionDetails>
     {memorizedMACDbest}
        </AccordionDetails>
      </Accordion>

      {memorizedDecisionTree}


    {memorizedDecisionTreeBruteforce}

      

    </div>

   
</div>

                    
                    
           
                    
                    
                   <div></div></LineTwo>
                <LineThree><div></div></LineThree>

            </PageGrid>

            
            <Footer/>
 </>
)



  }
/* } */
export default PaginaExibicaoIndicadores;
