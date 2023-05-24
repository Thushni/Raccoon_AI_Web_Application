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
import Papa from 'papaparse';
import { AutoSizer, Table, Column } from 'react-virtualized';
import 'react-virtualized/styles.css';

function fetchCSVFromLocalStorage() {
  console.log(typeof window);
  if (typeof window !== 'undefined') {
    const csvData = localStorage.getItem('Upload File');
    if (!csvData) {
      alert('CSV data not found in local storage');
    }
    const decodedCsvData = new TextDecoder('utf-8').decode(Uint8Array.from(atob(csvData.split(',')[1]), c => c.charCodeAt(0)));
    const { data, meta } = Papa.parse(decodedCsvData, { header: true });

    return {
      columns: meta.fields,
      rows: data
    };
  } else {
    return {
      columns: [],
      rows: []
    };
  }
}

const theme = createTheme({
  overrides: {
    MuiTableCell: {
      head: {
        backgroundColor: '#666666',
        color: '#ffffff',
      },
    },
  },
});

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog() {
  const [open, setOpen] = React.useState(false);
  const { columns, rows } = fetchCSVFromLocalStorage();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button  variant="outlined" onClick={handleClickOpen} sx={{ marginLeft: 4, marginRight: 4,width:"120px" }}>
                                View
                            </Button>
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Uploaded CSV File
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              Close
            </Button>
          </Toolbar>
        </AppBar>
        <div style={{ marginLeft: '10%', marginRight: '10%' }}>
        <AutoSizer>
  {({ height, width }) => (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ width: '75%', height }}>
      <Table
  width={1200} 
  height={675} 
  headerHeight={30}
  rowHeight={40}
  rowCount={rows.length}
  rowGetter={({ index }) => rows[index]}
  cellStyle={{
    textAlign: 'center',
  }}
  
>
          {columns.map((columnName, index) => (
            <Column
              key={columnName}
              label={columnName}
              dataKey={columnName}
              width={width}
              headerStyle={{
                backgroundColor: '#A9A9A9',
                borderRadius: '10px',
                textAlign: 'center',
              }}
              cellRenderer={({ cellData }) => (
                <div style={{ textAlign: 'center' }}>{cellData}</div>
              )}
            />
          ))}
        </Table>
      </div>
    </div>
  )}
</AutoSizer>
</div>
           
      </Dialog>
    </div>

  );
}