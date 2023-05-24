import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import Automl from './components/Automl';
import TabBar1 from './components/TabBar1';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import InventoryIcon from '@mui/icons-material/Inventory';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpIcon from '@mui/icons-material/Help';
import LogoutIcon from '@mui/icons-material/Logout';
import TabBar2 from './components/TabBar2';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import CircleIcon from '@mui/icons-material/Circle';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import RItem from './rightBarItem';

const Item2 = styled(Paper)(({ theme }) => ({
  backgroundColor: '#29abe2',
  ...theme.typography.body2,
  padding: 0,
  textAlign: 'center',
  color: theme.palette.text.secondary,
  border: 0
}));

const widthModifier = {
  width: '50%',
  fontSize: 12,
  color: 'white',
  paddingLeft: 60,
  fontWeight: 'bold'
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

export const getStaticProps = async () => {

  const res = await fetch('https://engine.raccoon-ai.io/api/v1/projects/get-all?filter=accessible');
  const data = await res.json();


  return {
    props: { boxItems: data }
  }

}
const BoxItems = ({ boxItems }) => {

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box sx={{ backgroundColor: "#29abe2", boxShadow: 'none' }}>
        <Grid container spacing={0}>

          <Grid sx={{ width: '250px', backgroundColor: "#29abe2", paddingLeft: 3 }}>
            <List >

              <ListItem >
                <ListItemButton sx={{ color: "#d4eef9", paddingTop: 10 }}>
                  <ListItemIcon>
                    <DashboardIcon sx={{ color: "#d4eef9" }} />
                  </ListItemIcon>
                  <ListItemText primary="Dashboard" />
                </ListItemButton>
              </ListItem>

              <ListItem >
                <ListItemButton sx={{ color: "#d4eef9" }}>
                  <ListItemIcon>
                    <PeopleIcon sx={{ color: "#d4eef9" }} />
                  </ListItemIcon>
                  <ListItemText primary="Visualizations" />
                </ListItemButton>
              </ListItem>

              <ListItem >
                <ListItemButton sx={{ color: "#d4eef9" }}>
                  <ListItemIcon>
                    <InventoryIcon sx={{ color: "#d4eef9" }} />
                  </ListItemIcon>
                  <ListItemText primary="API" />
                </ListItemButton>
              </ListItem>

              <ListItem >
                <ListItemButton sx={{ color: "#d4eef9" }}>
                  <ListItemIcon>
                    <MailIcon sx={{ color: "#d4eef9" }} />
                  </ListItemIcon >
                  <ListItemText primary="Docs" />
                </ListItemButton>
              </ListItem>

              <ListItem >
                <ListItemButton sx={{ color: "#d4eef9" }}>
                  <ListItemIcon>
                    <SettingsIcon sx={{ color: "#d4eef9" }} />
                  </ListItemIcon>
                  <ListItemText primary="Settings" />
                </ListItemButton>
              </ListItem>

              <ListItem >
                <ListItemButton sx={{ color: "#d4eef9" }}>
                  <ListItemIcon>
                    <HelpIcon sx={{ color: "#d4eef9" }} />
                  </ListItemIcon>
                  <ListItemText primary="Help" />
                </ListItemButton>
              </ListItem>


              <Box sx={{ flexGrow: 1, display: 'flex', paddingTop: '50%' }}>
                <ListItem>
                  <ListItemButton sx={{ color: "#d4eef9" }}>
                    <ListItemIcon>
                      <LogoutIcon sx={{ color: "#d4eef9" }} />
                    </ListItemIcon>
                    <ListItemText primary="Log Out" />
                  </ListItemButton>
                </ListItem>

              </Box>
            </List>
          </Grid>
          <Grid xs={7} >
            <Item2 sx={{ boxShadow: 'none' }}>
              <Automl />
            </Item2>
            <Item2 sx={{ boxShadow: 'none' }}>

              <Grid container sx={{ marginLeft: 5 }}>
                <Grid item xs={6} >
                  <TabBar1 />
                </Grid>
                <Grid item xs={6} >
                  <TabBar2 />
                </Grid>
              </Grid>
            </Item2>
          </Grid>
          <Grid Item xs sx={{ paddingTop: 2, backgroundColor: '#29abe2', border: 0, boxShadow: 'none', flexGrow: 1 }}>
            <Box sx={{ flexGrow: 1 }}>
              <Stack direction="row" spacing={2} paddingLeft={4}>

                <Button
                  href='/home'
                  startIcon={<CircleIcon sx={{ color: 'gray' }} />}
                  style={{
                    borderRadius: 8,
                    width: '95%',
                    height: 50,
                    backgroundColor: "#cccccc",
                    fontSize: "14px",
                    fontWeight: 'bold',
                    color: "black",
                    padding: 10,
                    marginTop: 3
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
                      <Tab label="Saved Projects" {...a11yProps(0)} style={widthModifier} icon={<HelpIcon />} iconPosition="end" />
                      <Tab label="See all" {...a11yProps(1)} style={widthModifier} />

                    </Tabs>
                  </Box>
                  <TabPanel value={value} index={0}>
                    <Box sx={{ width: '100%', paddingLeft: 2,paddingRight:2 }}>

                      <RItem />
                    </Box>
                  </TabPanel>

                  <TabPanel value={value} index={1}>
                    <Box sx={{ width: '100%', paddingLeft: 2,paddingRight:2 }}>
                      <RItem />

                    </Box>
                  </TabPanel>

                </Box>
              </Grid>

            </Box>
          </Grid>
        </Grid>
      </Box>
  
    </>
  );
}

export default BoxItems;
