import React from "react";
import styled from "styled-components";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';

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
   width: 100px;
   height: 30px;
}
`; 



export default function Header()
{
  const navigate = useNavigate();
    return(

        <Box sx={{ flexGrow: 2 }}>
        <AppBar position="fixed" color ="default">
          <Toolbar variant="dense">
            <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
              <MenuIcon/>
            </IconButton>
            <Logo onClick={() => navigate(`/`)} ><img src = "https://lh3.googleusercontent.com/proxy/e7PXYYb6nFGy1gQC4F_iSKnKwmThHfn9h23skF-k0UEBgAc8RasCyWoPxQSNK3EUolTxWXB-czwmjHl6cHQvRWf2wjNlErbGCEdeZM7oBBc" />
            </Logo>
            <Typography variant="h6" color="inherit" component="div">
              
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>

    )


}

