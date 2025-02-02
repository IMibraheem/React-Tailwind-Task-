import React from 'react'

const Footer = () => {
  return (
    <section className='bg-[#212529] h-[45vh]  p-20 flex flex-col gap-20'>
        {/* Row 1 */}
        <div className='flex '>
            {/* Row1 Colo1 */}
            <div className='flex justify-between  w-[60%]'>
            {/* Colo1 */}
            <nav>
                <ul className='text-18 font-400 text-white flex flex-col gap-4'>
                    <li className='text-[21px]'>Pages</li>
                    <li>Services</li>
                    <li>About us</li>
                    <li>Portfolio</li>
                    <li>Contact us</li>
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
                    <li>Privacy and Cookies Policy</li>
                    <li>Termos e Condições</li>
                </ul>
            </div>
            </div>
            {/* Row1 Col2 */}
            <div className='flex justify-end items-start w-[40%]'>
                <img src="../Img/Footer/footerimg1.svg" alt="Footer image" />
            </div>

        </div >
        {/* Row 2 */}
        <div className='flex justify-between items-center text-white'>
        <p>Oakland -Energy Consulting ©</p>
        <p className='text-[#646669]'>Design by Ferréh</p>
        </div>
    </section>
  )
}

export default Footer