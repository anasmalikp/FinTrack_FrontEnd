import React, { useContext, useState } from 'react'
import TextField from '@mui/material/TextField';
import './Reg.css';
import Button from '@mui/material/Button';
import { FinTrackContext } from '../../../Context';
import { Register } from '../../services/UserServices';
import { useNavigate } from 'react-router-dom';

const Reg = () => {
    const {setIsLog} = useContext(FinTrackContext)
    const [user, setUser] = useState({})
    const [pass,setPass]= useState("")
    const handleReg = async()=>{
        if(user.password == pass){
          const response = await Register(user)
        if(response==200){
          setIsLog(true)
        }
        else{
          alert("registration failed")
        }
        } else{
          alert("password dont match")
        }
    }
  return (
    <>
        <form onSubmit={handleReg} className='reg_form'>
        <TextField required onChange={e=> setUser({...user,username:e.target.value})} id="outlined-basic" label="Username" variant="outlined" />
        <TextField required onChange={e=> setUser({...user,email:e.target.value})} id="outlined-basic" label="E-Mail" variant="outlined" />
        <TextField required onChange={e=> setUser({...user,password:e.target.value})} id="outlined-basic" label="Password" variant="outlined" />
        <TextField required onChange={e=> setPass(e.target.value)} id="outlined-basic" label="Confirm Password" variant="outlined" />
        <Button variant="contained" type='submit' >Register</Button>
        <p onClick={()=>setIsLog(true)}>Already have an account? Click here</p>
        </form>
    </>
  )
}

export default Reg