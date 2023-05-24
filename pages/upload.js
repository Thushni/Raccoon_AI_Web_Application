import React, { useState } from 'react';
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
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Input from '@mui/material/Input';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { styled } from "@mui/material/styles";


function saveFileToLocalStorage(file) {
    // convert the file object to a base64 string
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
        const base64File = reader.result;

        // save the base64-encoded file to localStorage
        localStorage.setItem("Upload File", base64File);
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

    const [selectedFile, setSelectedFile] = useState(null);

    function handleFileChange(event) {
        setSelectedFile(event.target.files[0]);
    }

    function handleSaveButtonClick() {
        if (selectedFile) {
            saveFileToLocalStorage(selectedFile);
            handleClose();

        }
    }

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
        ...theme.typography.body2,
        padding: theme.spacing(5),
        textAlign: "center",
        color: theme.palette.text.secondary,
        width: "100%",
        margin: theme.spacing(0),
      }));

    return (
        <div className={styles.container} >
            <main className={styles.main}>

                <div className={styles.grid}>
                    <a
                        className={styles.card}>
                        <p className={styles.description} alignItems='left'></p>
                        <Typography component="h4" variant="h5">
                            <h4>From File</h4>
                        </Typography>

                        <Typography component="h3" variant="h5">
                            <h6>Add your dataset here. Then we will guide through some rich data analysis and bring you through the ML pipelines.</h6>
                        </Typography>
                        <Stack spacing={1} alignItems="left" >
                            <Stack direction="row" spacing={2} >
                                <Chip label="csv" color="success" />
                                <Chip label="Max Size :1MB" color="error" />
                            </Stack>
                        </Stack>

                        <div>
                            <Button className={styles.button} type="submit" variant="outlined" onClick={handleClickOpen}>
                                CLICK HERE TO UPLOAD
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

                                        <Button autoFocus color="inherit" onClick={handleSaveButtonClick}>
                                            save
                                        </Button>

                                    </Toolbar>
                                </AppBar>
                                <ThemeProvider theme={theme}>

                                    <Grid container>
                                
      <Grid item xs={12} sm={8}>
      <Paper style={{ padding: 70, paddingTop: 40, paddingBottom: 40, minHeight:"90%" }}>
                                                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                                                    <Typography component="h3" variant="h5">
                                                        <h6>
                                                            Here you can easily upload your CSV data to our platform for further analysis.
                                                            Simply select your file and hit upload to get start</h6>
                                                    </Typography>

                                                    <Input type="file" onChange={handleFileChange}>
                                                        <Stack spacing={2} direction="row">
                                                            <Button variant="contained">
                                                                Choose File
                                                            </Button>
                                                        </Stack>
                                                    </Input>
                                          </Box>
                                                </Paper>
     
                                        </Grid>
                                        <Grid item display={{ xs: "none", sm: "block" }} sm={4}>
        <Item style={{ background: "#f2f2f2" }}>
        <Typography
            variant="h5"
            component="h5"
            padding={10}
            margin-top={10}
            margin-bottom={10}
            align="left"
            color="#9A9A9A"
            justify-content="flex-start"
          >
           Upload your data set here
          </Typography>
                                        <div >
            <img
              src="/register.png"
              alt=""
              height="auto"
              width="80%"
              component="img"
              padding="100px 100px"
              sx={{
                height: 233,
                width: 350,
                maxWidth: { xs: 350, md: 250 },
              }}
            />
          </div>
          </Item>
      </Grid>
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