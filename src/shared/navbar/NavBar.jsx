import React from 'react'
import './NavBar.css'

const NavBar = () => {
    return (
        <>
            <div className='navbar_cont'>
            <h2 className='nav_title'>FinTrack</h2>
                <div className='navbar_opt_cont'>
                    <div className="navbar_opt">Add Transaction</div>
                    <div className="navbar_opt">Wallet</div>
                    <div className="navbar_opt">History</div>
                </div>
                
            </div>
        </>
    )
}

export default NavBar