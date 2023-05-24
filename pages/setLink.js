import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import styles from '../styles/Layout.module.css'
import Button from '@mui/material/Button';
import Slide from '@mui/material/Slide';
import Chip from '@mui/material/Chip';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select, { selectClasses } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import Grid from '@mui/material/Grid';


const cors = require('cors');

const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200,
};


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const theme = createTheme();


export default function HomeDialog() {


  const [csvUrl, setcsvUrl] = useState("");

  const handleUrlChange = (event) => {
    setcsvUrl(event.target.value);
  };

  const handleDownload = async (event) => {
    event.preventDefault();
    const response = await fetch(csvUrl, {
      method: 'GET',
      mode: 'no-cors',
    });
    const blob = await response.blob();

    const filename = "data.csv";
    if (typeof window.navigator.msSaveBlob !== "undefined") {
      window.navigator.msSaveBlob(blob, filename);
    } else {
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    }

    const fileReader = new FileReader();
    fileReader.onload = () => {
      const fileContents = fileReader.result.toString();
      localStorage.setItem("data.csv", fileContents);
      console.log(localStorage.getItem("data.csv"));
    };
    fileReader.readAsText(blob);
  };



  const handleChange = (event) => {
    setC(event.target.value);
  };
  const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={styles.container} >
      <main className={styles.main}>

        <div className={styles.grid}>
          <a
            className={styles.card1}>
            <Typography component="h4" variant="h5">
              <h4>From Link</h4>
            </Typography>
            <Typography component="h3" variant="h5">
              <h6>Add your dataset here. Then we will guide through some rich data analysis and bring you through the ML pipelines.</h6>
            </Typography>
            <Stack spacing={1} alignItems="left">

              <Stack direction="row" spacing={1}>
                <Chip label="csv" color="success" />
                <Chip label="Max Size :1MB" color="error" />
              </Stack>
            </Stack>

            <div>
              <Button className={styles.button} type="submit" variant="outlined" onClick={handleClickOpen}>
                Set Link
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
                  <Grid container component="main" sx={{ height: '60vh' }}>
                    <CssBaseline />

                    <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                      <Box
                        sx={{
                          my: 35,
                          mx: 8,
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                        }}
                      >

                        <Box >
                          <Stack direction="row" alignItems="center" spacing={4}>
                            <Box
                              component="form"
                              sx={{
                                '& > :not(style)': { m: 2, width: '60ch' },
                              }}
                              noValidate
                              autoComplete="off"
                            >

                              <TextField
                                id="csvUrl"
                                label="Please enter the link to the file"
                                variant="outlined"
                                value={csvUrl}
                                onChange={handleUrlChange}
                              />
                            </Box>



                          </Stack>



                          <Button href="http://localhost:3000/category" className={styles.button4} variant="outlined" onClick={handleDownload} >
                            fetch
                          </Button>

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