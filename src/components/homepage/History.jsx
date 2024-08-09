import React, { useEffect, useState } from 'react'
import { GetHistory } from '../../services/HistoryServices'

const History = () => {
  const [history, setHistory] = useState([])

  const GetTransHistory = async () => {
    const response = await GetHistory()
    if (response != null) {
      setHistory(response)
    }
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
          History
        </p>
        {history?.map(val => (
          <div key={val.id} className='his_trans'>
            <p>{val.transactionName}</p>
            {val.categoryid == 1 ? (
              <p>- {val.amt}</p>
            ) : (
              <p>+ {val.amt}</p>
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