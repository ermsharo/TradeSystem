import React from "react";
import styled from "styled-components";
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import Header from './../../components/Header';
import Footer from './../../components/Footer';
import { useNavigate } from 'react-router-dom';






const HomeBox = styled.div`
 
 



`;


const AboutBox = styled.div`
 
 
display: grid;
grid-template-columns: 1fr ;
width: 60vw;
margin: auto;




`

const AboutText = styled.div`
 
 font-size: 24px;
 padding: 20px;
 margin-top: 32px;
 text-align: justify;

`

const AboutTitle = styled.div`
 
 font-size: 24px;
 padding: 32px;
 margin: 32px;
 text-align: center;

 font-weight: bolder;
 margin-top: 128px;



`;


const ButtonBox = styled.div`
 
 margin-top: 32px;
 width: 50vw;
 margin: auto;
 padding-top: 64px;
 display: grid;
 grid-template-columns: 1fr;
 row-gap: 16px;



`;









const Cover = styled.div`

    
    min-height: calc(100vh - 60px) ;


`;







export default function Home() {
    const navigate = useNavigate();
    return (

<> <Header />
<Cover>
<AboutBox>

<AboutTitle>
<Typography variant="h1">
Trader system
    </Typography>
</AboutTitle>

<AboutText>
    <Typography variant="h6">
Proin malesuada porttitor varius. Nullam porttitor vulputate urna, cursus varius risus ultricies id. Duis lorem sem, pellentesque quis maximus non, suscipit id ligula. Suspendisse posuere finibus metus, ut consequat dui rhoncus nec. Nunc vulputate nunc vel leo mollis accumsan. Quisque consequat imperdiet massa 
</Typography>
    
</AboutText>

<ButtonBox>
<Button  
onClick={() => navigate("/local-source")}
 variant="contained">Teste com uma base de dados propria</Button>
<Button  
onClick={() => navigate("/external-source")}
 variant="contained">Teste com uma base de dados de terceiros</Button>

</ButtonBox>
</AboutBox>

</Cover>


<Footer/>
</>


      
       
    )


}

