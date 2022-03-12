import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from '@mui/material/Box';

function MyButtonGroup(params) {
  return (
    <Box
      sx={{
        display: 'flex',
        '& > *': {
          m: 1,
        },
      }}
    >
      <ButtonGroup variant="outlined" aria-label="vertical outlined button group" orientation="vertical">
        <Button>Click:0</Button>
        <Button>Clear</Button>
        <Button>Disable</Button>
      </ButtonGroup>
    </Box>
  );
}

export default MyButtonGroup;
