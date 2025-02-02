import React from 'react'
import Button from '../Component/button/Button'

import SectionBtn from '../Component/SectionBtn/SectionBtn'

const Home = () => {
  return (
    <>
    {/* // Hero Section */}
    <section className='w-full h-[982px]  flex -mt-16 z-10 '>
      {/* Col1  */}
      <div className=' flex flex-col w-[50%] gap-10 h-full   justify-end items-start bg-[#212529] px-20 pb-12'>
        <h1 className='w-[292px] h-[154px] text-[64px]    text-white font-400 '>Redefining
        Energy</h1>
        <p className='w-[535px] text-white pt-10 text-18 font-400'>
        As market leaders for 20 years, we are experts in energy efficiency, providing tailored, concrete solutions to meet your needs.
        </p>
        <Button style={'bg-white text-[#212529] w-[217px] h-[57px] rounded-full text-18 font-400'}>View our Portfolio</Button>
      </div>


      {/* Col2 */}
      <div  className='w-[50%] h-full bg-black'>
        <img src="../Img/Home/heroSec.png" alt="HeroSec Image"  className='w-[50vw] h-full '/>
      </div>

    </section>

    {/* // Section 1 */}

    <section className=' flex flex-col w-full h-auto gap-10 px-20 pt-36 z-10  text-black '>
      <div className='flex flex-col gap-10'>
      <h2 className='text-heading40 font-400 text-HeadingClr'>Areas of Expertise</h2>
      <p className='w-[757px] text-18 font-400 text-ParaClr'>Whether for small or large-scale projects, we are committed to delivering cutting-edge results, contributing to a more sustainable and innovative energy future.</p>
    
    <div className='flex justify-between items-center gap-5'>
    <div className=' flex-1 '>
    <img src="../Img/Home/Sec1-Img1.png" alt="Image"  className=' w-full'/>
    </div>
    
    <div className=' flex-1'>
    <img src="../Img/Home/Sec1-img2.png" alt="Image"  className=' w-full'/>
    </div>
    
    <div className=' flex-1'>
    <img src="../Img/Home/Sec1-img3.png" alt="Image"  className=' w-full'/>
    </div>
    
    <div className=' flex-1'>
    <img src="../Img/Home/Sec1-img4.png" alt="Image"  className=' w-full'/>
    </div>

    </div>
    </div>
    {/* Paragraph Under Images iN sECTION 1 */}
      <div className=' h-[40%] flex justify-end py-32'>
      <p className='w-[789px] text-ParaClr font-400 text-18'>Leading the market for two decades, we have been experts in energy efficiency. With an unwavering commitment to innovation, we offer tailored solutions for projects of all sizes. From LED lighting to photovoltaic energy and electric mobility, our dedicated team works tirelessly to deliver cutting-edge results. We are committed to shaping a more sustainable and efficient energy future.</p>  
      </div>
    </section>
    

    {/* Section 2 */}
    <section className='flex justify-between items-center bg-[#F4F4F4]  px-20 mt-20'>

      {/* Col1 Sec2 Image */}
      <div className='w-[30%] relative -top-20'>
        <img src="../Img/Home/Sec2/Sec2-img.png" alt="Sec2 - Image" className=' '/>
      </div>

      {/* Col2 Sec2 Text  */}
      <div className='flex flex-col gap-10 font-400 w-[60%]'>
        <h2 className='text-heading40 text-HeadingClr'>Deep knowledge in the field</h2>
        <p className='text-ParaClr text-18 w-[787px]'>Our extensive experience and deep expertise in the energy sector have positioned us as leaders in the industry. With two decades of market leadership, we have honed our knowledge in energy efficiency, LED lighting, photovoltaic energy, and electric mobility to a level that sets us apart. Our team's profound understanding of these domains enables us to provide innovative, tailored solutions that not only meet but exceed the expectations of our clients.</p>
     <SectionBtn>Learn more</SectionBtn>
      </div>

    </section>
    
    {/* Section 3 */}
    <section className='flex flex-col gap-10 px-20 py-20 font-400'>
    <h2 className='text-HeadingClr text-heading40 '>Get in touch with us</h2>
    <p className='text-ParaClr text-18 w-[787px]'>If you're ready to explore how our expertise in energy efficiency, LED lighting, photovoltaic energy, and electric mobility can benefit your projects, don't hesitate to reach out. We're here to listen, collaborate, and provide you with tailored solutions that align with your specific needs and goals.</p>
    <SectionBtn>Contact us</SectionBtn>
    </section>
    </>
    
  )
}

export default Home