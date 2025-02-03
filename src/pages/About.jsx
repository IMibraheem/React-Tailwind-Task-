import React from 'react'
import Navbar from '../Component/header/Navbar'
import Footer from '../Component/footer/Footer'

const About = () => {
  return (
    <>
    <Navbar style='text-black' logo='logoblack' btnStyle={'bg-[#212529] w-[165px] h-[57px] text-white rounded-full'}/>
    {/* Hero Sec */}
    <section className='flex flex-col justify-end items-start px-10 md:px-20  bg-[#F4F4F4] h-[640px] w-full -mt-16 pb-16'>
      <h2 className='text-[64px] font-400 text-HeadingClr'>About us</h2>
      <p className='text-18 font-400 text-ParaClr max-w-[535px]'>Learn more about Oakland C.E. and our commitment to excellence, innovation, and sustainability.</p>
    </section>

    {/* Section 1 */}
    <section className=' flex flex-col gap-20 px-10 md:px-20 py-32'>
      <h1 className='text-heading40 text-[#424649] font-400 max-w-[778px] '>Innovation. <br />
      Guiding our journey from the start.</h1>
      {/* Div Inside Section 1 */}
      <div className='flex justify-between ' >
        {/* Col1 */}
        <div className='w-[50%] hidden  md:flex justify-end  items-end  text-[#A6A6AB]'> 
          <p className=' '>Executive Board members <br />
          Oakland. 2023</p>
        </div>
        {/* Col2 */}
        <div className='md:w-[50%]'>
          <img src="../Img/About/Sec1/Sec1-img.svg" alt="Sec1-img" />
        </div>
      </div>

      <div >
        <p className='max-w-[757px] text-ParaClr text-18 font-400'> Innovation has been at the heart of our journey right from the beginning. At Oakland C.E., we believe that staying at the forefront of technology and sustainable practices is essential. We've consistently sought innovative solutions in energy efficiency, LED lighting, photovoltaic energy, and electric mobility to shape a brighter and greener future.

Our commitment to innovation drives us to continually explore new avenues, refine our processes, and deliver pioneering results for our clients. Join us in embracing innovation as we chart a course towards a more sustainable and efficient energy landscape.</p>
      </div>
    </section>

    {/* Section 2 */}
    <section className='px-10 md:px-20 flex flex-col gap-20 pb-40'>
      <img src="../Img/About/Sec2/Sec2-img.svg" alt="Sec2-img" className='w-full' />
<div className='flex justify-end'>
<p className='max-w-[757px] text-ParaClr text-18 font-400'>From our company's inception, innovation has been ingrained in our DNA. It's not just a buzzword; it's the driving force behind everything we do. Our founders were visionaries who understood that to make a real impact in the energy sector, we needed to lead with innovation.

This commitment to cutting-edge solutions has allowed us to consistently push the boundaries of what's possible in energy efficiency, LED lighting, photovoltaic energy, and electric mobility. We've fostered a culture that encourages creativity, embraces change, and thrives on challenges. As we continue to grow, our dedication to innovation remains unwavering, ensuring that we remain a trailblazer in the industry.</p>
</div>
    </section>
    <Footer/>
    </>
  )
}

export default About