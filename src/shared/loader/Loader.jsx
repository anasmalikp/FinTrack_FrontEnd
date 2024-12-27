import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';

const Loader = () => {
  return (
    <div style={{position:'relative', width:'100%', height:'100%', display:'flex', justifyContent:'center', alignItems:'center'}}>
    <CircularProgress color="secondary" />
    </div>
  )
}

export default Loader