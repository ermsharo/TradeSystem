import React from "react";
import styled from "styled-components";
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';


const HomeBox = styled.div`
 
 



`;


const AboutBox = styled.div`
 
 
display: grid;
grid-template-columns: 1fr 1fr;
width: 60vw;
margin: auto;
margin-top: 64px;

`

const AboutText = styled.div`
 
 font-size: 24px;
 padding: 20px;
 margin-top: 24px;


`

const AboutTitle = styled.div`
 
 font-size: 24px;
 padding: 35px;
 margin-top: 24px;


`



const DataOptionsBox = styled.div`
 
 display: grid;
 grid-template-columns: 1fr 1fr;
 grid-column-gap: 5vw;
 width: 60vw;
 margin: auto;
 margin-top: 5vw;



`;





const Cover = styled.div`
  background-color :black; 
  background-position: center;
  background-size: cover;
  color: white; 
  min-height: calc(100vh - 60px) ;
  position: relative;
  top:60px;



`;







export default function Home(){

    return(


<>


<Cover> 

    <AboutTitle><Typography align = 'center' variant = "h2"> Trader System</Typography></AboutTitle>
    <AboutText>
        <Typography variant= "h6" style = {{width: '65vw', margin:'auto'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mauris eros, mattis vel blandit sed, feugiat porta arcu. Donec interdum, felis non mattis congue, mauris ante maximus justo, ac pretium arcu felis et quam. Maecenas mattis rhoncus elementum. Proin commodo nibh vitae ipsum ullamcorper posuere. Cras eget fermentum massa. Suspendisse purus velit, interdum ac aliquet in, porttitor id neque. Praesent non massa neque. Fusce convallis,  
        </Typography>    
            </AboutText>

 
<DataOptionsBox>

<Button variant="contained" endIcon={<UploadFileIcon /> }  disableElevation>
  Enviar sua fonte de dados 
</Button>
<Button variant="contained"    endIcon={<LanguageOutlinedIcon />}  disableElevation>
    Usar fonte de dados de terceiro 
</Button>

</DataOptionsBox>

</Cover>




</>


    )


}

