import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const Log = () => {
    const navigate = useNavigate()
    const handleLogin = () => {
       navigate('/home/add_trans')
    }
    return (
        <>
            <form style={{ height: '30vh' }} className='reg_form'>
                <TextField id="outlined-basic" label="E-Mail" variant="outlined" />
                <TextField id="outlined-basic" label="Password" variant="outlined" />
                <Button variant="contained" onClick={handleLogin}>Log In</Button>
            </form>
        </>
    )
}

export default Log