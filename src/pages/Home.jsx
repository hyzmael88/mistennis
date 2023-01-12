import React from 'react'
import About from '../components/About'
import Blog from '../components/Blog'
import Her from '../components/Her'
import Hero from '../components/Hero'
import Him from '../components/Him'
import New from '../components/New'
import Newseason from '../components/Newseason'
import Popular from '../components/Popular'
import Video from '../components/Video'

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