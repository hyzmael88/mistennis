import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { AppContext } from "../context/StateContext";
import { client, urlFor } from "../lib/client";



function Post() {
    const { postSlug } = useParams();
    const { getPost, post } = AppContext();
    console.log(postSlug)
    useEffect(() => {
      getPost(postSlug)
    }, [])
    console.log(post[0])
  return (
    <div className='flex flex-col items-center  w-full h-full '>
        <div className='text-center mt-8'>
            <h2 className='font-bold text-4xl'>{post[0]?.title}</h2>
        </div>
        <div className='w-full '>
        <img
        src={urlFor(post[0]?.mainImage.asset._ref)}
        className={`w-full h-[500px] object-contain mt-8`}
        onMouseOver={()=> setFondo(true)}
      />
        </div>
        <div className='w-full h-full  mt-4 px-20'>
            <p className='text-2xl text-justify'>{post[0]?.body}</p>
        </div>
    </div>
  )
}

export default Post