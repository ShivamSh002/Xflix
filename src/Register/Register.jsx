import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import './Register.css';

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [cmfPassword, setCmfPassword] = useState('');
    const navigate = useNavigate();
  
   console.log(cmfPassword)

    return (
        <div className="loginWrapper">
            <div className="register">
                <div>
                    <h1>Register</h1>
                </div>
                <div>
                    <p>Username:</p>
                    <Box
                        component="form"
                        sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField 
                            id="outlined-basic" 
                            label="Username" 
                            variant="outlined" 
                            onChange={(e) => setUsername(e.target.value)} 
                        />
                    </Box>
                </div>
                <div>
                    <p>Password:</p>
                    <Box
                        component="form"
                        sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField 
                            id="outlined-basic" 
                            label="Password" 
                            type="password" 
                            variant="outlined" 
                            onChange={(e) => setPassword(e.target.value)} 
                        />
                    </Box>
                </div>
                <div>
                    <p>Confirm Password:</p>
                    <Box
                        component="form"
                        sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField 
                            id="outlined-basic" 
                            label="Confirm Password" 
                            type="password" 
                            variant="outlined" 
                            onChange={(e) => setCmfPassword(e.target.value)} 
                        />
                    </Box>
                </div>
                <Stack spacing={2} direction="row" paddingLeft={7.5}>
                    <Button variant="contained">Register</Button>
                </Stack>
                <div>
                    <p>Already have an Account? <span className="text" onClick={() => navigate('/login')}>Login</span></p>
                </div>
            </div>
        </div>
    );
}

export default Register;
