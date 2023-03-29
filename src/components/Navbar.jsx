import * as React from 'react';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import {Grid, Box, AppBar, Toolbar, Typography} from '@mui/material';
import ToggleButton from './ToggleButton';

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="static" sx={{backgroundColor: 'black'}}>
        <Grid container>
          <Grid item xs={10}>
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
                INTELLIGENT-BOT
              </Typography>
            </Toolbar>
          </Grid>
          <Grid sx={{ marginTop: 1, marginLeft: 12}}>
            <ToggleButton />
          </Grid>
        </Grid>
      </AppBar>
    </Box>
  );
};

export default Navbar;