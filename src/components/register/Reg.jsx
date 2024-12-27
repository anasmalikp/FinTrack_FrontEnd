import React, { useContext, useState } from 'react'
import TextField from '@mui/material/TextField';
import './Reg.css';
import Button from '@mui/material/Button';
import { FinTrackContext } from '../../../Context';
import { Register } from '../../services/UserServices';
import { useNavigate } from 'react-router-dom';
import Loader from '../../shared/loader/Loader';

const Reg = () => {
    const {setIsLog} = useContext(FinTrackContext)
    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(false);
    const [pass,setPass]= useState("")
    const handleReg = async(e)=>{
      e.preventDefault();
      setIsLoading(true);
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
            Tell us<br />Who you are!
          </h1>
        </div>
        <form onSubmit={handleReg} className='reg_form'>
        <TextField className='inputfld' required onChange={e=> setUser({...user,username:e.target.value})} id="outlined-basic" label="Username" variant="standard" />
        <TextField className='inputfld' required onChange={e=> setUser({...user,email:e.target.value})} id="outlined-basic" label="E-Mail" variant="standard" />
        <TextField className='inputfld' required type='password' onChange={e=> setUser({...user,password:e.target.value})} id="outlined-basic" label="Password" variant="standard" />
        <TextField className='inputfld' required type='password' onChange={e=> setPass(e.target.value)} id="outlined-basic" label="Confirm Password" variant="standard" />
        <button type='submit' className='btnreg'>Register</button>
        <p onClick={()=>setIsLog(true)}>Already have an account? Click here</p>
        </form>
    </div>
    </>
  )
}

export default Reg