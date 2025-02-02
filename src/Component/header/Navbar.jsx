import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import Button from '../button/Button'
const Navbar = () => {
  return (
    // HEADER
    <header className='flex justify-between items-center bg-transparent relative z-50 top-10 px-20'>
        {/* Logo */}
        <img src="../Img/Logo/logo.svg" alt="lOGO"  className='w-[213px] h-[57px]'/>

        {/*NavBar  */}
        <nav className='flex '>
            <ul className='flex justify-center items-center text-18 gap-5 text-white'>
                <li className='cursor-pointer'> About Us</li>
                <li className='cursor-pointer'> Services</li>
                <li className='cursor-pointer'> Portfolio</li>
                <Button style={'bg-[#FFFFFF4D] w-[165px] h-[57px] rounded-full'}>Contact Us</Button>
            </ul>    
        </nav>
    </header>
  )
}

export default Navbar