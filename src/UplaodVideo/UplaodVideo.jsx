import React from 'react'
import NavBar from '../Navbar/NavBar'
import "./UplaodVideo.css"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const UplaodVideo = () => {
  return (
    <div><NavBar /><div className='form'><h1>Enter Data</h1>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      
      <TextField id="standard-basic" label="Standard" variant="standard" /><br />
      <TextField id="standard-basic" label="Standard" variant="standard" /><br />

      <TextField id="standard-basic" label="Standard" variant="standard" /><br />

    </Box>
  
    </div></div>
  )
}

export default UplaodVideo