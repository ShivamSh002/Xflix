import React from 'react'
import "./Login.css"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const Login = () => {
    const nav= useNavigate()
  return (
    <div className='loginWrapper'>
        <div className='login'><div >
         <h1> Login</h1>
        </div>
        <div>
      <p>      Usernmae:</p>
        <Box
        component="form"
        sx={{'& > :not(style)': { m: 1, width: '25ch' },}}
        noValidate
        autoComplete="off"
        >
      <TextField id="outlined-basic" label="Username" variant="outlined" />
      
    </Box>
        </div>
        <div>
            <p>Password:</p>
        <Box
        component="form"
        sx={{'& > :not(style)': { m: 1, width: '25ch' },}}
        noValidate
        autoComplete="off"
        >
      <TextField id="outlined-basic" label="Password" type="password" variant="outlined" />
      
    </Box>
        </div>
        <Stack spacing={2} direction="row" paddingLeft={9.3} >
      <Button variant="contained" >Login</Button>
    </Stack>
        <div><p>Dont have a Accoount ? <span className='text' onClick={()=>nav("/register")} > Register</span></p></div>
        </div>
        </div>
  )
}

export default Login