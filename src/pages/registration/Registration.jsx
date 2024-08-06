import React, { useContext } from 'react'
import Reg from '../../components/register/Reg'
import './Regitration.css'
import Log from '../../components/register/Log'
import { FinTrackContext } from '../../../Context'

const Registration = () => {
    const {isLog} = useContext(FinTrackContext)
    return (
        <>
            <div className='registration_home'>
                <div>
                    {isLog ? <Log /> : <Reg />}
                </div>
            </div>
        </>
    )
}

export default Registration