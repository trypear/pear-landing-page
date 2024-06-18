import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Box,Button } from '@mui/material';
import { Container } from '@mui/material';


 import '@mui/icons-material'

 

function App() {

  function download() {
    alert('download');
  }
 
  return (


<div>

  

    <Box sx={{backgroundColor: '#f5f5f5', height: '2000px', alignItems:'center', display:'flex', position:'relative'}}>
   
   
    <h1 style={{justifyContent: 'center', left:'27%', position:'absolute', top:'215px',display:'flex'}}>Fair pricing, unfair advantage.</h1>
    <h2 style={{top:'325px',left:'430px',display:'flex'}}>Download PearAI today and get your coding efficiency to a new level</h2>
   
    <h4 style={{marginTop:'600px',marginLeft:'400px', position:'absolute'}}>Want to use it on a professional level? Contact us for custom plans!</h4>

     </Box>

     
      <div>
             <Box sx={{backgroundColor:'#ffffff', display:'flex', height:'591px',width:'400px',alignItems:'center',position:'absolute', top:'600px',borderRadius:'10px',left:'80px',border:'1.5px solid #70c6a9'}}> 
             <h3 style={{color:'#4CC9A7', marginTop:'-465px', marginLeft:'40px'}}>Free</h3>
             <h5 style={{marginLeft:'-46px',marginTop:'-390px'}}>Bring your api keys and use Pear AI for free!</h5>
             <h6 style={{marginLeft:'-309px',marginTop:'-140px'}}>$0</h6> 
             <h4 style={{marginTop:'-197px',marginLeft:'10px'}}>/month</h4>
        
         <button onClick={download} style={{border:'none',background:'#4CC9A7',borderRadius:'25px', width:'330px',height:'49px',marginLeft:'-150px'}}> <h2 style={{color:'#ffffff',marginLeft:'70px',marginTop:'-11px'}}>Download for Mac</h2> </button>
         
          <h5 style={{marginTop:'183px',marginLeft:'-280px'}}>Pro two-week trial</h5>
          <h5 style={{marginTop:'268px',marginLeft:'-127px'}}>Unlimited Copilot++ completions</h5>
          <h5 style={{marginTop:'350px',marginLeft:'85px', position:'absolute'}}>Pro two-week trial</h5>
          <h5 style={{marginTop:'430px',marginLeft:'85px', position:'absolute'}}>OpenAI zero-data retention</h5>
          
          <img src={'images/Vector.png'} style={{marginLeft:'42px', marginTop:'158px', position:'absolute'}}/>
          <img src={'images/Vector.png'} style={{marginLeft:'42px', marginTop:'243px', position:'absolute'}}/>
          <img src={'images/Vector.png'} style={{marginLeft:'42px', marginTop:'326px', position:'absolute'}}/>
          <img src={'images/Vector.png'} style={{marginLeft:'42px', marginTop:'406px', position:'absolute'}}/>
         </Box>   
             <Box sx={{backgroundColor:'#ffffff', display:'flex', height:'591px',width:'400px',alignItems:'center',position:'absolute',left:'540px',top:'600px',borderRadius:'10px',border:'1.5px solid #70c6a9'}}>
             <h3 style={{color:'#4CC9A7', marginTop:'-465px', marginLeft:'40px'}}>Yearly</h3>
             <h5 style={{marginLeft:'-64px',marginTop:'-390px'}}>Pay yearly and get ... add text here</h5>
             <h6 style={{marginLeft:'-238px',marginTop:'-140px'}}>$14</h6>
             <h4 style={{marginTop:'-197px',marginLeft:'10px'}}>/month</h4>
         
          <button onClick={download} style={{border:'none',background:'#4CC9A7',borderRadius:'25px', width:'330px',height:'49px',marginLeft:'-174px'}}> <h2 style={{color:'#ffffff',marginLeft:'70px',marginTop:'-11px'}}>Download for Mac</h2> </button>
         
          <h5 style={{marginTop:'183px',marginLeft:'-280px'}}>Pro two-week trial</h5>
          <h5 style={{marginTop:'268px',marginLeft:'-127px'}}>Unlimited Copilot++ completions</h5>
          <h5 style={{marginTop:'350px',marginLeft:'85px', position:'absolute'}}>Pro two-week trial</h5>
          <h5 style={{marginTop:'430px',marginLeft:'85px', position:'absolute'}}>OpenAI zero-data retention</h5>

          <img src={'images/Vector.png'} style={{marginLeft:'42px', marginTop:'158px', position:'absolute'}}/>
          <img src={'images/Vector.png'} style={{marginLeft:'42px', marginTop:'243px', position:'absolute'}}/>
          <img src={'images/Vector.png'} style={{marginLeft:'42px', marginTop:'326px', position:'absolute'}}/>
          <img src={'images/Vector.png'} style={{marginLeft:'42px', marginTop:'406px', position:'absolute'}}/>
       
         </Box> 
             <Box sx={{backgroundColor:'#ffffff', display:'flex', height:'591px',width:'400px',alignItems:'center',position:'absolute',right:'90px',top:'600px',borderRadius:'10px',border:'1.5px solid #70c6a9'}}>
             <h3 style={{color:'#4CC9A7', marginTop:'-465px', marginLeft:'40px',position:'absolute'}}>Monthly</h3>
             <h5 style={{marginLeft:'41px',marginTop:'-380px'}}>The most supercharged code editor assistant.</h5>
             <h6 style={{marginLeft:'-317px',marginTop:'-142px'}}>$19</h6>
             <h4 style={{marginTop:'-197px',marginLeft:'10px'}}>/month</h4>
          
          <button onClick={download} style={{border:'none',background:'#4CC9A7',borderRadius:'25px', width:'330px',height:'49px',marginLeft:'-180px'}}> <h2 style={{color:'#ffffff',marginLeft:'70px',marginTop:'-11px'}}>Download for Mac</h2> </button>
            
             <h5 style={{marginTop:'183px',marginLeft:'-280px'}}>Pro two-week trial</h5>
             <h5 style={{marginTop:'268px',marginLeft:'-127px'}}>Unlimited Copilot++ completions</h5>
             <h5 style={{marginTop:'350px',marginLeft:'85px', position:'absolute'}}>Pro two-week trial</h5>
             <h5 style={{marginTop:'430px',marginLeft:'85px', position:'absolute'}}>OpenAI zero-data retention</h5>

             <img src={'images/Vector.png'} style={{marginLeft:'42px', marginTop:'158px', position:'absolute'}}/>
             <img src={'images/Vector.png'} style={{marginLeft:'42px', marginTop:'243px', position:'absolute'}}/>
             <img src={'images/Vector.png'} style={{marginLeft:'42px', marginTop:'326px', position:'absolute'}}/>
             <img src={'images/Vector.png'} style={{marginLeft:'42px', marginTop:'406px', position:'absolute'}}/>
       
     </Box> 
      </div>
      
           
 </div>

 
  );
};
 
export default App;
