import React from 'react'
import { HiArrowUpRight } from 'react-icons/hi2'

function Button() {
  return (
    <div className="px-8 py-11 mt-12 rounded-full bg-red-900 flex flex-col justify-center items-center cursor-pointer">
            <span className="text-xs text-white">SHOW AND BUY</span>
            <HiArrowUpRight className="text-white mt-4 text-3xl"/>
        </div>
  )
}

export default Button