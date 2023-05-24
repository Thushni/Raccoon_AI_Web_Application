import React from "react";
import getPost from '../../lib/helper'
import fetcher from '../../lib/fetcher'
import Spinner from '../../components/_child/spinner'
import ErrorComponent from '../../components/_child/error'
import { useRouter } from 'next/router'
import { SWRConfig } from 'swr'
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import { useState, useEffect } from 'react';
import Card from "@mui/material/Card";

import Swal from 'sweetalert2';
import CardContent from "@mui/material/CardContent";
import View from '../view';

import Dialog from '@mui/material/Dialog';

import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Footer from "../footer";
import Predict from '../predict';


import Papa from 'papaparse';
import { Typography } from "@mui/material";




function fetchCSVFromLocalStorage() {

    console.log(typeof window);
    if (typeof window !== 'undefined') {
        const csvData = localStorage.getItem('Upload File');
        if (!csvData) {
            alert('CSV data not found in local storage');
        }
        // const { data, meta } = Papa.parse(csvData, { header: true });
        const decodedCsvData = new TextDecoder('utf-8').decode(Uint8Array.from(atob(csvData.split(',')[1]), c => c.charCodeAt(0)));
        const { data, meta } = Papa.parse(decodedCsvData, { header: true });

        return {
            columns: meta.fields,
            rows: data
        };
        // return Papa.parse(csvData).data;
    } else {
        return [];
    }


}


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

function getStyles(name, personName, theme) {
    return {
        fontWeight:
            personName.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}


export default function Page({ fallback }) {

    useEffect(() => {
        const justNavigated = window.performance.navigation.type === 1; 
    
        if (justNavigated) {
            Swal.fire({
                title: 'Your project has been successfully created!',
                icon: 'success',
                confirmButtonText: 'OK'
              })
        }
      }, []);

    const router = useRouter()
    const { postId } = router.query;
    const { data, isLoading, isError } = fetcher(`api/posts/${postId}`);

    // const csvCheck = fetchCSVFromLocalStorage();
    // console.log("CSV Data:--------------------------->>> ", csvCheck);

    if (isLoading) return <Spinner></Spinner>
    if (isError) return <ErrorComponent></ErrorComponent>

    return (
        <SWRConfig value={{ fallback }}>

            <Article {...data}></Article>

        </SWRConfig>
    )
}
function Article({ train, title, algo_type, algo_selected, config, des }) {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const theme = useTheme();
    const [value2, setValue2] = useState('');
    const [value1, setValue1] = useState([train.options]);

    const handleChange2 = (event) => {
        setValue2(event.target.value);
    };

    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setValue1(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    if (typeof window !== 'undefined') {
        const storedProject = localStorage.getItem("Project Name");
        const storedDescription = localStorage.getItem("Description");

        console.log("Stored Project: ", storedProject);
        console.log("Stored Description: ", storedDescription);

        const router = useRouter();
        const { postId } = router.query;
        const [postData, setPostData] = useState({});
        const [algoType, setAlgoType] = useState("");
        const [algoSelected, setAlgoSelected] = useState("");

        useEffect(() => {
            if (postId) {
                fetch(`/api/posts/${postId}`)
                    .then(response => response.json())
                    .then(data => {
                        setPostData(data);
                        setAlgoType(data.algo_type);
                        setAlgoSelected(data.algo_selected);
                    });
            }
        }, [postId]);



        const data = JSON.stringify({
            "name": storedProject,
            "description": storedDescription,
            "algo_type": algoType,
            "algo_selected": algoSelected
        });



        const myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6InJhZS1lbmdpbmUiLCJ0eXAiOiJKV1QifQ.eyJpZCI6IjdmN2MwYzM5LTA5MzAtNDNmMi04MWEzLTI5ZTNjZmZlY2FhNCIsImVtYWlsIjoibmF2aUBnbWFpbC5jb20iLCJleHAiOjE2ODgxODkzMTgsIm5iZiI6MTY4MDQxMzMxMywiaXNzIjoicmEtZW5nIiwiYXVkIjoicmFlOndlYiIsImlhdCI6MTY4MDQxMzMxOH0.S3S1V2bHIJzVgyCmTN47hcPgKkKqFk3Xe4B2ObchpU5mx7ibyoSmmyzfISIj6LBqapRBK0rHE2-sCYD4Gc7OBF-4Q7FoqXNb6VOVo9fUrB1Gs25ILQ6hPy9oJLFA9tC6tNw2p-4PrwEHJxsvl1lhd18vwyqzo0BsIB8JlPWXbhIAyaNdRA02_Mw-0ZqImJoI27CzJrUgXwUVqd3nc_3Z1g-oIRCRST4UVocCBSX_-L7ciY7qddcOkzj8T8ta_ZWZX6iiwCdK2JgIFFqLHgBa7iBvbjSiBCCIRREij8liq6k_geOY8SI2Ekx7KSaQtLI67OdTsJWRkZLb3thbtS_pugYPRNBh6g11y0jm-U2qSmskU2co9hpQopbDy0TVJHNepG9vK506xy-0-QVnCAUG80CZSr7QlMzK-oEHF1Hn7HYiuTJ3VhPwscSv52fqiW47yjTadhVbgPjHXOVAtRh7sQEWnQV1bUB21BOaq6ItMdnaOAfh08jR9C2kcNanekHf63X0msipURXBB_8iBnPjutUOAkj1DnBR2krenwWdx5Y6E61rsmPbfA22mGWGadCaojYpn-icVorgISSyRJpYU4D20zrjhw1bsfhYmybH7prfUz_tOFCSqZehSeIbOtFMU5gqieDRkh46hFbRsrLlrq9i3oC_F0jf3UxmbdoiYUQ");
        myHeaders.append("Content-Type", "application/json");


        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: data,
            redirect: 'follow'
        };

        fetch("https://engine.raccoon-ai.io/api/v1/projects/new", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    };


    useEffect(() => {
        const { columns, rows } = fetchCSVFromLocalStorage();
        if (columns && rows) {
            setData2({ columns, rows });
        }
    }, []);

    const [data2, setData2] = React.useState();
    const handleChange3 = (event) => {
        const {
            target: { value },
        } = event;
        setData2(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };
    return (

        <>

            <Grid container sx={{ margin: 2 }}>
                <Grid item xs={5}>
                    <Typography color="primary"
                        align="left"
                        marginLeft={5}
                        variant="h4" >{title}</Typography>
                    <Typography color="black"
                        align="left"
                        marginLeft={5}
                        variant="subtitle1" >{des}</Typography>
                    <Card sx={{ backgroundColor: "paleturquoise", margin: 2 }}>
                        <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                <b>Algo Type:{algo_type}</b>
                            </Typography>
                        </CardContent>
                    </Card>
                    <Card sx={{ backgroundColor: "azure", margin: 2 }}>
                        <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                <b> Algo selected:{algo_selected}</b>
                            </Typography>
                        </CardContent>
                    </Card>

                </Grid>


                <Grid item xs>
                

                    {/* settings dialog */}

                    <div align="center">

                    
                    <div>
                    <View></View>
                    </div>
                

                        <div>
                        
                            <Button sx={{width:"120px"}} variant="outlined" onClick={handleClickOpen}>
                                Settings
                            </Button>
                        </div>
                        <Dialog
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="-dialog-title"
                            aria-describedby="dialog-description">
                            <DialogTitle id="dialog-title">

                                Settings
                            </DialogTitle>
                            <DialogContent>
                                <DialogContentText id="dialog-description">

                                    {config.map(cdata => {
                                        return (
                                            <div>
                                                <div>
                                                    <label>{cdata.label}</label>
                                                    {cdata.multi ?
                                                        //mutiple selctor


                                                        <FormControl sx={{ m: 1, minWidth: 300 }}>
                                                            <InputLabel id="demo-multiple-name-label">Select...</InputLabel>
                                                            <Select
                                                                labelId="demo-multiple-name-label"
                                                                id="demo-multiple-name"
                                                                multiple
                                                                value={value1}
                                                                onChange={handleChange}
                                                                input={<OutlinedInput label="multiselect" />}
                                                                MenuProps={MenuProps}
                                                            >
                                                                {cdata.options.map((multiselect) => (
                                                                    <MenuItem
                                                                        key={multiselect}
                                                                        value={multiselect}
                                                                        style={getStyles(multiselect, value1, theme)}
                                                                    >
                                                                        {multiselect}
                                                                    </MenuItem>
                                                                ))}
                                                            </Select>
                                                        </FormControl>


                                                        :

                                                        <>
                                                            {cdata.options ?
                                                                //selector



                                                                <FormControl sx={{ m: 1, minWidth: 300 }}>
                                                                    <InputLabel id="demo-simple-select-label">Select...</InputLabel>
                                                                    <Select
                                                                        labelId="demo-simple-select-label"
                                                                        id="demo-simple-select"
                                                                        value={value2}
                                                                        label="value2"
                                                                        onChange={handleChange2}
                                                                    >
                                                                        {cdata.options.map((select) => (
                                                                            <MenuItem
                                                                                key={select}
                                                                                value={select}
                                                                                style={getStyles(select, value2, theme)}
                                                                            >
                                                                                {select}
                                                                            </MenuItem>
                                                                        ))}

                                                                    </Select>

                                                                </FormControl>


                                                                :
                                                                //textarea

                                                                <div>
                                                                    <input name={cdata.name} type={cdata.data_type} html_element={cdata.html_element} />

                                                                </div>
                                                            }

                                                        </>
                                                    }
                                                </div>
                                            </div>


                                        )
                                    })}
                                </DialogContentText>
                            </DialogContent>


                            <DialogActions>
                                <Button onClick={handleClose}>OK</Button>



                            </DialogActions>
                        </Dialog>
                    </div>
                    {/* settings dialog */}


                </Grid>
            </Grid>
            <Grid container sx={{ margin: 4 }}>

                <Grid item xs>

                    {/* Features */}

                    <Grid item xs>
                        <Typography variant="subtitle2" >  <label>Features</label></Typography>
                        <FormControl sx={{ m: 1, minWidth: 300 }}>
                            <InputLabel id="demo-multiple-name-label">Select...</InputLabel>
                            <Select
                                labelId="demo-multiple-name-label"
                                id="demo-multiple-name"
                                value={data2}
                                onChange={handleChange3}

                            >
                                {data2 ? (
                                    <>

                                        {data2.columns.map((col) => (
                                            <MenuItem
                                                key={col}
                                                multiple
                                                value={data2}
                                            >{col}</MenuItem>
                                        ))}

                                    </>
                                ) : (
                                    <p>CSV data not found in local storage</p>
                                )}
                            </Select>
                        </FormControl>


                    </Grid>



                    {/* Features */}
                    {/* Targets */}

                    <div>

                        <Typography variant="subtitle2">   <label>Targets</label> </Typography>
                        <FormControl sx={{ m: 1, minWidth: 300 }}>
                            <InputLabel id="demo-multiple-name-label">Select...</InputLabel>
                            <Select
                                labelId="demo-multiple-name-label"
                                id="demo-multiple-name"
                                value={data2}
                                onChange={handleChange3}

                            >
                                {data2 ? (
                                    <>

                                        {data2.columns.map((col) => (
                                            <MenuItem
                                                key={col}
                                                multiple
                                                value={data2}
                                            >{col}</MenuItem>
                                        ))}

                                    </>
                                ) : (
                                    <p>CSV data not found in local storage</p>
                                )}
                            </Select>
                        </FormControl>

                    </div>

                    {/* Targets */}

                    <Grid  sx={{align:'center'}}>
                        <Button id="btnTrain" style={{ margin: 10,width:"200px" }} variant="contained">Train</Button>

                    </Grid>
                    <Grid align="left">

                        <hr/>
                        <Predict></Predict>


                        <Button id="btnTrain" style={{ margin: 10 ,width:"200px"}} variant="contained">Predict</Button>

                        <Button id="btnTrain" style={{ margin: 10 ,width:"200px"}} variant="contained">Predict Settings</Button>

                    </Grid>
                </Grid>
                <Grid item xs={6} sx={{ border: 1 }}>
                    <div>
                        <Box sx={{ border: 1 }}>Chart</Box>
                    </div>
                    <div>
                        <Box sx={{ border: 1 }}>Table</Box>
                    </div>
                    <div>

                    </div>
                </Grid>
            </Grid>
        </>

    )
}

export async function getStaticProps({ params }) {

    const posts = await getPost(params.postId)

    return {
        props: {
            fallback: {
                '/api/posts': posts
            }
        }
    }

}

export async function getStaticPaths() {

    const posts = await getPost();
    const paths = posts.map(value => {
        return {
            params: {
                postId: value.id.toString()
            }
        }
    })

    return {
        paths,
        fallback: false
    }

}
