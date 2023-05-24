import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { Box } from "@mui/system";
import Stack from '@mui/material/Stack';
import RectangleIcon from '@mui/icons-material/Rectangle';
import Button from '@mui/material/Button';
import Fab from '@mui/material/Fab';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  
  
}));


function Automl() {

  return (

      <Grid>
        <Grid>
          <Item sx={{mt:0,backgroundColor:"#29abe2"}}>
          </Item>
          <Item sx={{backgroundColor:"#29abe2",border:0,boxShadow:'none'}}>
          <Typography align='left'><h5>Estimated Cost:</h5></Typography>
            <Stack direction="row" alignItems="center" gap={1}>
              <Box sx={{my:-2,fontWeight: 'bold'}}><h3>0.97878998</h3></Box>
              <RectangleIcon sx={{color:"#00ff38"}}/>
            </Stack>
            <Typography align='left'><h5>Bill Value: $ 40,773.112</h5></Typography>
          </Item>
        </Grid>
        <Grid>
          <Item sx={{backgroundColor:"#2e5c76",borderRadius:6,paddingLeft:4}}>
            <Box sx={{}}>
            <Typography align="left"><h2>AUTO ML</h2></Typography>
            <Fab
             sx={{
              height:120,
              width:120,
              background: 'linear-gradient(to bottom, #0CE867, #29ABE2)',
              marginTop:2,
              marginBottom:3
            }}>
              <Typography variant="h5">Start</Typography>
            </Fab>

      <Grid container spacing={2} justifyContent= 'center'>
        <Grid item >
          <Item sx={{backgroundColor:"#00ff19",borderRadius: '30px',}}>
            <Button  sx={{ color: 'black',width:"100px",height:"6px",fontSize: 11}} size="small">Quick</Button>
          </Item>
        </Grid>
        <Grid item >
          <Item sx={{backgroundColor:"#19b4d6",borderRadius: '30px',}}>
          <Button sx={{ color: 'black',width:"100px",height:"6px",fontSize: 11,fontWeight: 'bold'}} size="small">Auto</Button>
          </Item>
        </Grid>
        <Grid item >
          <Item sx={{backgroundColor:"#FF004D",borderRadius: '30px',marginBottom:8}}>
          <Button sx={{ color: 'black',width:"100px",height:"6px",fontSize: 11}} size="small">Accurate</Button>
          </Item>
        </Grid>
        
      </Grid>

            </Box>
          </Item>
        </Grid>

      </Grid>
    
    
   
  );
}



export default Automl
