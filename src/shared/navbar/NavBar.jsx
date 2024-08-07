import React from 'react'
import './NavBar.css'
import { useNavigate } from 'react-router-dom'

const NavBar = () => {
    const navigate = useNavigate()
    return (
        <>
            <div className='navbar_cont'>
            <h2 className='nav_title'>FinTrack</h2>
                <div className='navbar_opt_cont'>
                    <div onClick={()=> navigate('/home/add_trans')} className="navbar_opt">Add Transaction</div>
                    <div onClick={()=> navigate('/home/wallet')} className="navbar_opt">Wallet</div>
                    <div onClick={()=> navigate('/home/history')} className="navbar_opt">History</div>
                </div>
                
            </div>
        </>
    )
}

export default NavBar