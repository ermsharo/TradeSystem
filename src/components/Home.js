import React from "react";
import styled from "styled-components";
import CsvImage  from "./../assets/imgs/csvImage.png";
import ApiImage  from "./../assets/imgs/api.png";

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
 text-align: justify;
 margin-top: 24px;


`


const AboutImage = styled.div`
 
 img{ 
     width: 90%;
     margin: auto;
 }

`


const DataOptionsBox = styled.div`
 
 display: grid;
 grid-template-columns: 1fr 1fr;
 grid-column-gap: 5vw;
 width: 60vw;
 margin: auto;
 margin-top: 5vw;



`;

const DataOptionsButton = styled.button`
 background-color: white;
 border: 4px solid black; 
 border-radius: 30px;
 cursor: pointer;

 display: flex;
 flex-direction: column;
 padding: 40px;
 text-align: center;
 img{
     width: 10vw;
     margin:auto;
 }

`;

const AlignText = styled.div`
 justify-content: center;
 font-size: 28px;
 text-align: center;

 padding: 20px;
 width: 90%;
 margin: auto;


`;






export default function Home(){

    return(
<>
<AboutBox>
    <AboutText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mauris eros, mattis vel blandit sed, feugiat porta arcu. Donec interdum, felis non mattis congue, mauris ante maximus justo, ac pretium arcu felis et quam. Maecenas mattis rhoncus elementum. Proin commodo nibh vitae ipsum ullamcorper posuere. Cras eget fermentum massa. Suspendisse purus velit, interdum ac aliquet in, porttitor id neque. Praesent non massa neque. Fusce convallis,</AboutText>
    <AboutImage><img  src = "https://www.infomoney.com.br/wp-content/uploads/2019/06/trader-grafico-investimentos-ibovespa.jpg?fit=900%2C623&quality=50&strip=all" alt= "about image showing a trader system"/></AboutImage>
</AboutBox>
<DataOptionsBox>
      <DataOptionsButton>
      <img src= {CsvImage}/>
      <AlignText>  Submit your csv file</AlignText>
     </DataOptionsButton>
     <DataOptionsButton>
      <img src= {ApiImage}/>
      <AlignText> Use a online database </AlignText>
     </DataOptionsButton>
</DataOptionsBox>

</>


    )


}

