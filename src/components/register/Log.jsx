import React, { useContext, useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { Login } from '../../services/UserServices';
import Cookies from 'js-cookie';
import { FinTrackContext } from '../../../Context';
import Loader from '../../shared/loader/Loader';

const Log = () => {
    const [user, setUser] = useState({})
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false);
    const {setIsLoggedIn,setIsLog} = useContext(FinTrackContext)
    const handleLogin = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        console.log(user)
        const response = await Login(user)
        if (response.data.token != null) {
            Cookies.set('token',response.data.token)
            Cookies.set('username', response.data.username)
            setIsLoggedIn(true);
            navigate('/home/add_trans')
        } else {
            alert(response.data.message)
        }
        setIsLoading(false);
    }
    if(isLoading){
        return (
            <Loader />
        )
    }
    return (
        <>
        <div style={{padding:'20px'}}>
            <div className='log_reg_text'>
                <h1>
                    Log in<br />to your Account
                </h1>
            </div>
            <form onSubmit={handleLogin} style={{ height: '30vh' }} className='reg_form'>
                <TextField className='inputfld' name='email' required onChange={e => setUser({ ...user, email: e.target.value })} id="outlined-basic" label="E-Mail" variant="standard" />
                <TextField type='password' name='current-password' autoComplete='current-password' className='inputfld' required onChange={e => setUser({ ...user, password: e.target.value })} id="outlined-basic" label="Password" variant="standard" />
                <button type='submit' className='btnreg'>Log In</button>
                <p onClick={()=> setIsLog(false)}>Click here if you are new here</p>
            </form>
        </div>
        </>
    )
}

export default Log