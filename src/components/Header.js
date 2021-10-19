import React from "react";
import styled from "styled-components";
import LogoImage from './../assets/imgs/analytics.png';
const HeaderBox = styled.header`
 
 
 background-color: black;
 color:white; 
 display: flex;
 justify-content: center;


`


const Logo = styled.div`

img{
    margin-top: 10px;
    margin-bottom: 10px;
   width: 60px;
   height: 60px;
}
`; 



export default function Header()
{

    return(

        <HeaderBox>
            <Logo>
                <img src={LogoImage} alt="Generic Logo White 512 - Root @clipartmax.com" />
            </Logo>
        </HeaderBox>

    )


}

