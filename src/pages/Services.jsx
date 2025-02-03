import React, { useState } from "react";
import Navbar from "../Component/header/Navbar";
import SectionBtn from "../Component/SectionBtn/SectionBtn";
import Footer from "../Component/footer/Footer";

const Services = () => {
  const Faq =[
    {
      'heading' :"Illumination",
      'data' : ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea quod numquam aliquid ullam debitis esse dolorum, quasi distinctio sit, libero velit accusantium dolores nulla quo? Tempora velit repellendus delectus! Assumenda cumque magnam obcaecati reprehenderit, molestiae saepe nisi ab, iure voluptatum harum sapiente. Quos accusamus eum labore excepturi! Officiis, recusandae explicabo.'
    },
    {
      'heading' :"Sustainable Energy",
      'data' : 'Discover our comprehensive range of services tailored to meet your energy efficiency, LED lighting, photovoltaic energy, and much more.'
    },
    {
      'heading' :"Electric Mobility",
      'data' : ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea quod numquam aliquid ullam debitis esse dolorum, quasi distinctio sit, libero velit accusantium dolores nulla quo? Tempora velit repellendus delectus! Assumenda cumque magnam obcaecati reprehenderit, molestiae saepe nisi ab, iure voluptatum harum sapiente. Quos accusamus eum labore excepturi! Officiis, recusandae explicabo.'
    },
    {
      'heading' :"Consulting",
      'data' : 'Discover our comprehensive range of services tailored to meet your energy efficiency, LED lighting, photovoltaic energy, and much more.'
    },
  ]
  const [openIndex, setOpenIndex] = useState(null);

  const handleFaqSec = (index) => {
    // Toggle the FAQ item
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
  <>
   <Navbar style='text-white' logo='logo' btnStyle={'bg-[#FFFFFF4D] w-[165px] h-[57px] text-white rounded-full'}/>
    {/* Hero Sec */}
    <section className='flex flex-col justify-end items-start px-10 md:px-20  bg-[#212529] h-[640px] w-full -mt-16 pb-16'>
      <h2 className='text-[64px] font-400 text-white'>Services</h2>
      <p className='text-18 font-400 text-white max-w-[535px]'>Discover our comprehensive range of services tailored to meet your energy efficiency, LED lighting, photovoltaic energy, and much more.</p>
    </section>
    {/* Section 1 Faq Section */}
    <section className="px-4 md:px-20 pt-32 py-16">
        {/* Main Div of FAQ */}
        <div>
          {/* 1 FAQ Div */}
          {Faq.map((e, i) => (
            <div className="flex flex-col gap-8 p-5 border-t-2 cursor-pointer" onClick={() => handleFaqSec(i)} key={i}>
              <div className="flex justify-between">
                <h3 className="text-[48px] text-HeadingClr font-400">{e.heading}</h3>
                <img src="../Img/Services/arrowDown.svg" alt="" />
              </div>
              
              {/* Show the paragraph only if this FAQ is the one clicked */}
              <p className={`${openIndex === i ? 'flex' : 'hidden'} text-center text-18 font-400 text-ParaClr`}>
                {e.data}
              </p>
             
            </div>
          ))}
        </div>
      </section>

      {/*Sec2  */}
      <section className="flex flex-col gap-20 pb-20 py-10 px-10 md:px-20">        
  <div>
      <div className="flex justify-between ">
        {/* Col1 */}
        <div className="w-[50%] hidden  md:flex justify-end  items-end  text-[#A6A6AB]">
          <p className=" ">
          Sustainable energy consulting <br />
          Portugal. 2023
          </p>
        </div>
        {/* Col2 */}
        <div className="md:w-[50%]">
          <img src="../Img/Services/Sec2-img.svg" alt="Sec2-img" />
        </div>
      </div>
    </div>
    {/* <div> */}
      {/* Col2 Sec2 Text  */}
      <div className='flex flex-col gap-10 font-400 md:w-[50%]  lg:w-[60%] '>
        <h2 className='text-heading40 text-HeadingClr'>Proudly helping businesses</h2>
        <p className='text-ParaClr text-18 max-w-[787px]'>Explore our portfolio of remarkable projects where innovation and sustainability converge. Discover how we've transformed energy landscapes and elevated standards in the industry.</p>
     <SectionBtn>View our Portfolio</SectionBtn>
      </div>
    {/* </div> */}
      </section>

      {/* Footer */}
      <Footer/>
  </>
  );
};

export default Services;
