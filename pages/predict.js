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
import { TextField, Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material';
import { TableVirtuoso } from 'react-virtuoso';
const headerStyle = { fontWeight: 'bold' };
import { styled } from "@mui/material/styles";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});
const theme = createTheme();


export default function HomeDialog() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const [csvData, setCsvData] = useState([]);

    function saveFileToLocalStorage(file) {

        // convert the file object to a csv string
        const fileReader = new FileReader();
        fileReader.readAsText(event.target.files[0], 'UTF-8');
        fileReader.onload = (e) => {
            const csvText = e.target.result;
            const csvRows = csvText.split('\n').map(row => row.split(','));
            setCsvData(csvRows);
            localStorage.setItem('Upload Predict Data', JSON.stringify(csvRows));
        };
    }

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
            <Button id="btnTrain" style={{ margin: 10 }} variant="contained" onClick={handleClickOpen}>  Upload  Predict</Button>
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
                            Upload your predict data set here
                        </Typography>

                        <Button autoFocus color="inherit" onClick={handleClose}>
                            save
                        </Button>

                    </Toolbar>
                </AppBar>
                <ThemeProvider theme={theme}>
                <Grid container>
                                
                                <Grid item xs={12} sm={8}>
                                <Paper style={{ padding: 70, paddingTop: 40, paddingBottom: 40, minHeight:"90%" }}>
                                <Box component="form" noValidate sx={{ mt: 1 }}>
                                <Typography component="h3" variant="h5">
                                                        <h6>
                                                        Upload predict data file set here.Once uploaded, the data is processed by your prediction model, which generates predictions based on the data. </h6>
                                                    </Typography>
                          
                                    <Stack direction="row" alignItems="center" spacing={4}>
                                        <div>
                                            <input
                                                accept=".csv"
                                                style={{ display: 'none' }}
                                                id="csv-file"
                                                type="file"
                                                onChange={saveFileToLocalStorage}
                                            />
                                            <label htmlFor="csv-file">
                                                <Button variant="contained" component="span">
                                                    Upload Predict file
                                                </Button>
                                            </label>
                                            <br></br>
                                            {csvData.length > 0 && (
                                                <div>

                                               
                                                <Table style={{ backgroundColor: '#8BC34A',overflowY: 'scroll',overflowX:'scroll', width: '70%', height: '100vh' }}>
                                                    <TableHead>
                                                        <TableRow>
                                                            {csvData[0].map((cell, index) => (
                                                             <TableCell key={index} style={headerStyle}>{cell}</TableCell>
                                                            ))}
                                                        </TableRow>
                                                    </TableHead>
                                                    <TableBody>
                                                        {csvData.slice(1).map((row, rowIndex) => (
                                                            <TableRow key={rowIndex}>
                                                                {row.map((cell, cellIndex) => (
                                                                    <TableCell key={cellIndex}>{cell}</TableCell>
                                                                ))}
                                                            </TableRow>
                                                        ))}
                                                    </TableBody>
                                                </Table>
                                                </div>
                                            )}
                                        </div>



                                    </Stack>




                                
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
           Upload predict data
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


    )
}