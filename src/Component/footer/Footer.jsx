import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <section className='bg-[#212529] min-h-[35vh] px-10 md:px-20 pt-20 pb-10 flex flex-col gap-20'>
        {/* Row 1 */}
        <div className='flex flex-col md:flex-row gap-20 md:gap-0'>
            {/* Row1 Colo1 */}
            <div className='flex  flex-col md:flex-row  gap-10  justify-between  md:w-[60%]'>
            {/* Colo1 */}
            <nav>
                <ul className='text-18 font-400 text-white flex flex-col gap-4'>
                    <li className='text-[21px]'>Pages</li>
                    <NavLink to={'/services'}> <li>Services</li></NavLink>
                    <NavLink to={'/about'}> <li>About us</li></NavLink>
                    <NavLink to={'/portfolio'}> <li>Portfolio</li></NavLink>
                    <NavLink to={'/contact'}> <li>Contact us</li></NavLink>
                </ul>
            </nav>
            
            {/* Colo2 */}
            <div>
                <ul className='text-18 font-400 text-white  flex flex-col gap-4'>
                    <li className='text-[21px]'>Social Media</li>
                    <li>Facebook</li>
                    <li>LinkedIn</li>
                </ul>
            </div>
            {/* Colo3 */}
            <div>
                <ul className='text-18 font-400 text-white  flex flex-col gap-4'>
                    <li className='text-[21px]'>Legal</li>
                   <NavLink to={'/privacy'}> <li>Privacy and Cookies Policy</li></NavLink>
                    <li>Termos e Condições</li>
                </ul>
            </div>
            </div>
            {/* Row1 Col2 */}
            <div className='flex justify-center  md:justify-end items-start md:w-[40%]'>
                <img src="../Img/Footer/footerimg1.svg" alt="Footer image" />
            </div>

        </div >
        {/* Row 2 */}
        <div className='flex flex-col md:flex-row justify-between items-center text-white'>
        <p>Oakland -Energy Consulting ©</p>
        <p className='text-[#646669]'>Design by Ferréh</p>
        </div>
    </section>
  )
}

export default Footer