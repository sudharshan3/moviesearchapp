import * as React from 'react';
import { useState,useEffect } from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { Container, Paper } from '@mui/material';
import ActionAreaCard from '../components/Card'
import Header from '../components/Header'
import axios from 'axios';


let searchData =''

const HandleSearchfunction=(e)=>{

 
    axios.post(`http://www.omdbapi.com/?apikey=627dc6ac&s=${e}`).then((res)=>{
     
        const sdata = res.data;
        searchData = sdata
     
    }
        )

        
 }

const Home=(props)=> {

  console.log(searchData)
 
    return (
        <>
    <Header/>
  
    <Container style={{paddingTop:"5rem"}}>
    <Box sx={{ display: 'flex' ,  flexWrap: 'wrap' , justifyContent: 'space-evenly'}}>
    <ActionAreaCard cardtitle ="moviename" date="2015"  poster ="https://m.media-amazon.com/images/M/MV5BMTYyMjk0NTMwMl5BMl5BanBnXkFtZTgwNzY0NjAwNzE@._V1_SX300.jpg"/>
     <ActionAreaCard cardtitle ="moviename" date="2015"  poster ="https://m.media-amazon.com/images/M/MV5BMTYyMjk0NTMwMl5BMl5BanBnXkFtZTgwNzY0NjAwNzE@._V1_SX300.jpg"/>
     <ActionAreaCard cardtitle ="moviename" date="2015"  poster ="https://m.media-amazon.com/images/M/MV5BMTYyMjk0NTMwMl5BMl5BanBnXkFtZTgwNzY0NjAwNzE@._V1_SX300.jpg"/>
     <ActionAreaCard cardtitle ="moviename" date="2015"  poster ="https://m.media-amazon.com/images/M/MV5BMTYyMjk0NTMwMl5BMl5BanBnXkFtZTgwNzY0NjAwNzE@._V1_SX300.jpg"/>
     <ActionAreaCard cardtitle ="moviename" date="2015"  poster ="https://m.media-amazon.com/images/M/MV5BMTYyMjk0NTMwMl5BMl5BanBnXkFtZTgwNzY0NjAwNzE@._V1_SX300.jpg"/>
     <ActionAreaCard cardtitle ="moviename" date="2015"  poster ="https://m.media-amazon.com/images/M/MV5BMTYyMjk0NTMwMl5BMl5BanBnXkFtZTgwNzY0NjAwNzE@._V1_SX300.jpg"/>
     <ActionAreaCard cardtitle ="moviename" date="2015"  poster ="https://m.media-amazon.com/images/M/MV5BMTYyMjk0NTMwMl5BMl5BanBnXkFtZTgwNzY0NjAwNzE@._V1_SX300.jpg"/>
     <ActionAreaCard cardtitle ="moviename" date="2015"  poster ="https://m.media-amazon.com/images/M/MV5BMTYyMjk0NTMwMl5BMl5BanBnXkFtZTgwNzY0NjAwNzE@._V1_SX300.jpg"/>
     <ActionAreaCard cardtitle ="moviename" date="2015"  poster ="https://m.media-amazon.com/images/M/MV5BMTYyMjk0NTMwMl5BMl5BanBnXkFtZTgwNzY0NjAwNzE@._V1_SX300.jpg"/>
     <ActionAreaCard cardtitle ="moviename" date="2015"  poster ="https://m.media-amazon.com/images/M/MV5BMTYyMjk0NTMwMl5BMl5BanBnXkFtZTgwNzY0NjAwNzE@._V1_SX300.jpg"/>
     <ActionAreaCard cardtitle ="moviename" date="2015"  poster ="https://m.media-amazon.com/images/M/MV5BMTYyMjk0NTMwMl5BMl5BanBnXkFtZTgwNzY0NjAwNzE@._V1_SX300.jpg"/>
     <ActionAreaCard cardtitle ="moviename" date="2015"  poster ="https://m.media-amazon.com/images/M/MV5BMTYyMjk0NTMwMl5BMl5BanBnXkFtZTgwNzY0NjAwNzE@._V1_SX300.jpg"/>
     <ActionAreaCard cardtitle ="moviename" date="2015"  poster ="https://m.media-amazon.com/images/M/MV5BMTYyMjk0NTMwMl5BMl5BanBnXkFtZTgwNzY0NjAwNzE@._V1_SX300.jpg"/>
     <ActionAreaCard cardtitle ="moviename" date="2015"  poster ="https://m.media-amazon.com/images/M/MV5BMTYyMjk0NTMwMl5BMl5BanBnXkFtZTgwNzY0NjAwNzE@._V1_SX300.jpg"/>
     <ActionAreaCard cardtitle ="moviename" date="2015"  poster ="https://m.media-amazon.com/images/M/MV5BMTYyMjk0NTMwMl5BMl5BanBnXkFtZTgwNzY0NjAwNzE@._V1_SX300.jpg"/>
     <ActionAreaCard cardtitle ="moviename" date="2015"  poster ="https://m.media-amazon.com/images/M/MV5BMTYyMjk0NTMwMl5BMl5BanBnXkFtZTgwNzY0NjAwNzE@._V1_SX300.jpg"/>

    </Box>

 </Container>
        </>

    )
}



export   {Home , HandleSearchfunction}

