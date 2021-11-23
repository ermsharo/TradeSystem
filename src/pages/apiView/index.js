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


const PageGrid = styled.div`
padding: 64px;
margin-top: 32px;


`


const LineOne = styled.div`

display: grid;
 grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
 column-gap: 32px;
row-gap: 32px;
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

  
  
  function cardInside(name, description, value){
      return(

    <React.Fragment>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        {name}
        </Typography>
        <Typography variant="h5" component="div">
          {description}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
         {value}
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

    const [value, setValue] = React.useState(0);
      
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };



    const [response, setResponse] = useState(null)
    const [loading, setLoading] = useState(true)
    const [hasError, setHasError] = useState(false)




   /* const [ response, loading, hasError ] = useFetch('https://trading-system-backend.herokuapp.com/macd/yahoo/MULT3.SA?start=2020-11-17&end=2021-11-17&small_avg=9&larg_avg=16'); 
 */

    const url = "http://127.0.0.1:8000/macd/yahoo/MULT3.SA?start=2020-11-17&end=2021-11-17&small_avg=9&larg_avg=16";
 
   const [post, setPost] = React.useState(null);

   React.useEffect(() => {

     axios.get(url).then((response) => {
      setResponse(response.data);
      console.log(response.data);
      setLoading(false);
     });
   }, []);
 
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

  return (
    <>
           <Header />
        {loading ? <div>Loading...</div> : 
        (hasError ? <div>Error occured.</div> : <div>  

{response && <>   <PageGrid>
                <LineOne>

                <Box >
      <Card variant="outlined">{cardInside("indicador 1", "0.0%", "descrição")}</Card>
    </Box>
    <Box >
      <Card variant="outlined">{cardInside("indicador 2", "0.0%", "descrição")}</Card>
    </Box>
    <Box >
      <Card variant="outlined">{cardInside("indicador 3", "0.0%", "descrição")}</Card>
    </Box>
    <Box >
      <Card variant="outlined">{cardInside("indicador 3", "0.0%", "descrição")}</Card>
    </Box>
    <Box >
      <Card variant="outlined">{cardInside("indicador 3", "0.0%", "descrição")}</Card>
    </Box>
    </LineOne>
                <LineTwo>
            
        <div>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
  
      >
        <Tab label="Indicadior 1" {...a11yProps(0)} />
        <Tab label="Indicadior 2" {...a11yProps(1)} />
        <Tab label="Indicadior 3" {...a11yProps(2)} />
        <Tab label="Indicadior 4" {...a11yProps(3)} />
 
      </Tabs>
      </div>
      <div>
      <TabPanel value={value} index={0}>
      <CandleStick  traceSmall = {response.trace_large} 
      traceLarge = {response.trace_small}  
      traceMACD = {response.trace_macd}
      
      />
      </TabPanel>
      <TabPanel value={value} index={1}>
      <CandleStick/>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <CandleStick/>
      </TabPanel>
      <TabPanel value={value} index={3}>
      <CandleStick/>
      </TabPanel>
</div>

                    
                    
           
                    
                    
                   <div></div></LineTwo>
                <LineThree><div></div></LineThree>

            </PageGrid></>}


            
          
  {/*           
            {JSON.stringify(response)} */}
            
            <Footer/>
             </div>)}
    </>
)



  /* 
  if(hasError) return(<div>Error in request ... </div>)  
  if(loading) return(<div>Loading ...</div>) 
 */
/*   console.log('Response',response); 
    return (
        <>  
        <Header/>
       <>
       
       
       </>
        <Footer/>
        </>); */
};

export default PaginaExibicaoIndicadores;
