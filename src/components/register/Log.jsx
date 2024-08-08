import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { Login } from '../../services/UserServices';
import Cookies from 'js-cookie';

const Log = () => {
    const [user, setUser] = useState({
        id: 0,
        username: "",
        email: "",
        password: "",
        walletBalance: 0
    })
    const navigate = useNavigate()
    const handleLogin = async (e) => {
        e.preventDefault()
        const response = await Login(user)
        if (response!=null) {
            Cookies.set('token',response)
            navigate('/home/add_trans')
        } else {
            alert("Login Failed")
        }
    }
    return (
        <>
            <form onSubmit={handleLogin} style={{ height: '30vh' }} className='reg_form'>
                <TextField required onChange={e => setUser({ ...user, email: e.target.value })} id="outlined-basic" label="E-Mail" variant="outlined" />
                <TextField required onChange={e => setUser({ ...user, password: e.target.value })} id="outlined-basic" label="Password" variant="outlined" />
                <Button variant="contained" type='submit'>Log In</Button>
            </form>
        </>
    )
}

export default Log