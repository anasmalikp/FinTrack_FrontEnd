import { Route, Routes, useNavigate } from 'react-router-dom'
import './App.css'
import NavBar from './shared/navbar/NavBar'
import Registration from './pages/registration/Registration'
import { useState } from 'react'
import { FinTrackContext } from '../Context'
import AddAccount from './components/homepage/AddAccount'
import Wallet from './components/homepage/Wallet'
import History from './components/homepage/History'
import Cookies from 'js-cookie';  
import ProtectedRoutes from './utilis/ProtectedRoutes'

function App() {

  const [isLog, setIsLog] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const navigate = useNavigate();


  return (
    <>
    <FinTrackContext.Provider value={{isLog, setIsLog, isLoggedIn, setIsLoggedIn}}>
    {isLoggedIn && Cookies.get('token') ? <NavBar /> : null}
      <Routes>
      <Route path='/'>
        <Route index element={<Registration />} />
        <Route element={<ProtectedRoutes />}>
        <Route path='/home/add_trans' element={<AddAccount />} />
        <Route path='/home/wallet' element={<Wallet />} />
        <Route path='/home/history' element={<History />} />
        </Route>
      </Route>
    </Routes>
    
      
      </FinTrackContext.Provider>
    </>
  )
}

export default App
