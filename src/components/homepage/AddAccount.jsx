import React, { useState } from 'react'
import './AddAccount.css';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

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
    
    const handleClose = ()=> {
      setOpen(false)
      setButtonval("")
    }

    const handleOpen = (val)=>{
      setButtonval(val)
      setOpen(true)
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
    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
    <TextField className='modal_contents' id="outlined-basic" label="Amount" variant="outlined" />
    <select className='modal_contents' >
      <option selected disabled >Choose an account</option>
      <option>Petrol</option>
      <option>Bus Fair</option>
    </select>
    <Button className='modal_contents' variant='contained'>Save Transaction</Button>
    </Typography>
  </Box>
  ) : buttonval == "inc" ? (
    <Box sx={style}>
    <Typography className='modal_contents' id="modal-modal-title" variant="h6" component="h2">
      Add an income
    </Typography>
    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
    <TextField className='modal_contents' id="outlined-basic" label="Amount" variant="outlined" />
    <select className='modal_contents' >
      <option selected disabled >Choose an account</option>
      <option>Salary</option>
      <option>Commission</option>
    </select>
    <Button className='modal_contents' variant='contained'>Save Transaction</Button>
    </Typography>
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