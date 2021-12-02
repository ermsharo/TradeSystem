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
   width: 30px;
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
            <Logo onClick={() => navigate(`/`)} ><img src = "https://upload.wikimedia.org/wikipedia/commons/a/ab/Logo_TV_2015.png" />
            </Logo>
            <Typography variant="h6" color="inherit" component="div">
              
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>

    )


}

