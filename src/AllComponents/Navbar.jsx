import React from 'react'
import {Link  } from "react-router-dom";
const Navbar = () => {
  return (
    <div >
      <div className='bg-[#60435F] p-6 flex justify-between'>
        <p className='text-2xl'>Search your Media</p>
        <Link to="/collection" className='text-2xl font-light cursor-pointer'>Collection</Link>
      </div>
    </div>
  )
}

export default Navbar