import * as React from 'react';
import Button from '@mui/material/Button';
import styles from '../styles/Layout.module.css'
import Upload from './upload';
import SetLink from './setLink';
import SetDb from './setDb';
import Link from '@mui/material/Link';

import Typography from '@mui/material/Typography';
export default function Linkpage() {

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      project: data.get('project'),

    });
  };

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
        <p className={styles.description} alignItems='left'>
          <Typography component="h4" variant="h5">
            <h4>Upload your data set here</h4>
          </Typography>
        </p>

        <div className={styles.grid}>

          <Upload></Upload>
          <SetLink></SetLink>
          <SetDb></SetDb>

        </div>

        <Link href="http://localhost:3000/linktosection2
        ">

          <Button className={styles.button1} type="submit" variant="outlined" onClick={handleClickOpen}>
            Continue
          </Button>
        </Link>
      </main>
    </div>
  )
}