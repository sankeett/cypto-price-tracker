import React from 'react'
import Navbar from './components/Navbar/Navbar'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import Coin from './pages/coin/Coin'
import Footer from './components/Footer/Footer'
import CoinContextProvider from './context/CoinContext'

const App = () => {
  console.log("app rendered");
  return (
    <CoinContextProvider>
      <div className='app'>
      <Navbar/>

      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/coin/:coinId' element={<Coin/>}></Route>
      </Routes>

      <Footer/>
      
    </div>
    </CoinContextProvider>
    
  )
}

export default App
