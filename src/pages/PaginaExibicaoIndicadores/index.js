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
import {useState, useEffect} from 'react';
import CandleStick from './../../components/CandleStick/index';
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

    const [value, setValue] = React.useState(0);
      
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };



    const [response, setResponse] = useState(null)
    const [loading, setLoading] = useState(true)
    const [hasError, setHasError] = useState(false)





    let FormatDate = () =>{
      
    }; 



    const url = `http://trading-system-backend.herokuapp.com/${Indicator}/yahoo/MULT3.SA?start=${startDateValue.toISOString().split('T')[0]}&end=${endDateValue.toISOString().split('T')[0]}&small_avg=9&larg_avg=16`;
 



   React.useEffect(() => {

     axios.get(url).then((response) => {
      setResponse(response.data);
      console.log(response.data);
      setLoading(false);
      console.log(startDateValue.toISOString().split('T')[0]); 
     });
   }, [startDateValue, endDateValue]);
 
   if (!response) return null;



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



 






  if(loading) return(<div>Loading...</div>)
  if(hasError) return(<div>Error occured.</div> )
  else if(response){


 
  return (
   
    <>  <Header />
     
  <PageGrid>
    <InfoGrid> 
      <div>
  <Typography variant = "h3" > Nome da ação</Typography>
  <Typography variant = "h5" > Vindo do yahoo</Typography>
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
        <Tab label="Indicadior 2" {...a11yProps(1)} />
        <Tab label="Indicadior 3" {...a11yProps(2)} />
        <Tab label="Indicadior 4" {...a11yProps(3)} />
 
      </Tabs>
      </div>
      <div>
      <TabPanel value={value} index={0}>

      <IndicatorsBox>


<Box >
<Card variant="outlined">{cardInside("cumulative_return", response.avaliation.cumulative_return.toFixed(2)+"%", "descrição")}</Card>
</Box>
<Box >
<Card variant="outlined">{cardInside("down_periods", response.avaliation.down_periods, "descrição")}</Card>
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
{/* <ChartGrid> */}
      <CandleStick  traceSmall = {response.trace_small} 
      traceLarge = {response.trace_large} 
       traceMACD = {response.trace_macd} 
       candleData = {CandleFormatData(response.candle_data)}/>
     {/*     <MACD  traceSmall = {response.trace_small} 
      traceLarge = {response.trace_large} 
       traceMACD = {response.trace_macd} 
       candleData = {CandleFormatData(response.candle_data)}/>
       </ChartGrid> */}
      </TabPanel>
      <TabPanel value={value} index={1}>
      
      </TabPanel>
      <TabPanel value={value} index={2}>
  
      </TabPanel>
      <TabPanel value={value} index={3}>

      </TabPanel>
</div>

                    
                    
           
                    
                    
                   <div></div></LineTwo>
                <LineThree><div></div></LineThree>

            </PageGrid>

            
            <Footer/>
 </>
)



  }
}
export default PaginaExibicaoIndicadores;
