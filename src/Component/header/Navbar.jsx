import React, { useEffect, useState } from 'react'
import {Link, NavLink} from 'react-router-dom'
import Button from '../button/Button'
const Navbar = ({style ,logo ,btnStyle}) => {
  let [mobileMenuIcon ,setMobileMenuIcon]=useState(true)

  let handleMobileNavIcon=()=>{
    setMobileMenuIcon(!mobileMenuIcon)
  }
  return (
<>
    {/* // HEADER */}
    <section className='absolute w-full z-50 top-10 px-10 lg:px-14 xl:px-20'>

    <header className={`${style} flex justify-between items-center bg-transparent `}>
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
        {
          logo == 'logoblack' ?(
            <>
            <img src="../Img/header/menu.svg" alt="menu"  className={`${mobileMenuIcon ? 'block' : 'hidden'} w-10  lg:hidden`} onClick={handleMobileNavIcon}/>
            <img src="../Img/header/cross.svg" alt="menu" className={`${mobileMenuIcon  ? 'hidden' : 'block'} stroke-white fill-white  w-10 lg:hidden`}  onClick={handleMobileNavIcon}/>
          </>
          ): (
            <>
   <img src="../Img/header/menuwhite.svg" alt="" className={`${mobileMenuIcon? 'block' : 'hidden'} w-10   lg:hidden`}  onClick={handleMobileNavIcon} />
   <img src="../Img/header/crosswhite.svg" alt="" className={`${mobileMenuIcon  ? 'hidden' : 'block'}  w-10  lg:hidden`}  onClick={handleMobileNavIcon} />
            </>
          )
        }
     
     
    </header>

    {/* // Mobile Nav */}
    <nav className={`${style} ${mobileMenuIcon ? 'hidden' :'flex' }  flex-col  lg:hidden  w-[100vw] -ml-10 `}>
            <ul className={` flex flex-col justify-center items-center text-18 gap-5`} >
               <NavLink to={'/about'}> <li className='cursor-pointer '> About Us</li></NavLink>
               <NavLink to={'/services'}> <li className='cursor-pointer'> Services</li></NavLink>
               <NavLink to={'/portfolio'}> <li className='cursor-pointer '> Portfolio</li></NavLink>
                <NavLink to={'/contact'}><Button style={ `${btnStyle}`}>Contact Us</Button></NavLink>
            </ul>    
        </nav>
    </section>
    </>
  )
}

export default Navbar


