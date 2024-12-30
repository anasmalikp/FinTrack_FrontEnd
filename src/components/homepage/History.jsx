import React, { useContext, useEffect, useState } from 'react'
import { GetHistory } from '../../services/HistoryServices'
import { FinTrackContext } from '../../../Context'
import Loader from '../../shared/loader/Loader'

const History = () => {
  const [history, setHistory] = useState([])

  const GetTransHistory = async () => {
    const response = await GetHistory()
    if (response.data.statusCode == 200) {
      setHistory(response.data.data?.sort((a,b)=> new Date(a.transactionTime) - new Date(b.transactionTime)))      
    } else {
      alert(response.message)
    }
    console.log(response.data.data);
    
  }

  const FormatDate = (datetime) => {
    const date = datetime.split('T')[0];
    return date;
  }

  const FormatTime = (datetime) => {
    const fulltime = datetime.split('T')[1];
    const hour = fulltime.split(':')[0];
    const minute = fulltime.split(':')[1];
    return hour + ":" + minute;
  }

  useEffect(() => {
    GetTransHistory()
  }, [])
  
  return (
    <>
      <div className='his_cont'>
        <p className='his_head'>
          <b>Transaction History</b>
        </p>
        {history.length == 0 ? <Loader /> :
        history?.map(val => (
          <div key={val.id} className='his_trans'>
            <p style={{fontSize:'small'}}>{val.isBank ? "Bank" : "Cash"}</p>
            <p>{val.transactionName}</p>
            {val.transactionType == 1 ? (
              <p><b>- {val.amount}</b></p>
            ) : (
              <p><b>+ {val.amount}</b></p>
            )}
            <div className='his_date'>
              <p>
                {FormatDate(val.transactionTime)}
              </p>
              <p>
                {FormatTime(val.transactionTime)}
              </p>
            </div>
          </div>
        ))}

      </div>
    </>
  )
}

export default History