
import * as React from 'react';
import Stack from '@mui/material/Stack';
import styles from '../styles/Layout.module.css'
import Slide from '@mui/material/Slide';
import Chip from '@mui/material/Chip';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select, { selectClasses } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  '1',
  '2',
  '3',
  '4',

];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const theme = createTheme();


export default function HomeDialog() {


  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      project: data.get('project'),

    });
  };

  const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );
  const [personName, setPersonName] = React.useState([]);

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };
  return (

    <div className={styles.container} >
      <main className={styles.main}>

        <div className={styles.grid}>
          <a
            className={styles.card2}>
            <Typography component="h4" variant="h5">
              <h4>From Database</h4>
            </Typography>
            <Typography component="h3" variant="h5">
              <h6>Add your dataset here. Then we will guide through some rich data analysis and bring you through the ML pipelines.</h6>
            </Typography>
            <Stack spacing={1} alignItems="left">
              <Stack direction="row" spacing={1}>
                <Chip label="My SQL" color="success" />

              </Stack>
            </Stack>

            <div>
              <Button className={styles.button} type="submit" variant="outlined" onClick={handleClickOpen}>
                Set Db
              </Button>
              <Dialog
                fullScreen
                open={open}
                onClose={handleClose}
                TransitionComponent={Transition}
              >

                <AppBar sx={{ position: 'relative' }}>
                  <Toolbar>
                    <IconButton
                      edge="start"
                      color="inherit"
                      onClick={handleClose}
                      aria-label="close"
                    >
                      <CloseIcon />
                    </IconButton>
                    <Typography sx={{ ml: 1, flex: 1 }} variant="h6" component="div">
                      Upload your data set here
                    </Typography>
                    <Button autoFocus color="inherit" onClick={handleClose}>
                      save
                    </Button>

                  </Toolbar>
                </AppBar>
                <ThemeProvider theme={theme}>
                  <Grid container component="main" sx={{ height: '100vh' }}>
                    <CssBaseline />

                    <Grid item xs={12} sm={10} md={5} component={Paper}>
                      <Box
                        sx={{
                          my: 7,
                          mx: 8,
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                        }}
                      >


                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>

                          <React.Fragment>
                            <Typography variant="h" gutterBottom>
                              <p className={styles.description} alignItems='left'>
                                Enter Your Data Here</p>
                            </Typography>
                            <Grid container spacing={3}>
                              <Grid item xs={12} sm={12}>
                                <ListItem disablePadding>
                                  <ListItemButton>
                                    <ListItemText primary="Connector" />
                                  </ListItemButton>
                                  <div>
                                    <FormControl sx={{ m: 1, width: 215 }}>
                                      <InputLabel id="demo-multiple-name-label">connector</InputLabel>
                                      <Select
                                        labelId="demo-multiple-name-label"
                                        id="demo-multiple-name"
                                        multiple
                                        value={personName}
                                        onChange={handleChange}
                                        input={<OutlinedInput label="Name" />}
                                        MenuProps={MenuProps}
                                      >
                                        {names.map((name) => (
                                          <MenuItem
                                            key={name}
                                            value={name}
                                            style={getStyles(name, personName, theme)}
                                          >
                                            {name}
                                          </MenuItem>
                                        ))}
                                      </Select>
                                    </FormControl>
                                  </div>
                                </ListItem>
                              </Grid>

                              <Grid item xs={12} sm={12}>
                                <ListItem disablePadding>
                                  <ListItemButton>
                                    <ListItemText primary="Username" />
                                  </ListItemButton>
                                  <TextField id="outlined-basic" label="UserName" variant="outlined" />
                                </ListItem>
                              </Grid>

                              <Grid item xs={12} sm={12}>
                                <ListItem disablePadding>
                                  <ListItemButton>
                                    <ListItemText primary="Host" />
                                  </ListItemButton>
                                  <TextField id="outlined-basic" label="Host" variant="outlined" />
                                </ListItem>
                              </Grid>

                              <Grid item xs={12} sm={12}>
                                <ListItem disablePadding>
                                  <ListItemButton>
                                    <ListItemText primary="Post" />
                                  </ListItemButton>
                                  <TextField id="outlined-basic" label="Post" variant="outlined" />
                                </ListItem>
                              </Grid>


                              <Grid item xs={12} sm={12}>
                                <ListItem disablePadding>
                                  <ListItemButton>
                                    <ListItemText primary="Database" />
                                  </ListItemButton>
                                  <TextField id="outlined-basic" label="Database" variant="outlined" />
                                </ListItem>
                              </Grid>
                              <Grid item xs={12} sm={12}>
                                <ListItem disablePadding>
                                  <ListItemButton>
                                    <ListItemText primary="Password" />
                                  </ListItemButton>
                                  <TextField id="password" type="password" label="" variant="outlined" />
                                </ListItem>
                              </Grid>
                            </Grid>
                          </React.Fragment>

                          <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="success"
                            sx={{ mt: 3, mb: 2 }}
                          >
                            Contained
                          </Button>
                          <Grid container>
                            <Grid item xs>

                            </Grid>

                          </Grid>

                        </Box>
                      </Box>
                    </Grid>
                    <Grid
                      item
                      xs={false}
                      sm={2}
                      md={7}
                      sx={{
                        backgroundImage: 'url(/check.svg)',
                        backgroundRepeat: 'no-repeat',
                        backgroundColor: (t) =>
                          t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                      }}
                    />
                  </Grid>

                </ThemeProvider>
              </Dialog>

            </div>
          </a>




        </div>





      </main>


    </div>
  )
}