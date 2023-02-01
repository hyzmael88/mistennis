import React from 'react'
import { HiArrowUpRight } from 'react-icons/hi2'
import { Link } from 'react-router-dom'

function Button() {
  return (
    <Link to="/products">
    <div className="px-8 py-11 mt-12 rounded-full bg-red-900 flex flex-col justify-center items-center cursor-pointer">
            <span className="text-xs text-white">SHOW AND BUY</span>
            <HiArrowUpRight className="text-white mt-4 text-3xl"/>
        </div>
        </Link>
  )
}

export default Button