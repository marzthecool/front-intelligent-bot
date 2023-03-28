import * as React from 'react';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import { Box, ToggleButtonGroup, ToggleButton, AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Container } from '@mui/system';
// fix
// import { Navigate } from 'react-router-dom';

// const theme = createTheme({
//     palette: {
//       principal: {
//         main: '#64748B',
//         contrastText: '#fff',
//       },
//     },
//   });

function Landing() {
    const [alignment, setAlignment] = React.useState('web');

    const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
    };

  return (
    <Box sx={{ flexGrow: 1 }}>
        <AppBar color="secondary" position="static">
            <Toolbar>
                <SmartToyIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                <Typography
                    variant="h6"
                    noWrap
                    component="a"
                    href="/"
                    sx={{
                    mr: 2,
                    display: { xs: 'none', md: 'flex' },
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'inherit',
                    textDecoration: 'none',
                    }}
                >
                    INTELLIGENTBOT
                </Typography>
                <ToggleButtonGroup
                    color="primary"
                    value={alignment}
                    exclusive
                    onChange={handleChange}
                    aria-label="Platform"
                    sx={{ marginLeft: "auto"}}
                >
                    <ToggleButton value="ES">ES</ToggleButton>
                    <ToggleButton value="EN">EN</ToggleButton>
                </ToggleButtonGroup>   
            </Toolbar>
        </AppBar>
        <Typography variant='h2' gutterBottom align='center'>
            ¡Bienvenido a tu IntelligentBot!
        </Typography>
        <Container align='center'>
        <QuestionAnswerIcon sx={{ fontSize: 350}}></QuestionAnswerIcon>
        </Container>
        <Typography variant='h6' gutterBottom align='center'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Typography>
        <Container align='center'>
        <Button variant='contained' color='primary' onClick={event => window.location.href='/login'}>
            LogIn
        </Button>
        <Button variant='contained' color='primary' sx={{ marginLeft: 4}} onClick={event => window.location.href='/signup'}>
            SignUp
        </Button>
        </Container>
    </Box>
  );
}
export default Landing;