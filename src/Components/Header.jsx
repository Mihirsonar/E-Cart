import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    
  return (
    <div className='flex bg-emerald-600 text-white p-8 justify-between'>
            <h2 className='text-2xl font-bold'>Welcome</h2>

        <div className='flex text-xl gap-5 font-extrabold  '>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/product">Product</Link>
        </div>
    </div>
  )
}

export default Header