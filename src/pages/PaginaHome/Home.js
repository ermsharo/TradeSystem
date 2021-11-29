import React from "react";
import styled from "styled-components";
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import Header from './../../components/Header';
import Footer from './../../components/Footer';

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
  top:58px;



`;







export default function Home() {

    return (

<> <Header />
<Cover>


</Cover>


<Footer/>
</>


      
       
    )


}

