import React from 'react'
import ReactPlayer from 'react-player'

function Video() {
  return (
    <div className='w-full  flex flex-row justify-center items-center mt-10  lg:h-[750px]'>

        <ReactPlayer url='https://www.youtube.com/watch?v=-ywgBdViA9k' controls="true" 
           />
    </div>
  )
}

export default Video