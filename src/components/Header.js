import React from "react";
import styled from "styled-components";

const HeaderBox = styled.header`
 
 
 background-color: black;
 color:white; 
 display: flex;
 justify-content: center;


`


const Logo = styled.div`

img{
   width: 6vw;
   height: 6vw;
}
`; 



export default function Header()
{

    return(

        <HeaderBox>
            <Logo>
                <img src="https://it.rutgers.edu/software-portal/wp-content/uploads/sites/21/2018/11/cropped-logo-placeholder-generic.200x200.png" alt="Generic Logo White 512 - Root @clipartmax.com" />
            </Logo>
        </HeaderBox>

    )


}

