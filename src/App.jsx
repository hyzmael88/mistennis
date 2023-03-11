import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import {StateContextProvider} from './context/StateContext'
import { Routes, Route } from 'react-router-dom'
import Products from './pages/Store'
import Product from './pages/Product'
import Auth from './pages/Auth/Auth'
import Shopping from './pages/Shopping'
import Magazine from './pages/Magazine'

function App() {
  const [count, setCount] = useState(0)

  return (
    <StateContextProvider>

    <div className='2xl:max-w-[1280px] w-full h-full mx-auto overflow-hidden'>
      <Navbar/>
      <Routes>
      <Route path='/'  element={<Home/>}/> 
      <Route path='/auth'  element={<Auth/>}/> 
      <Route path='/shopping'  element={<Shopping/>}/> 
      <Route path='/magazine'  element={<Magazine/>}/> 
      <Route path='/products'  element={<Products/>}/>
      <Route path='/products/:productSlug'  element={<Product/>}/>
      </Routes>
     <Footer/>

    </div>
    </StateContextProvider>
  )
}

export default App
