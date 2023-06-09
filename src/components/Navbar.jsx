import * as React from 'react';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import {Grid, Box, AppBar, Toolbar, Typography} from '@mui/material';
import { useTranslation } from "react-i18next";
import LanguageSelect from "./LanguageSelect";
import LogOutButton from "./LogOut";


const Navbar = () => {
  const { t } = useTranslation();
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

          <LogOutButton/>

          <div className="flex flex-fixed">
            <div className="ml1 pointer black">
              {t('select_language')}
            </div>
            <div className="ml1 pointer black"> : </div>
            <div>     
              <LanguageSelect className="ml1 pointer black"/>
            </div>
          </div>
        </Grid>
      </AppBar>
    </Box>
  );
};

export default Navbar;