import React, { useEffect, useState } from 'react'
import './AddAccount.css';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { GetExp, GetIncs } from '../../services/AccountServices';
import { AddTransaction } from '../../services/TransactionServices';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  width:200,
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const AddAccount = () => {
    const [buttonval, setButtonval] = useState("")
    const [open, setOpen] = useState(false)
    const [value, setValue] = useState({})
    const [exps, setExps] = useState([])
    const [incs, setIncs]= useState([])

    const GetExpenses = async()=>{
      const response = await GetExp()
      if(response!=null){
        setExps(response)
        console.log(response)
      }
    }

    const GetIncomes = async()=>{
      const response = await GetIncs()
      if(response!= null){
        setIncs(response)
      }
    }

    useEffect(()=>{
      GetExpenses()
      GetIncomes()
    },[])
    
    const handleClose = ()=> {
      setOpen(false)
      setButtonval("")
      setValue({})
    }

    const handleOpen = (val)=>{
      setButtonval(val)
      setOpen(true)
    }

    const handleTransaction = async()=>{
      if(value=={}){
        alert("please fill necessary fields")
      }else{
        const response = await AddTransaction(value)
        if(response!=200){
          alert("something went wrong")
        }
      }
    }

  return (
    <div className='main_trans'>
        <div className='trans_cont'>
            <div className='add_exp_inc' onClick={()=> handleOpen("exp")}>Add an Expence</div>
            <div className='add_exp_inc' onClick={()=> handleOpen("inc")}>Add an Income</div>
        </div>
        <div style={{color:'white', marginTop:'50px'}} className='add_exp_inc' onClick={()=> handleOpen("add")}>Add new Account</div>
        <Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  {buttonval == "exp" ? (
    <Box sx={style}>
    <Typography className='modal_contents' id="modal-modal-title" variant="h6" component="h2">
      Add an expense
    </Typography>
    
    <TextField onChange={e=>setValue({...value, amt:e.target.value})} className='modal_contents' id="outlined-basic" label="Amount" variant="outlined" />
    <select defaultValue='1' onChange={e=> setValue({...value, acid:e.target.value})} className='modal_contents' >
      <option disabled value='1' >Choose an account</option>
      {exps?.map(val=>(
        <option value={val.id}>{val.transactionName}</option>
      ))}
    </select>
    <Button onClick={handleTransaction} className='modal_contents' variant='contained'>Save Transaction</Button>
    
  </Box>
  ) : buttonval == "inc" ? (
    <Box sx={style}>
    <Typography className='modal_contents' id="modal-modal-title" variant="h6" component="h2">
      Add an income
    </Typography>
    
    <TextField onChange={e=>setValue({...value, amt:e.target.value})} className='modal_contents' id="outlined-basic" label="Amount" variant="outlined" />
    <select defaultValue='1'  onChange={e=> setValue({...value, acid:e.target.value})} className='modal_contents' >
      <option disabled value='1' >Choose an account</option>
      {incs?.map(val=>(
        <option value={val.id}>{val.transactionName}</option>
      ))}
    </select>
    <Button onClick={handleTransaction} className='modal_contents' variant='contained'>Save Transaction</Button>
    
  </Box>
  ) : (
    <Box sx={style}>
    <Typography className='modal_contents' id="modal-modal-title" variant="h6" component="h2">
      Add an Account
    </Typography>
    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
    <TextField className='modal_contents' id="outlined-basic" label="Account Name" variant="outlined" />
    <select className='modal_contents' >
      <option selected disabled >Choose an type</option>
      <option>Expense</option>
      <option>Income</option>
    </select>
    <Button className='modal_contents' variant='contained'>Save Account</Button>
    </Typography>
  </Box>
  )}
</Modal>
    </div>
  )
}

export default AddAccount