/** import { CardHeader, Paper, Accordion, , Icon, IconButton to import * */
import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Papercut from './PaperCut';

function Content() {
  return (
    <Container maxWidth="md">
      <Grid container spacing={1}>
        <Papercut />
        <Papercut />
        <Papercut />
        <Papercut />
        <Papercut />
        <Papercut />
        <Papercut />
        <Papercut />
        <Papercut />
        <Papercut />
      </Grid>

    </Container>
  );
}

export default Content;
