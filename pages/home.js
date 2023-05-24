import React, { useState } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { ThemeProvider } from '@mui/material/styles';
import { useTheme } from '@mui/material/styles';
import Link from '@mui/material/Link';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import { styled } from "@mui/material/styles";



export default function SignInSide() {

    const [open, setOpen] = React.useState(false);
    const theme = useTheme();


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            project: data.get('project'),

        });
    };

    const [project, setProject] = useState("");
    const [description, setDescription] = useState("");

    const handleProjectChange = (event) => {
        setProject(event.target.value);
    };

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    };
    function handleSaveButtonClick() {
        localStorage.setItem("Project Name", project);
        localStorage.setItem("Description", description);

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
        <ThemeProvider theme={theme}>

            <Grid container>
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
                            fontWeight="bold"
                        >
                            Let us start with a name for your project
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
                <Grid item xs={12} sm={8}>
                    <Paper style={{ padding: 70, paddingTop: 40, paddingBottom: 40, minHeight: "90%" }}>



                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                            <br></br>
                            <br></br>
                            <br></br>   

                            <br></br>
                            <Typography variant="h6" component="h6" padding={0} align="left">
                                Add your project here

                            </Typography>
                            <br></br>

                            <br></br>
                            <Typography component="h3" variant="h6" fontWeight="bold">
                                Project Name
                            </Typography>

                            <TextField
                                margin="normal"
                                required
                                style={{ width: 850 }}
                                variant="outlined"
                                id="project"
                                label="Enter Your project name"
                                value={project}
                                onChange={handleProjectChange}
                            />
                            <Typography component="h3" variant="h6" fontWeight="bold">
                                Description
                            </Typography>
                            <br></br>
                            <TextareaAutosize
                                margin="normal"
                                aria-label="minimum height"
                                minRows={4}
                                placeholder=""
                                id="description"
                                value={description}
                                style={{ width: 850 }}
                                onChange={handleDescriptionChange}

                            />
                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="I confirm that my model is to save here without saving data"

                            />
                            <br></br>
                            <Link href="Database">
                                <Button onClick={handleSaveButtonClick}
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                >
                                    Continue
                                </Button>
                            </Link>
                        </Box>

                    </Paper>

                </Grid>

            </Grid>
        </ThemeProvider>
    );
}