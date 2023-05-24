import React from 'react'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import CircleIcon from '@mui/icons-material/Circle';
import { Grid } from '@mui/material';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import HelpIcon from '@mui/icons-material/Help';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const widthModifier = {
  width: '50%',
  fontSize:12,
  color:'white',
  paddingLeft:60,
  fontWeight:'bold'
};

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(0),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div role="tabpanel" hidden={value !== index} {...other}>
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function RightBar() {

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
    <Stack direction="row" spacing={2} paddingLeft={4}>
    <Button
     startIcon={<CircleIcon sx={{color:'gray'}}/>}
     style={{
        borderRadius: 8,
        width:'95%',
        height:50,
        backgroundColor: "#cccccc",
        fontSize: "14px",
        fontWeight:'bold',
        color:"black",
        padding:10,
        marginTop:3
    }}
    variant="contained">
      Create New Project
    </Button>
  </Stack>
  <Grid container>
  <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 0 }}>
        <Tabs
          // disable the tab indicator because it doesn't work well with wrapped container
          TabIndicatorProps={{ sx: { display: 'none' } }}
          sx={{
            '& .MuiTabs-flexContainer': {
              flexWrap: 'wrap',
            },
          }}
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Saved Projects" {...a11yProps(0)} style={widthModifier} icon={<HelpIcon/>} iconPosition="end"/>
          <Tab label="See all" {...a11yProps(1)} style={widthModifier} />
          
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
      <Box sx={{ width: '100%',padding:2,paddingTop:4 }}>
      <Stack spacing={2} paddingBottom={1}>
        <Item sx={{backgroundColor:"#0ce867",border:0,borderRadius:6,padding:0.2,}}>
        <Stack 
          direction={{ xs: 'column', sm: 'column', md:'row' ,lg:'row'}}
          spacing={{ xs: 1, sm: 2, md: 7}}
          sx={{marginLeft:1,marginTop:0.3}}>
          <Stack spacing={-0.7}>
            <Typography variant='h6'>Model Name 1</Typography>
            <Typography variant='caption'>Train Accu:95%</Typography>
            <Typography variant='caption'>Val. Accu:90%</Typography>
          </Stack>
          <Stack spacing={-0.7}>
            <Typography  >MLR</Typography>
            <Typography variant='caption'>2023-01-25</Typography>
          </Stack>
         </Stack>
        </Item>
      </Stack>
      <Stack spacing={2} paddingBottom={1}>
        <Item sx={{backgroundColor:"#0ce867",border:0,borderRadius:6,padding:0.2}}>
        <Stack 
          direction={{ xs: 'column', sm: 'column', md:'row' ,lg:'row'}}
          spacing={{ xs: 1, sm: 2, md: 7}}
          sx={{marginLeft:1,marginTop:0.3}}>
          <Stack spacing={-0.7}>
            <Typography variant='h6'>Model Name 1</Typography>
            <Typography variant='caption'>Train Accu:95%</Typography>
            <Typography variant='caption'>Val. Accu:90%</Typography>
          </Stack>
          <Stack spacing={-0.7}>
            <Typography  >MLR</Typography>
            <Typography variant='caption'>2023-01-25</Typography>
          </Stack>
         </Stack>
        </Item>
      </Stack><Stack spacing={2} paddingBottom={1}>
        <Item sx={{backgroundColor:"#0ce867",border:0,borderRadius:6,padding:0.2}}>
        <Stack 
          direction={{ xs: 'column', sm: 'column', md:'row' ,lg:'row'}}
          spacing={{ xs: 1, sm: 2, md: 7}}
          sx={{marginLeft:1,marginTop:0.3}}>
          <Stack spacing={-0.7}>
            <Typography variant='h6'>Model Name 1</Typography>
            <Typography variant='caption'>Train Accu:95%</Typography>
            <Typography variant='caption'>Val. Accu:90%</Typography>
          </Stack>
          <Stack spacing={-0.7}>
            <Typography  >MLR</Typography>
            <Typography variant='caption'>2023-01-25</Typography>
          </Stack>
         </Stack>
        </Item>
      </Stack>
     </Box>
   </TabPanel>

   <TabPanel value={value} index={1}>
   <Box sx={{ width: '100%',padding:3,paddingTop:4 }}>
      <Stack spacing={2} paddingBottom={1}>
        <Item sx={{backgroundColor:"#0ce867",border:0,borderRadius:6,padding:0.2}}>
        <Stack 
          direction={{ xs: 'column', sm: 'column', md:'row' ,lg:'row'}}
          spacing={{ xs: 1, sm: 2, md: 7}}
          sx={{marginLeft:1,marginTop:0.3}}>
          <Stack spacing={-0.7}>
            <Typography variant='h6'>Model Name 1</Typography>
            <Typography variant='caption'>Train Accu:95%</Typography>
            <Typography variant='caption'>Val. Accu:90%</Typography>
          </Stack>
          <Stack spacing={-0.7}>
            <Typography  >MLR</Typography>
            <Typography variant='caption'>2023-01-25</Typography>
          </Stack>
         </Stack>
        </Item>
      </Stack>
      <Stack spacing={2} paddingBottom={1}>
        <Item sx={{backgroundColor:"#0ce867",border:0,borderRadius:6,padding:0.2}}>
        <Stack 
          direction={{ xs: 'column', sm: 'column', md:'row' ,lg:'row'}}
          spacing={{ xs: 1, sm: 2, md: 7}}
          sx={{marginLeft:1,marginTop:0.3}}>
          <Stack spacing={-0.7}>
            <Typography variant='h6'>Model Name 1</Typography>
            <Typography variant='caption'>Train Accu:95%</Typography>
            <Typography variant='caption'>Val. Accu:90%</Typography>
          </Stack>
          <Stack spacing={-0.7}>
            <Typography  >MLR</Typography>
            <Typography variant='caption'>2023-01-25</Typography>
          </Stack>
         </Stack>
        </Item>
      </Stack>
      <Stack spacing={2} paddingBottom={1}> 
        <Item sx={{backgroundColor:"#0ce867",border:0,borderRadius:6,padding:0.2}}>
        <Stack 
          direction={{ xs: 'column', sm: 'column', md:'row' ,lg:'row'}}
          spacing={{ xs: 1, sm: 2, md: 7}}
          sx={{marginLeft:1,marginTop:0.3}}>
          <Stack spacing={-0.7}>
            <Typography variant='h6'>Model Name 1</Typography>
            <Typography variant='caption'>Train Accu:95%</Typography>
            <Typography variant='caption'>Val. Accu:90%</Typography>
          </Stack>
          <Stack spacing={-0.7}>
            <Typography  >MLR</Typography>
            <Typography variant='caption'>2023-01-25</Typography>
          </Stack>
         </Stack>
        </Item>
      </Stack>
      <Stack spacing={2} paddingBottom={1}>
        <Item sx={{backgroundColor:"#0ce867",border:0,borderRadius:6,padding:0.2}}>
        <Stack 
          direction={{ xs: 'column', sm: 'column', md:'row' ,lg:'row'}}
          spacing={{ xs: 1, sm: 2, md: 7}}
          sx={{marginLeft:1,marginTop:0.3}}>
          <Stack spacing={-0.7}>
            <Typography variant='h6'>Model Name 1</Typography>
            <Typography variant='caption'>Train Accu:95%</Typography>
            <Typography variant='caption'>Val. Accu:90%</Typography>
          </Stack>
          <Stack spacing={-0.7}>
            <Typography  >MLR</Typography>
            <Typography variant='caption'>2023-01-25</Typography>
          </Stack>
         </Stack>
        </Item>
      </Stack>
      <Stack spacing={2} paddingBottom={1}>
        <Item sx={{backgroundColor:"#0ce867",border:0,borderRadius:6,padding:0.2}}>
        <Stack 
          direction={{ xs: 'column', sm: 'column', md:'row' ,lg:'row'}}
          spacing={{ xs: 1, sm: 2, md: 7}}
          sx={{marginLeft:1,marginTop:0.3}}>
          <Stack spacing={-0.7}>
            <Typography variant='h6'>Model Name 1</Typography>
            <Typography variant='caption'>Train Accu:95%</Typography>
            <Typography variant='caption'>Val. Accu:90%</Typography>
          </Stack>
          <Stack spacing={-0.7}>
            <Typography  >MLR</Typography>
            <Typography variant='caption'>2023-01-25</Typography>
          </Stack>
         </Stack>
        </Item>
      </Stack>
     </Box>
   </TabPanel>
     
    </Box>
  </Grid>
   
  </Box>
  )
}
