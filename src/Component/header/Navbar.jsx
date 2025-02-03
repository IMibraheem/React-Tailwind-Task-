import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import Button from '../button/Button'
const Navbar = ({style ,logo ,btnStyle}) => {
  return (
    // HEADER
    <header className={`${style} flex justify-between items-center bg-transparent relative w-full z-50 top-10 px-10 lg:px-14 xl:px-20`}>
    {/* Logo */}
        <NavLink to={'/'}><img src={`../Img/Logo/${logo}.svg`} alt="lOGO"  className='w-[213px] h-[57px]'/></NavLink>

        {/*NavBar  */}
        <nav className=' hidden lg:flex'>
            <ul className={` flex justify-center items-center text-18 gap-5`} >
               <NavLink to={'/about'}> <li className='cursor-pointer '> About Us</li></NavLink>
               <NavLink to={'/services'}> <li className='cursor-pointer'> Services</li></NavLink>
               <NavLink to={'/portfolio'}> <li className='cursor-pointer'> Portfolio</li></NavLink>
                <NavLink to={'/contact'}><Button style={ `${btnStyle}`}>Contact Us</Button></NavLink>
            </ul>    
        </nav>
    </header>
  )
}

export default Navbar