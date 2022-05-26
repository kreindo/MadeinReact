import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

export function PaperCut({ props }) {
  return (
    <Grid item xs={3}>
      <Paper sx={{ height: '100px', width: '90px', margin: '10px', padding: '10px', backgroundColor: '#132939' }}>
        <Typography sx={{ color: 'white', padding: '0' }}>{props.name}</Typography>
      </Paper>
    </Grid>
  );
}

export default PaperCut;
