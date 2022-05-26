import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

export function PaperCut() {
  return (
    <Grid item xs={4}>
      <Paper elevation={8} sx={{ height: '150px', width: '230px', margin: '10px', padding: '10px', backgroundColor: '#132939' }}>
        <Typography sx={{ color: 'white', padding: '0' }}>{}</Typography>
      </Paper>
    </Grid>
  );
}

export default PaperCut;
