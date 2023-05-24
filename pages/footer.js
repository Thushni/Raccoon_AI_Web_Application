import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://Raccoon-AI.com/">
        Raccon-AI
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


const footers = [
  {

  },

];

function FooterContent() {
  return (
    <React.Fragment>

      <AppBar position="relative" sx={{ backgroundColor: "#29abe2", boxShadow: 'none' }}>
        <Grid container spacing={4} justifyContent="space-evenly" padding="4em 0 ">
          {footers.map((footer) => (
            <Grid item xs={1} sm={2}>
              <Copyright sx={{ mt: 1 }} />
            </Grid>
          ))}
        </Grid>
      </AppBar>
    </React.Fragment>
  );
}

export default function Footer() {
  return <FooterContent />;
}
