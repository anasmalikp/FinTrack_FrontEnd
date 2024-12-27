import React from 'react'
import './NavBar.css'
import { useNavigate } from 'react-router-dom'
import { MdOutlineLogin } from "react-icons/md";
import Cookies from 'js-cookie';

const NavBar = () => {
    const navigate = useNavigate()
    const logout = ()=> {
        Cookies.remove('token')
        Cookies.remove('username')
        navigate('/')
    }
    return (
        <>
            <div className='navbar_cont'>
                <div className='title_cont'>
                    <h2 className='nav_title'>FinTrack</h2>
                    <button onClick={()=> logout()} className='logoutBtn'><MdOutlineLogin /></button>
                </div>
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