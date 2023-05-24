import React from 'react'
import Link from 'next/link'
import fetcher from '../lib/fetcher';
import Spinner from './_child/spinner';
import Error from './_child/error';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Paper from '@mui/material/Paper';
import ListSubheader from '@mui/material/ListSubheader';
import { Stack } from '@mui/system';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Footer from '../pages/footer'

export default function section2() {

    const { data, isLoading, isError } = fetcher('api/posts')

    if (isLoading) return <Spinner></Spinner>
    if (isError) return <Error></Error>

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            project: data.get('project'),

        });
    };

    return (
        <>

            <div>
                <Grid container component="main" justify="space-between"
                    style={{
                        backgroundImage: 'url(/createaccount.svg)',
                        backgroundRepeat: 'no-repeat',
                        height: '100vh',


                    }}>


                    <Grid item xs={12} component={Paper} elevation={0} square sx={{ boxShadow: 'none' }}>
                        <Box
                            sx={{

                                my: 2,
                                mx: 0,
                                height: '100vh',
                                flexDirection: 'column',
                                alignItems: 'center',
                                boxShadow: 'none'
                            }}
                        >
                            <ListSubheader component="div" id="nested-list-subheader">
                                <Stack direction="row" spacing={2}>
                                    <Link href='home'>
                                        <IconButton aria-label="delete" size="small">
                                            <CloseIcon fontSize="inherit" />
                                        </IconButton>
                                    </Link>
                                    <Typography sx={{ color: '#616161', fontSize: '25px' }}>Create a project - Step 1 of 3</Typography>
                                </Stack>
                                <h1> Upload your data set here</h1>
                            </ListSubheader>

                            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>


                                <Grid>
                                    <Accordion>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel1a-content"
                                            id="panel1a-header"
                                        >
                                            <Typography><h2>Regression</h2></Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Box sx={{ flexGrow: 1 }}>
                                                <Grid container  alignItems="stretch" columns={{ xs: 4, sm: 8, md: 12 }} >
                                                    <Grid item style={{display: 'flex'}}>
                                                     <Card style={{display: 'flex', justifyContent: 'space-between', flexDirection: 'column',boxShadow:'none'}}>  < Post data={data[0]}></Post></Card>

                                                    </Grid>
                                                    <Grid item style={{display: 'flex'}}>
                                                    <Card style={{display: 'flex', justifyContent: 'space-between', flexDirection: 'column',boxShadow:'none'}}>  <Post data={data[1]}></Post></Card>
                                                      

                                                    </Grid>
                                                    <Grid item style={{display: 'flex'}}>
                                                    <Card style={{display: 'flex', justifyContent: 'space-between', flexDirection: 'column',boxShadow:'none'}}> <Post data={data[2]}></Post></Card>
                                                       

                                                    </Grid>
                                                    <Grid item style={{display: 'flex'}}>
                                                    <Card style={{display: 'flex', justifyContent: 'space-between', flexDirection: 'column',boxShadow:'none'}}><Post data={data[3]}></Post></Card>

                                                    </Grid>
                                                    <Grid item style={{display: 'flex'}}>
                                                    <Card style={{display: 'flex', justifyContent: 'space-between', flexDirection: 'column',boxShadow:'none'}}> <Post data={data[4]}></Post></Card>
                                                       
                                                    </Grid>
                                                </Grid>
                                            </Box>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel2a-content"
                                            id="panel2a-header"
                                        >
                                            <Typography><h2>Time series</h2></Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Box sx={{ flexGrow: 1 }}>
                                                <Grid container  alignItems="stretch" columns={{ xs: 4, sm: 8, md: 12 }}>

                                                    <Grid item style={{display: 'flex'}}>
                                                    <Card style={{display: 'flex', justifyContent: 'space-between', flexDirection: 'column',boxShadow:'none'}}> <Post data={data[5]}></Post></Card>
                                                        
                                                    </Grid>
                                                    <Grid item style={{display: 'flex'}}>
                                                    <Card style={{display: 'flex', justifyContent: 'space-between', flexDirection: 'column',boxShadow:'none'}}> <Post data={data[6]}></Post></Card>
                                                    </Grid>
                                                    <Grid item style={{display: 'flex'}}>
                                                    <Card style={{display: 'flex', justifyContent: 'space-between', flexDirection: 'column',boxShadow:'none'}}> <Post data={data[7]}></Post></Card>
                                                    </Grid>
                                                </Grid>
                                            </Box>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel2a-content"
                                            id="panel2a-header"
                                        >
                                            <Typography><h2>classification</h2></Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Box sx={{ flexGrow: 1 }}>
                                                <Grid container  alignItems="stretch"  columns={{ xs: 4, sm: 8, md: 12 }}>

                                                    <Grid item style={{display: 'flex'}}>
                                                    <Card style={{display: 'flex', justifyContent: 'space-between', flexDirection: 'column',boxShadow:'none'}}> <Post data={data[8]}></Post></Card>
                                                    </Grid>
                                                    <Grid item style={{display: 'flex'}}>
                                                    <Card style={{display: 'flex', justifyContent: 'space-between', flexDirection: 'column',boxShadow:'none'}}> <Post data={data[9]}></Post></Card>
                                                    </Grid>
                                                    <Grid item style={{display: 'flex'}}>
                                                    <Card style={{display: 'flex', justifyContent: 'space-between', flexDirection: 'column',boxShadow:'none'}}> <Post data={data[10]}></Post></Card>
                                                    </Grid>
                                                    <Grid item style={{display: 'flex'}}>
                                                    <Card style={{display: 'flex', justifyContent: 'space-between', flexDirection: 'column',boxShadow:'none'}}> <Post data={data[11]}></Post></Card>
                                                    </Grid>
                                                </Grid>

                                            </Box>
                                        </AccordionDetails>
                                    </Accordion>
                                </Grid>


                                <Grid sx={{ marginTop: 7 }}>
                                    <Footer />
                                </Grid>
                            </Box>
                        </Box>
                    </Grid>

                </Grid>
            </div>
        </>

    )
}

function Post({ data }) {

    var cardStyle = {
        display: 'block',
        transitionDuration: '0.3s',
        height: '100%',
        padding: 8,
    }
    const { id, title, img, des } = data;
    return (
        <div>
            <Link href={`/posts/${id}`} style={{ textDecoration: 'none' }}>


                <div>

                    <Card sx={{ maxWidth: 345,padding:2,height:'35vh',width:'20vw',margin:1 }}>
                        <CardMedia
                            component="img"
                            alt="img"
                            height="140"
                            image={img} />
                        <CardContent>

                            <Typography gutterBottom sx={{ fontSize: '18px', fontWeight: 'bold' }}>
                                {title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {des}
                            </Typography>
                        </CardContent>
                    </Card>
                </div>
            </Link>

        </div>

    )
}

