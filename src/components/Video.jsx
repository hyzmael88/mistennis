import React from 'react'
import ReactPlayer from 'react-player'

function Video() {
  return (
    <div className='w-full h-full flex flex-row justify-center items-center mt-10'>

        <ReactPlayer url='https://www.youtube.com/watch?v=-ywgBdViA9k' controls="true" width='100%'
          height='750px' />
    </div>
  )
}

export default Video