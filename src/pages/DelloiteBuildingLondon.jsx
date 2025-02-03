import React from 'react'
import Navbar from '../Component/header/Navbar'
import Footer from '../Component/footer/Footer'
import SectionBtn from '../Component/SectionBtn/SectionBtn'

const DelloiteBuildingLondon = () => {
  return (
    <>
    <Navbar style='text-black' logo='logoblack' btnStyle={'bg-[#212529] w-[165px] h-[57px] text-white rounded-full'}/>
    {/* Hero Sec */}
    <section className='flex flex-col justify-end items-start px-10 md:px-20  bg-[#F4F4F4] h-[640px] w-full -mt-16 pb-16 gap-6'>
        <p className='text-18 font-400 text-ParaClr max-w-[535px]'>PORTFOLIO</p>
      <h2 className='text-[64px] font-400 text-HeadingClr'>Delloite Building, London</h2>
    <div className='flex justify-between items-center w-full'>
        <img src="../Img/Portfolio/Portfoliocard/left.svg" alt="left arrow" />
        <img src="../Img/Portfolio/Portfoliocard/right.svg" alt="Right arrow" />
    </div>
    </section>

    {/* Para 2nd Sec */}
    <section className='flex flex-col gap-12 p-20'>
        <div className='flex justify-end'>
            <p className='text-ParaClr text-18 font-400 max-w-[1046px]'>Oakland C.E. has been at the forefront of energy transformation and sustainability for over two decades. Our commitment to innovation and expertise in energy efficiency has allowed us to undertake remarkable projects across the globe. One such endeavor that stands as a testament to our dedication to sustainable energy solutions is the Deloitte Building in the heart of London.

The Deloitte Building, an iconic structure in the bustling financial district of London, sought to reduce its carbon footprint and enhance its operational efficiency. Deloitte, a global leader in professional services, recognized the importance of adopting sustainable practices not only as a corporate responsibility but also as a strategic advantage. Oakland C.E. was entrusted with the mission to revolutionize the building's energy consumption patterns and lighting systems, aligning them with a greener and more sustainable future.

Our team of experts meticulously conducted an energy audit, scrutinizing every aspect of the Deloitte Building's energy consumption. This thorough analysis allowed us to identify areas where energy wastage was occurring and formulate a comprehensive energy efficiency strategy. Our recommendations ranged from optimizing HVAC systems to implementing advanced building management systems that dynamically adjusted lighting, temperature, and power usage based on occupancy and natural lighting conditions.</p>
        </div>
        <div className='pt-14'>
            <img src="../Img/Portfolio/Portfoliocard/portfolioimg1.svg" alt="portfolio Img"  className=''/>
        </div>
        <div className='flex justify-end'>
            <img src="../Img/Portfolio/Portfoliocard/portfolioimg2.svg" alt="portfolio Img"  className=''/>
        </div>
    </section>


     {/* Section 3 */}
     <section className='flex flex-col gap-10 px-10 lg:px-20  py-20 font-400'>
    <h2 className='text-HeadingClr text-heading40 '>Get in touch with us</h2>
    <p className='text-ParaClr text-18 max-w-[787px]'>If you're ready to explore how our expertise in energy efficiency, LED lighting, photovoltaic energy, and electric mobility can benefit your projects, don't hesitate to reach out. We're here to listen, collaborate, and provide you with tailored solutions that align with your specific needs and goals.</p>
    <SectionBtn>Contact us</SectionBtn>
    </section>
<Footer/>
    </>
    

  )
}

export default DelloiteBuildingLondon