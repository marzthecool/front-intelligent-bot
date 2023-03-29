import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

export default function ToggleButtons() {
  const [alignment, setAlignment] = React.useState('esp');

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <ButtonGroup
      value={alignment}
      exclusive
      onChange={handleAlignment}
      aria-label="select language"
      sx={{backgroundColor: 'black', marginTop: 0.5}}
      variant="text"
    >
      <Button value="esp" aria-label="esp" sx={{color: 'white'}}>
        Esp
      </Button>
      <Button value="eng" aria-label="eng" sx={{color: 'white'}}>
        Eng
      </Button>
    </ButtonGroup>
  );
}