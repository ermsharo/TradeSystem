import React from "react";
import styled from "styled-components";


const FooterBox = styled.footer`
 
 background-color: black;
 color:white; 
 padding: 40px;
 margin-top: 64px;
 


`;



export default function Footer()
{

    return(

        <FooterBox> 
              <div>Trade system</div>
              <span>2021</span>  
        </FooterBox>

    )


}

