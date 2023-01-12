import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='2xl:max-w-[1280px] w-full h-full mx-auto overflow-hidden'>
      <Navbar/>
      <Home/>
      <Footer/>
    </div>
  )
}

export default App
