import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function ToggleButtons() {
  const [alignment, setAlignment] = React.useState('esp');

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <ToggleButtonGroup
      value={alignment}
      exclusive
      onChange={handleAlignment}
      aria-label="select language"
    >
      <ToggleButton value="esp" aria-label="esp">
        Esp
      </ToggleButton>
      <ToggleButton value="eng" aria-label="eng">
        Eng
      </ToggleButton>
    </ToggleButtonGroup>
  );
}