import React, { useContext } from 'react'
import TextField from '@mui/material/TextField';
import './Reg.css';
import Button from '@mui/material/Button';
import { FinTrackContext } from '../../../Context';

const Reg = () => {
    const {setIsLog} = useContext(FinTrackContext)
    const handleReg = ()=>{
        setIsLog(true)
    }
  return (
    <>
        <form className='reg_form'>
        <TextField id="outlined-basic" label="Username" variant="outlined" />
        <TextField id="outlined-basic" label="E-Mail" variant="outlined" />
        <TextField id="outlined-basic" label="Password" variant="outlined" />
        <TextField id="outlined-basic" label="Confirm Password" variant="outlined" />
        <Button variant="contained" onClick={handleReg} >Register</Button>
        </form>
    </>
  )
}

export default Reg