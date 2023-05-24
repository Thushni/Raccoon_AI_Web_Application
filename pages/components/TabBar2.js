import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';

const widthModifier = {
  width: '50%',
  fontSize:12,
  color:'white',
  textAlign:'center',
  fontWeight:'bold',
  paddingTop:30
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
        <Box sx={{ p: 0 }}>
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

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  

  return (
    <Box sx={{ width: '80%' }}>
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
          <Tab  label="Most recent payments" {...a11yProps(0)} style={widthModifier} />
          <Tab  label="See all" {...a11yProps(1)} style={widthModifier} />
          
        </Tabs>
      </Box>

      <TabPanel value={value} index={0}>
      <Box sx={{ width: '92%',paddingLeft:2,margin:2}} >

      <Box sx={{backgroundColor:"#2e5c76",border:0,borderRadius:4,padding:1,marginBottom:1}}>
      <Grid container spacing={1}  >
        <Grid item xs={3}>
          <Item sx={{backgroundColor:"#2e5c76", boxShadow: "none"}}>
           <Avatar alt="api" src="data:image/png;base64,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" />
          </Item>
        </Grid>
        <Grid item xs>
          <Item sx={{backgroundColor:"#2e5c76",boxShadow:'none'}}>
          <Stack Stack direction="row" spacing={2} marginTop={2}>
          <Typography variant='subtitle2' sx={{my:-1,color:'white'}}>API Requests:</Typography>
            <Typography variant='subtitle2' sx={{my:-3,color:'#007bb2'}}>10K</Typography>
          </Stack>
          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item sx={{backgroundColor:"#2e5c76",boxShadow:'none'}}>
          <Button sx={{width:12,height:8,padding:3,backgroundColor:'black',borderRadius:6,fontSize:'10px',color:'white'}}>MORE</Button>
          </Item>
        </Grid>
      </Grid>
    </Box>

    <Box sx={{backgroundColor:"#2e5c76",border:0,borderRadius:4,padding:1,marginBottom:1}}>
      <Grid container spacing={1}  >
        <Grid item xs={3}>
          <Item sx={{backgroundColor:"#2e5c76", boxShadow: "none"}}>
          <Avatar alt="cpu" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmIF-WsJ1NN_TtUyilhPaULpwXInDuhKN98w&usqp=CAU" />
          </Item>
        </Grid>
        <Grid item xs>
          <Item sx={{backgroundColor:"#2e5c76",boxShadow:'none'}}>
          <Stack Stack direction="row" spacing={2} marginTop={2}>
          <Typography variant='subtitle2' sx={{my:-1,color:'white'}}>CPU Minutes:</Typography>
            <Typography variant='subtitle2' sx={{my:-3,color:'#EC407A'}}>200</Typography>
          </Stack>
          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item sx={{backgroundColor:"#2e5c76",boxShadow:'none'}}>
          <Button sx={{width:12,height:8,padding:3,backgroundColor:'black',borderRadius:6,fontSize:'10px',color:'white'}}>MORE</Button>
          </Item>
        </Grid>
      </Grid>
    </Box>

    <Box sx={{backgroundColor:"#2e5c76",border:0,borderRadius:4,padding:1,marginBottom:1}}>
      <Grid container spacing={1}  >
        <Grid item xs={3}>
          <Item sx={{backgroundColor:"#2e5c76", boxShadow: "none"}}>
          <Avatar alt="gpu" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsSJFmJyGJ8l0DklKCj1VQQozP1EnncMZbwQ&usqp=CAU" />
          </Item>
        </Grid>
        <Grid item xs>
          <Item sx={{backgroundColor:"#2e5c76",boxShadow:'none'}}>
          <Stack Stack direction="row" spacing={2} marginTop={2}>
          <Typography variant='subtitle2'  sx={{my:-1,color:'white'}}>GPU Minutes:</Typography>
            <Typography variant='subtitle2' sx={{my:-3,color:'#EC407A'}}>200</Typography>
          </Stack>
          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item sx={{backgroundColor:"#2e5c76",boxShadow:'none'}}>
          <Button sx={{width:12,height:8,padding:3,backgroundColor:'black',borderRadius:6,fontSize:'10px',color:'white'}}>MORE</Button>
          </Item>
        </Grid>
      </Grid>
    </Box>     

    </Box>
   </TabPanel>

   <TabPanel value={value} index={1}>
   <Box sx={{ width: '98%',paddingLeft:2,margin:2}} >

      <Box sx={{backgroundColor:"#2e5c76",border:0,borderRadius:4,padding:1,marginBottom:1}}>
      <Grid container spacing={1}  >
        <Grid item xs={3}>
          <Item sx={{backgroundColor:"#2e5c76", boxShadow: "none"}}>
           <Avatar alt="api" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAkFBMVEX///8jGBUAAAAWAgAeEQ0XBgB7dnUgFBEhFhPX1dRybmxEPTzJx8YUAAAbDQgHAAAPAAD19PQvJiTv7u5ZVFM2LSuxr67o5+f4+PiloqHc29ri4eE8NDLAvr2MiIfS0NBRSkh1cG+FgH+Sjo2OiombmJdlX12tqqq6t7YrIB1NR0WgnZxhW1kzKidCOzooHBeOsy8NAAAP0klEQVR4nO1d6XqqOhSVCCYOkCAOONXpOFbt+7/dFbCyE8IQBLT3Y/26ve2BLJLsOTuNRo0aNWrUqFGjRo0aNWrUqFGjRo0IbMcZe3Ac991DKRrutLdr7VfzvmbeYfT7t0FnM+nN3j2uYmAv/nU1EzHTsHSMiQeMdcswKTL6q13v3eN7De50N0TI1IkmBcEWQ+i8+7NzOf26IabLyQHoDJ2303cPVh3uYUUz0PslSQfHd49YDeMNo1ZGegEsam7tdw87M2YtxGK2XgIwo1/jdw89E5wNNZXp+SCMff2BedxZOeYv5PgzeTeBFPQ0inPz84DRqf1uEgmwWyiJH8G6bt2hxylIHzr697FGXa/P4mbGYBQh69Q97/f7VbdrIkSZFceTzj90GrdIqv90g9JTZ3dsw5mxl8fdwKTUkM65hT5xN9oDJJs8k847xzizbHrs9JEpIUlQ5+NWavsqUREGOm2WyUO1e5sTkhgHbPhhurFnREZJmmi/yDIT7uiMjOhK/SyZeojIUGKydXafYdqhEY46/SDPahfZgoa5UVtl033EkCVoVNJ4lREhiNFF3edrrxARKX6IwxEhyIxFrgcdRIMW03wPKhgTgSBGm7yPsjvCNGL0ARR7AkFDe2VQo6YlUHy7RJ0KVgk9v6bHZjfe8tNPTkEjzQlH4y21/Cv0iQ6/KIxzAcN8AStOjRH0XcAzv/jNyDoFPDM3tognWIwCm1COIjoU8tRc6HFDKU7wHYUP9zYT1T7pHMHirKwRR9HqFvZgRaw5sVeojcUrWfqvwEcrgNeEhQiZENwOJ/QtWtHtwzVagJrgsYcLxFoV/PRM2FIwBHNQ+POH0Lp5hw0+hgEzfCpe3I11YC1hXH1UYwNXUYFiNAQnUOmuhDckYsa9vhxZ1wHOFD5VHe/vAHNNv5bzDoeAdVr1JI7hFJbmxEHbBv9UO4ktsICMfWmvOQN5SotVuCkYA6+QGOXl4dtgEolR2mskmABdaBat6yHWYK1UGtGAq6dUy39mhlrXupT4IgFw8ZitUl+1D2U2YdWVpWzA2qHlOm/wY7LqFIYWyhljXfK7wIaozv5egu9air0GAXUiq8rZ/woXqT4sWw+7oPCBVpU4PYWLtFRVEQAYF9ZgVolhMwNeBSvf+YahBAvNO5PyX7kIX4n7pb+tYV9hVB0blA43y3JfCZZNs1xlGKAjJk+xifRtmboRyO9KDCloIj5JMrQvTYo7QNCgKtImbQlDzSuD6JYUDJ+G21Cfl/MKHm4/ptBKR8NS5hGo4Ap0hYdLbKmqjlYlSNZtqCxYNU7pd1wxmebpj03hUbhWM9yG1XhsYpqZByt8qYI1g6pxZ2yEmGnFFo3rBZeIud3nq4hVUXBoudi1LnMTMUNezsiGRdb6u6Gy0OdVBqLd8XLS0eXnG6xmMYkve7pcLA7hNtTfkGJf7oayakaCXgxKu+3Dv5WJPAC5ZhWfjsmC9uYqOeqA9vkX1Gy01hA1oyW9JQZKk+Eeu9GKTTbIR3H83WUxlbya8cYqiUU3Ug7JujkoLgZJR3sq8SxicdTFYw/NuaJsdw/S6t1PYdhw/5nC8Myzyiy6h2vi0QKPYdlxtjRMu4LbwRQkw7FPU0+elR5JTEdLKGakWYc0HqTNnwfrXbIUYGHxKxVtM/2zXbTqWsqwwkRCLGYnfqxZqsOdSDlyHMP3aHwBzplzrnSSGjbu6TETiHWrybzTPZR5pr5OrFB0zay+BxLrj7ab/Siu5/N+PenJBOBau//+lMksdLnSm/RyzZ10BxKDIW0+aO12o7tputu2Luf5iV2fY9tS7IHF6o82whLounV/MFp9RxRZx7z/2rplYdhoDPjys+St2JF4m6SJfvbfbWH2XWcW+iw4+CwEx4Wm2klerEXJRJhIP4SoZy3ZW8ESeMKSfKl9NK5lIdpaphgLTy88thY0kaFX2ChUT6sxtLtwZxnx8sE9RyIiBlplKLjy85jeNMZG3x4MibBMQ5Fm6BxFNYYNhysEjf3O7k08nWXRS5YgiONZiOTmUUQxAfeAITkJssZiT5fW4j6OIkMu46dhFrNZBgJBkjVW50WlyenorfA4fyNgSI+2w2E8u7u0j51Bv15g2DhAijGp97WwRE2aNabsxfnvo/FSKCTm8wUM5fnUXaB/iQnWqTLDxh7OjzQY/8XLAoI6WX0Rf4WY/4KUTUxhTxLDxiKYRQYmUZ2hA3Lv0kk88AR1lj3f6hcu3Aff8waq36QeTCLDu5nob59T+E/VGXL5cGJGNMaMt9SMfvZoue1XmiL3EYaTs0hm2AhyhEBM5WAIK1MkCYc5Z6Kbc4Wkkv/tfBvVn0y5rElhuPNlAFg3eRjCckIsxnJbnJRRC+r4+UTqBSwDkS0tkkphGPxL8OHzMOSqeoWqhgW3CZlSYC74coHw+vEWG5PZhSkMbf/XwOHMxdCxQmGjD7lfDaFFYChFO4Jc1MNV9P9bWkSYwrARMAwdzlwMG//AJHLv4srurb5aUM4XEo/jJEFttCwllcLQ9X8NtnA+huMmMAOBPOAKfrGhVnjkG91Ee0imgbcnZdVZKQyDIZhhaD4fw8Y6zDkQEv5vKGWVTzb4Q3l+L7++Xua+pDAMdBnIuOZkuASrMYxnzGBklSomrh0/4fUcuaN5P0Lj5IEUhkFFyYv60MM8lCihZIZ1uMrHxPxSEKw9f/aXieToQDLDqf+RCX7JpvEBMuJP62oGxYzywWI/Xwr0Q+ALR5d6IkPX376aCWRDXobwHAh9pKhhOaypGuN9DBxku33LLSprkhjal+DDU+Bb5mXYCFPUv9/ZhaYOVk1b++4Exyewv5Aoa+IZ2gcjEIAmDDDnZrgLl+ljI8LTRer1m/7+4c5WPuS+6L0EDNkx6H4ZwGkvj7sLehy15dVUbobA2beCuOIqNLnxj2oRl+/WYz7A5u8pQgWz4RGnoUgAe76etxNyM3RAJhd5S3IMVIXUoEyEz0ZwJoJFIcYHUmJtGkZ8mXpuhnDK/L3yHUpSwlR3YaBJhc1lB0E3YXDJDDHTBembnyGQnP6yGISM1dPyvqEtGPG/9aeUD7olMMQGMlri/sjPEBRrsoMXZwSrVrWGy/UNiMgpiLYvzQRZ82BomTy8NEhzf4iawvkZghoxz84Fkgc38z3L3I54HPq+gWJy09J+OICbFofdYSGvHMvPcBqqC8/f/BfRHgp4lCeblMdDdvFBt4c+zFygnZ+h8/N0g/GZ24bKx6XtlFQEd7I0zQMWkZ+hOwwZzhsuOC+tfIDpIK9ODj8ZpFMdQ+he9BsOqGhWLlILnuT3ehThr1NONlfI8AZCMlDQKBfHBAXm1nkggS+hCTymVCHDM2Q4ArpD9eibr1mJJrUSAq0LH1klQxD6hYa4qjYMjrLEpJoCPrD+9F1z2AojNImpYQmOiUMOjEPw1d6zD0+NznNCCVYUpX65Nwhf8AjkLIjwVilLn/qBDBuDsGZbsWvYWAzD8wgCVMD5r46hHR5AwbfGOfzhquZYPFz52LBOYO+wZwC0OobjMI+or8CEYsUDPr6pkNAQI9BDBP3+XB3Daagf7rvk+vQsFI8wBUZ3koYJrMOnKVgdQ5BlMreN25MhHiplKx4R3IQTJcEyfgapqmMITi3RUWP1lDS4r7IPHX+RJlbuPZIhvz2sqmO4DjXg/XXhCR+sqWiLQBkk12rsLShtK2PoAoWPHKgPdZUzTL5Cx3riRwlMgt8Af2UMxyDwZLmNDZhRhXh+cMgyJa7z0EuPYGplDIGp7cVLJ8AuVXCAN8yrSUuzZIO/MoJRBtWXCgxVqi8hwDlsL0xzBL6FQrC0P/RwTZG+0x//zwx/cbR1779/MjNsee+4rrKP6RfwlHKPi/GpHICxA2T8Mxf8kPkVruLf/wKG1jw5AdIyuNKjdqWB6zHR4I9JR9JFfxEuOKIV7DvQr6CyxiFlYgHz+H7oEiSF33kSrTCA6OgjmgnaBwS5qL8NWCn8cAtcEFzMXDD7uYB1M7/ldeD/5YsZfBJgguvp1Rzh1vzr0nQA28j9rkgblPM1/7is4RpJhtV5QF9ISof/ErgeKED3waYTJffPKxlfDE4hUAywXW91dy3MvjutSaH9e5awQTwXQQK1CtV1P98g5t1EWqB+4hrEY8Zdn3WCk1iNTtw/TkEVeDfXhTtQwj8XBKc0olfR+anzu2xIYY2mvmFCWlyKXEPiKi7MaIWjKaqdJV+KHykXgJPIn68qBRuZ5fEallx7hehJVhfDg7FlN3jfcOupkCUza3LXUFjRpc/NMcleEpIH/LUmhbRlGP9wzRGkEbJ9E/wFLtO0Ea6/KqL96dLgCMor1Wdc2x79VBrFb55gEVcqLEyOoLGS/xl/J4hllGTbCPd7WdfXlYVwbR+24gLxHe5oV5F3xgCM+COA1uu3Vbni6fqEMDV3GLqgm5sEHAWCSskgKdpD4WRvkk3WFpphoEvRYZsFf1Wwrr3cz27HhBY8KNGAGAnzbfaLXak9/hPqL0vs3pwKHUrSLruJXvN3KbC79FIg2HyR4KwTuZwXpSrXrUBRM9iuKMu4zbeRw+w1s6K9jl7OmuW6oo1IkVDtqxCOU76xI3ntcspeB0Xu5iXJe/AX/yJFsZixzuv7ccZr5ZduaJttT5IWSDirZzuJthciBrK2ac1NkjHGgirKS9DubbuISRroWM3MjxzJGvAQhvT9rjfNuWDHfV6oN3N4L+6sPfq6WPLWlxo9K2ieHpZcP+1ZQwzRn1t3cOnw1fatQxpv5yrcLXoTCvZTsL4Mut2h5bVulDcgw6illPu0B7GNsPz77Y0mB5OmmD/2MNJxXHhECgzL0nUcN6a74jaV18RO0jwzASSxMRPf/qd46KiTQ2svzxn7mT2QEGZ1V9JFXxQIzdsneYJMBY4JsfJVQqfql3GXgMrH7Z6wWyw7R3yKeYo7KJEgZnjzkjkyW7OsC4zoMc+IWhCFQafa9mVza9ZC6Q0w/bfFJQPcfTkUsYmGu0K8O2dyS2pC+4sEi2ldPEW9Sa1NgWGW6bbLUDOx16cVtw09FLtQcZOy27rwZvezUWuI4k0K9pPo6n0XQpHcjSqK0LU1KqnTvTvuTTYrXTyJ7SNNoElMXSZ9UBLM02U7WtoVVKY5zrTNIYNBsRC3svUtPCQRU+fNF8hnwFLnKWKjyov+KsHUENyL/0F1koBxn7e/M8Yc/hKcs2AgodLzlFXDFk1U9KdLW6S4CCej6Qe0Ay8YogXHVv+LwmsI0YIzb5+v6RQhWnBGAQnED4NowRl/vqY1goUQz62oCKtK9PgAf3X3w1aHNoYWXLV3RlWE8RVYcLra2dU/ArsLju58wh0ZxcMNo6hl15i9C88YHP2IS0BKwQaZlmWi/59pGmK5uVzKvte3Ro0aNWrUqFGjRo0aNWrUqFGjxqfgP3iT9Lc7YquRAAAAAElFTkSuQmCC" />
          </Item>
        </Grid>
        <Grid item xs>
          <Item sx={{backgroundColor:"#2e5c76",boxShadow:'none'}}>
          <Stack Stack direction="row" spacing={2} marginTop={2}>
          <Typography variant='subtitle2' sx={{my:-1,color:'white'}}>API Requests:</Typography>
            <Typography variant='subtitle2' sx={{my:-3,color:'#007bb2'}}>10K</Typography>
          </Stack>
          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item sx={{backgroundColor:"#2e5c76",boxShadow:'none'}}>
          <Button sx={{width:12,height:8,padding:3,backgroundColor:'black',borderRadius:6,fontSize:'10px',color:'white'}}>MORE</Button>
          </Item>
        </Grid>
      </Grid>
    </Box>

    <Box sx={{backgroundColor:"#2e5c76",border:0,borderRadius:4,padding:1,marginBottom:1}}>
      <Grid container spacing={1}  >
        <Grid item xs={3}>
          <Item sx={{backgroundColor:"#2e5c76", boxShadow: "none"}}>
          <Avatar alt="cpu" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmIF-WsJ1NN_TtUyilhPaULpwXInDuhKN98w&usqp=CAU" />
          </Item>
        </Grid>
        <Grid item xs>
          <Item sx={{backgroundColor:"#2e5c76",boxShadow:'none'}}>
          <Stack Stack direction="row" spacing={2} marginTop={2}>
          <Typography variant='subtitle2' sx={{my:-1,color:'white'}}>CPU Minutes:</Typography>
            <Typography variant='subtitle2' sx={{my:-3,color:'#EC407A'}}>200</Typography>
          </Stack>
          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item sx={{backgroundColor:"#2e5c76",boxShadow:'none'}}>
          <Button sx={{width:12,height:8,padding:3,backgroundColor:'black',borderRadius:6,fontSize:'10px',color:'white'}}>MORE</Button>
          </Item>
        </Grid>
      </Grid>
    </Box>

    <Box sx={{backgroundColor:"#2e5c76",border:0,borderRadius:4,padding:1,marginBottom:1}}>
      <Grid container spacing={1}  >
        <Grid item xs={3}>
          <Item sx={{backgroundColor:"#2e5c76", boxShadow: "none"}}>
          <Avatar alt="gpu" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsSJFmJyGJ8l0DklKCj1VQQozP1EnncMZbwQ&usqp=CAU" />
          </Item>
        </Grid>
        <Grid item xs>
          <Item sx={{backgroundColor:"#2e5c76",boxShadow:'none'}}>
          <Stack Stack direction="row" spacing={2} marginTop={2}>
          <Typography variant='subtitle2'  sx={{my:-1,color:'white'}}>GPU Minutes:</Typography>
            <Typography variant='subtitle2' sx={{my:-3,color:'#EC407A'}}>200</Typography>
          </Stack>
          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item sx={{backgroundColor:"#2e5c76",boxShadow:'none'}}>
          <Button sx={{width:12,height:8,padding:3,backgroundColor:'black',borderRadius:6,fontSize:'10px',color:'white'}}>MORE</Button>
          </Item>
        </Grid>
      </Grid>
    </Box>     

    <Box sx={{backgroundColor:"#2e5c76",border:0,borderRadius:4,padding:1,marginBottom:1}}>
      <Grid container spacing={1}  >
        <Grid item xs={3}>
          <Item sx={{backgroundColor:"#2e5c76", boxShadow: "none"}}>
           <Avatar alt="api" src="data:image/png;base64,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" />
          </Item>
        </Grid>
        <Grid item xs>
          <Item sx={{backgroundColor:"#2e5c76",boxShadow:'none'}}>
          <Stack Stack direction="row" spacing={2} marginTop={2}>
          <Typography variant='subtitle2' sx={{my:-1,color:'white'}}>API Requests:</Typography>
            <Typography variant='subtitle2' sx={{my:-3,color:'#007bb2'}}>10K</Typography>
          </Stack>
          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item sx={{backgroundColor:"#2e5c76",boxShadow:'none'}}>
          <Button sx={{width:12,height:8,padding:3,backgroundColor:'black',borderRadius:6,fontSize:'10px',color:'white'}}>MORE</Button>
          </Item>
        </Grid>
      </Grid>
    </Box>

    <Box sx={{backgroundColor:"#2e5c76",border:0,borderRadius:4,padding:1,marginBottom:1}}>
      <Grid container spacing={1}  >
        <Grid item xs={3}>
          <Item sx={{backgroundColor:"#2e5c76", boxShadow: "none"}}>
          <Avatar alt="cpu" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmIF-WsJ1NN_TtUyilhPaULpwXInDuhKN98w&usqp=CAU" />
          </Item>
        </Grid>
        <Grid item xs>
          <Item sx={{backgroundColor:"#2e5c76",boxShadow:'none'}}>
          <Stack Stack direction="row" spacing={2} marginTop={2}>
          <Typography variant='subtitle2' sx={{my:-1,color:'white'}}>CPU Minutes:</Typography>
            <Typography variant='subtitle2' sx={{my:-3,color:'#EC407A'}}>200</Typography>
          </Stack>
          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item sx={{backgroundColor:"#2e5c76",boxShadow:'none'}}>
          <Button sx={{width:12,height:8,padding:3,backgroundColor:'black',borderRadius:6,fontSize:'10px',color:'white'}}>MORE</Button>
          </Item>
        </Grid>
      </Grid>
    </Box>

    <Box sx={{backgroundColor:"#2e5c76",border:0,borderRadius:4,padding:1,marginBottom:1}}>
      <Grid container spacing={1}  >
        <Grid item xs={3}>
          <Item sx={{backgroundColor:"#2e5c76", boxShadow: "none"}}>
          <Avatar alt="gpu" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsSJFmJyGJ8l0DklKCj1VQQozP1EnncMZbwQ&usqp=CAU" />
          </Item>
        </Grid>
        <Grid item xs>
          <Item sx={{backgroundColor:"#2e5c76",boxShadow:'none'}}>
          <Stack Stack direction="row" spacing={2} marginTop={2}>
          <Typography variant='subtitle2'  sx={{my:-1,color:'white'}}>GPU Minutes:</Typography>
            <Typography variant='subtitle2' sx={{my:-3,color:'#EC407A'}}>200</Typography>
          </Stack>
          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item sx={{backgroundColor:"#2e5c76",boxShadow:'none'}}>
          <Button sx={{width:12,height:8,padding:3,backgroundColor:'black',borderRadius:6,fontSize:'10px',color:'white'}}>MORE</Button>
          </Item>
        </Grid>
      </Grid>
    </Box>     

    </Box>
   </TabPanel>
     
    </Box>
  );
}
