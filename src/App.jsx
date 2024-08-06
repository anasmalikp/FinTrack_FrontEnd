import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/home/HomePage'
import NavBar from './shared/navbar/NavBar'
import Registration from './pages/registration/Registration'
import { useState } from 'react'
import { FinTrackContext } from '../Context'
import AddAccount from './components/homepage/AddAccount'

function App() {

  const [isLog, setIsLog] = useState(false)

  return (
    <>
    <FinTrackContext.Provider value={{isLog, setIsLog}}>
      <NavBar />
      <Routes>
        <Route path='/'>
          <Route index element={<Registration />} />
          <Route path='/home/add_trans' element={<AddAccount />} />
        </Route>
      </Routes>
      </FinTrackContext.Provider>
    </>
  )
}

export default App
