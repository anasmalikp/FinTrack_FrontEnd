import React, { useContext, useEffect, useState } from 'react'
import './AddAccount.css';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { AddaAccount, GetExp, GetIncs } from '../../services/AccountServices';
import { AddTransaction } from '../../services/TransactionServices';
import { FinTrackContext } from '../../../Context';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  width: 200,
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  borderRadius:8,
  p: 4,
  height:'30vh',
  display:'flex',
  flexDirection:'column',
  justifyContent:'space-around'
};

const AddAccount = () => {
  const [buttonval, setButtonval] = useState("")
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState({})
  const [exps, setExps] = useState([])
  const [incs, setIncs] = useState([])
  const [isBank, setIsBank] = useState(true)

  const GetExpenses = async () => {
    const response = await GetExp()
    if (response != null) {
      setExps(response)
    }
  }

  const GetIncomes = async () => {
    const response = await GetIncs()
    if (response != null) {
      setIncs(response)
    }
  }

  useEffect(() => {
    GetExpenses()
    GetIncomes()
  }, [])

  const handleClose = () => {
    setOpen(false)
    setButtonval("")
    setValue({})
    setIsBank(true)
  }

  const handleOpen = (val) => {
    setButtonval(val)
    setOpen(true)
  }

  const handleTransaction = async () => {
    if (value == {}) {
      alert("please fill necessary fields")
    } else {
      const response = await AddTransaction(value, isBank)
      if (response != 200) {
        alert("something went wrong")
      }
      handleClose()
    }
  }

  const AddNewAccount = async () => {
    if (value != {}) {
      const response = await AddaAccount(value)
      if (response == 200) {
        alert("Account added successfully")
        setValue({})
        await GetExpenses()
        await GetIncomes()
        handleClose()
      }
    } else {
      alert("please fill necessary fields")
      setValue({})
    }
  }

  return (
    <div className='main_trans'>
      <div className='trans_cont'>
        <div className='add_exp_inc' onClick={() => handleOpen("exp")}>Add an Expence</div>
        <div className='add_exp_inc' onClick={() => handleOpen("inc")}>Add an Income</div>
      </div>
      <div style={{ color: 'white', background:'#503A3A', border:'1px solid white', marginTop: '50px' }} className='add_exp_inc' onClick={() => handleOpen("add")}>Add new Account</div>
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

            <TextField type='number' onChange={e => setValue({ ...value, amount: e.target.value })} className='modal_contents' id="outlined-basic" label="Amount" variant="standard" />
              <select defaultValue='true' onChange={e=> setIsBank(e.target.value)}>
                <option value=''>Choose a Mode</option>
                <option value='false'>Cash</option>
                <option value='true'>Bank</option>
              </select>
            <select defaultValue='1' onChange={e => setValue({ ...value, accountId: e.target.value })} className='modal_contents' >
              <option selected value='1' >Choose an account</option>
              {exps?.map(val => (
                <option key={val.id} value={val.id}>{val.accountName}</option>
              ))}
            </select>
            <button onClick={handleTransaction} className='modal_contents btnreg'>Save Transaction</button>

          </Box>
        ) : buttonval == "inc" ? (
          <Box sx={style}>
            <Typography className='modal_contents' id="modal-modal-title" variant="h6" component="h2">
              Add an income
            </Typography>

            <TextField type='number' onChange={e => setValue({ ...value, amount: e.target.value })} className='modal_contents' id="outlined-basic" label="Amount" variant="standard" />
            <select defaultValue='true' onChange={e=> setIsBank(e.target.value)}>
              <option value='' selected>Choose a Mode</option>
                <option value='false'>Cash</option>
                <option value='true'>Bank</option>
              </select>
            <select onChange={e => setValue({ ...value, accountId: e.target.value })} className='modal_contents' >
              <option selected value='1' >Choose an account</option>
              {incs?.map(val => (
                <option key={val.id} value={val.id}>{val.accountName}</option>
              ))}
            </select>
            <button onClick={handleTransaction} className='modal_contents btnreg'>Save Transaction</button>

          </Box>
        ) : (
          <Box sx={style}>
            <Typography className='modal_contents' id="modal-modal-title" variant="h6" component="h2">
              Add an Account
            </Typography>

            <TextField onChange={e => setValue({ ...value, accountName: e.target.value })} className='modal_contents' id="outlined-basic" label="Account Name" variant="standard" />
            <select onChange={e => setValue({ ...value, transactionType: e.target.value })} defaultValue='1' className='modal_contents' >
              <option value='1' disabled >Choose an type</option>
              <option value={1}>Expense</option>
              <option value={2} >Income</option>
            </select>
            <button onClick={AddNewAccount} className='modal_contents btnreg'>Save Account</button>

          </Box>
        )}
      </Modal>
    </div>
  )
}

export default AddAccount