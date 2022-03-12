import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from '@mui/material/Box';

import { useState } from "react";

function MyButtonGroup(params) {
  const [count, setCount] = useState(0);
  const [isDisabled, setIsDisabled] = useState(true)

  const switchDisabled =()=>{
    if(isDisabled){
      setIsDisabled(false)
    }else{
      setIsDisabled(true)
    }
  }
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
        <Button  onClick={() => setCount(count + 1)}
          disabled = {isDisabled}
        >Click:{count}</Button>
        <Button  onClick={()=>setCount(0)}>Clear</Button>
        <Button  onClick={switchDisabled}>Disable</Button>
      </ButtonGroup>
    </Box>
  );
}

export default MyButtonGroup;
