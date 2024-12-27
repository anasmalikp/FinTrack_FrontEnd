import React, { useContext, useEffect, useState } from 'react'
import { GetWallet } from '../../services/WalletServices'
import Cookies from 'js-cookie'
import Loader from '../../shared/loader/Loader'

const Wallet = () => {
  const [bal, setBal] = useState()

  const GetBalance = async()=>{
    const response = await GetWallet()
    if(response!=null){
      setBal(response)
      console.log(response);
      
    }
  }

  useEffect(()=>{
    GetBalance()
  },[])

  return (

    <div className="wallet_cont">
      <div className='bal'>
        <h3>{Cookies.get('username') ?? "User"}</h3>
        {bal== null ? <Loader /> : (
          <section className='wallet_bals_cont'>
            <section className='wallet_bals'>
              <p>Cash Balance:</p>
              <p className='amt'>₹ {bal.cashBalance}</p>
            </section>
            <section className='wallet_bals'>
              <p>Bank Balance:</p>
              <p className='amt'>₹ {bal.bankBalance}</p>
            </section>
          </section>
        )}
      </div>
    </div>
    // <div className='wallet_cont'>
    //     <section className='bal'>
    //     <p><u>Available Cash Balance</u></p>
    //     <p className='amt'>
    //     ₹ {bal?.cashBalance}
    //     </p>
    //     </section>
    //     <section className='bal' style={{marginTop:'10px'}}>
    //     <p><u>Available Bank Balance</u></p>
    //     <p className='amt'>
    //     ₹ {bal?.bankBalance}
    //     </p>
    //     </section>
    // </div>
  )
}

export default Wallet