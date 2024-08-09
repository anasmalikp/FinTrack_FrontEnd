import React, { useEffect, useState } from 'react'
import { GetWallet } from '../../services/WalletServices'

const Wallet = () => {
  const [bal, setBal] = useState()

  const GetBalance = async()=>{
    const response = await GetWallet()
    if(response!=null){
      setBal(response)
    }
  }

  useEffect(()=>{
    GetBalance()
  },[])

  return (
    <div className='wallet_cont'>
        <section className='bal'>
        <p><u>Available Balance</u></p>
        <p className='amt'>
        ₹ {bal}
        </p>
        </section>
    </div>
  )
}

export default Wallet