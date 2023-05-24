import React, { useState } from 'react';
import Stack from '@mui/material/Stack';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

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


export default function Home() {

    const [items, setItems] = useState([]);

    async function fetchItems() {

        const response = await fetch(`https://engine.raccoon-ai.io/api/v1/projects/get-all?filter=accessible`,
            {
                method: 'GET',
                timeout: 0,
                headers: {
                    'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6InJhZS1lbmdpbmUiLCJ0eXAiOiJKV1QifQ.eyJpZCI6IjdmN2MwYzM5LTA5MzAtNDNmMi04MWEzLTI5ZTNjZmZlY2FhNCIsImVtYWlsIjoibmF2aUBnbWFpbC5jb20iLCJleHAiOjE2ODc5MzM0MDIsIm5iZiI6MTY4MDE1NzM5NywiaXNzIjoicmEtZW5nIiwiYXVkIjoicmFlOndlYiIsImlhdCI6MTY4MDE1NzQwMn0.jJDW8QXv8UyXVFxhZgeSeZmGuo_OPvFzACIoZYOiUa9ph_lmRCNdpI_CKuc_5832ktq5miNQ7cYJKj_ZH5YxWdkGoALUh_ajIfQOb9s1CvC_YR2xQrEmJU6pScUrFqoKX4OHat2p7eQJ2ncWcnO0HV3pm8j_4bup_0wNBvfiXIufc1oYulfkMJqZTbXlqUakey-buXMKP-2Z-wmnCSFxZf6ZhDu7CxX7PibtPi5trWYAj3-OpnAPUqxuSSSBBjT82xrQqsEL1oediIzcc7SWnoGyY5x8W451qcPQgA16OyXdRrG9l5lL7qVVA_IRFQD8Xfs3IZJpw-BE4-738rUYgU1Ugu_4pFrkXn1Lo12BMBy4tohDt_dagwO64IwT7Aql_J3WtzQjmKkQE_kiPGVF1OvTdA2u1oRcVh-ci--Ujg8El_BLSmKj5NQuGp20XOrY2NNdAdSompqf-46BKR56xPVLsLK-K0bFqQaBsLg9sBmgTH3xfICTFJyR9nHvAqf_hNmGisnVjq0uhbgRi9qIbgABOXusOsuwW6v-oDIkHdl1xgjdX_csqukg_V9R97V09Ke5N-xXnRJb7RwKEZVbc8t_WHbYZJYEO7OXNUNi_Yc-TSs943NrP5bGTm3zZQ8zRdldfdb7SbcNPL0baF8cJa1TGHdBXDYljOqLVMvExMA',
                },
            });

        const json = await response.json();
        setItems(json);

        //  console.log(json);

    }
    fetchItems();

    return (
        <div >
            {items.result && items.result.map((items) =>
                <>

                    <Box sx={{ width: '90%', paddingBottom:1.5 }}>

                        <Stack spacing={2} paddingBottom={0}>
                            <Item sx={{ backgroundColor: "#2e5c76", border: 0, borderRadius: 6, padding: 2,':hover': {  backgroundColor: "#546e7a" } }}>
                                <Stack
                                    direction={{ xs: 'column', sm: 'column', md: 'row', lg: 'row' }}
                                    spacing={{ xs: 0, sm: 0, md: 0 }}
                                    sx={{ marginLeft: 1, marginTop: 0.3 }}>
                                    <Stack spacing={0}>
                                        <Typography color="white" variant='h6'><b>{items.name}</b> </Typography>
                                        <Typography  color="white" variant='caption'> <b>Created Date:</b></Typography>
                                        <Typography  color="white" variant='caption'> {items.created_at}</Typography>
                                        <Typography  color="white" variant='caption'><b>Updated Date:</b> </Typography>
                                        <Typography  color="white" variant='caption'> {items.updated_at}</Typography>
                                    </Stack>
                                    <Stack spacing={-0.7}>
                                        <Typography  color="white" sx={{paddingTop:0.5,}}>{items.algo_type}</Typography>
                                       
                                    </Stack>
                                </Stack>
                            </Item>
                        </Stack>
                    </Box>

                </>
            )}

        </div>
    );
}
