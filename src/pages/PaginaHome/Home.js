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
<Typography variant="h3">
Sistema para Análise Técnica de Investimentos	
    </Typography>
</AboutTitle>

<AboutText>
    <Typography variant="h6">
    A motivação do grupo foi buscar uma solução para facilitar o processo de realizar a análise técnica para auxiliar investidores. O sistema desenvolvido auxilia investidores a realizar a análise técnica por meio de gráficos de valores e indicadores.
</Typography>
    
</AboutText>

<ButtonBox>
<Button  
onClick={() => navigate("/external-source")}
 variant="contained">Teste com uma base do nosso banco</Button>

</ButtonBox>
</AboutBox>

</Cover>


<Footer/>
</>


      
       
    )


}

