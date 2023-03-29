import * as React from 'react';
import { Box, Typography, createTheme, Button, ThemeProvider } from '@mui/material';
import { Container } from '@mui/system';

const theme = createTheme({
    palette: {
      primary: {
        main: '#212121',
        contrastText: '#fff',
      },
    },
});

function Landing() {
  return (
    <Box sx={{ flexGrow: 1 }}>
        <Typography variant='h2' gutterBottom align='center' sx={{marginTop: 5, marginBottom: 5}}>
            ¡Bienvenido a tu IntelligentBot!
        </Typography>
        <Container align='center'>
        <Box component="img" src="/BOT.jpg"/>        
        </Container>
        <Typography variant='h6' gutterBottom align='center' paragraph='true' sx={{marginLeft: 65, marginRight: 65, marginBottom: 5, marginTop: 3}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Typography>
        <Container align='center'>
            <ThemeProvider theme={theme}>
                <Button variant='contained' onClick={event => window.location.href='/login'}>
                    LogIn
                </Button>
                <Button variant='contained' color='primary' sx={{ marginLeft: 4}} onClick={event => window.location.href='/signup'}>
                    SignUp
                </Button>
            </ThemeProvider>
        </Container>
    </Box>
  );
}
export default Landing;