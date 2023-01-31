import React from 'react'
import About from '../components/Home/About'
import Blog from '../components/Home/Blog'
import Her from '../components/Home/Her'
import Hero from '../components/Home/Hero'
import Him from '../components/Home/Him'
import New from '../components/Home/New'
import Newseason from '../components/Home/Newseason'
import Popular from '../components/Home/Popular'
import Video from '../components/Home/Video'

function Home() {
  return (
    <div>
        <Hero/>
        <About/>
        <New/>
        <Popular/>
        <Him/>
        <Her/>
        <Video/>
        <Newseason/>
        <Blog/>
    </div>
  )
}

export default Home