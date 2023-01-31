import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import {StateContextProvider} from './context/StateContext'
import { Routes, Route } from 'react-router-dom'
import Products from './pages/Products'

function App() {
  const [count, setCount] = useState(0)

  return (
    <StateContextProvider>

    <div className='2xl:max-w-[1280px] w-full h-full mx-auto overflow-hidden'>
      <Navbar/>
      <Routes>
      <Route path='/'  element={<Home/>}/>
      <Route path='/products'  element={<Products/>}/>
      </Routes>
     <Footer/>

    </div>
    </StateContextProvider>
  )
}

export default App
