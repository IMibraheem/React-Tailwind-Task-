// import React from 'react'
// import Navbar from '../Component/header/Navbar'
// import PortfolioCard from '../Component/PortfolioCard/PortfolioCard'
// import Button from '../Component/button/Button'

// const Portfolio = () => {
//   const PortfolioCardData =[
//     {
//       "link" :"img1",
//       'title': 'Delloite Building, London',
//       'data': 'Energy Efficiency, LED Lighting'
//     },
//     {
//       "link" :"img2",
//       'title': 'Car Chargers, Oakland',
//       'data': 'Electric Mobility'
//     },
//     {
//       "link" :"img3",
//       'title': 'Amazon Headquarters, UK',
//       'data': 'LED Lighting'
//     },
//     {
//       "link" :"img4",
//       'title': 'Astrazeneca Lab Facilities, Nevada',
//       'data': 'LED Lighting'
//     },
//     {
//       "link" :"img5",
//       'title': 'Gordon’s BBQ, Las Vegas',
//       'data': 'Energy Efficiency, LED Lighting'
//     },
//     {
//       "link" :"img6",
//       'title': 'Car Chargers, Portugal',
//       'data': 'Electric Mobility'
//     },
//   ]
//   const btnData=[
//     {
//       'style':'bg-[#A6A6AB] min-w-[90px] h-[57px] text-white rounded-full',
//       'btnName':'All'
//   },
//     {
//       'style':'bg-white min-w-[180px] h-[57px] text-black rounded-full',
//       'btnName':'LED Lighting'
//   },
//     {
//       'style':'bg-white min-w-[180px] h-[57px] text-black rounded-full',
//       'btnName':'Energy Efficiency'
//   },
//     {
//       'style':'bg-white min-w-[180px] h-[57px] text-black rounded-full',
//       'btnName':'Electric Mobility'
//   },
// ]

//   return (
//     <>
//     <Navbar style='text-white' logo='logo' btnStyle={'bg-[#FFFFFF4D] w-[165px] h-[57px] text-white rounded-full'}/>
//     {/* Hero Sec */}
//     <section className='w-full relative -mt-16 '>
//       <img src="../Img/Portfolio/portfolioSec.svg" alt="Portfolio Image" className=' w-full ' />
//     </section>

//     {/* Section 1 */}
//     <section className='flex flex-col gap-10 px-10 py-20 md:p-20 '>
//       <h1 className='text-heading40 text-HeadingClr font-400'>
//       The distinction that sets us Apart in the industry
//       </h1>
//       <p className='max-w-[772px] text-ParaClr text-18'>In a highly competitive industry, what distinguishes a company is not just its offerings but its unwavering commitment to excellence and innovation. At Oakland C.E., we understand that to rise above the competition, we must constantly strive for distinction in every aspect of our business. Our journey in the energy sector has been defined by innovation and expertise.</p>

//       <div className='grid grid-cols-3 justify-between items-center min-w-[75%] xl:max-w-[85%]'>
//         <img src="../Img/Portfolio/img1.svg" alt="Img" />
//         <img src="../Img/Portfolio/img2.svg" alt="Img" />
//         <img src="../Img/Portfolio/img3.svg" alt="Img" />
//       </div>
//     </section>

//     {/* Section 2 */}
//     <section className='bg-[#F4F4F4] flex flex-col gap-10 px-10 lg:px-20 py-16'>
//       {/* Button */}
//     <div className='flex flex-col md:flex-row gap-6'>
//       {
//         btnData.map((e,i)=>{
//           return(

//             <Button key={i} style={e.style} >{e.btnName}</Button>
//           )
//         })
//       }
//     </div>
//       {/* Portfolio */}
//       <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 '>  
//         {
//           PortfolioCardData.map((e ,i)=>{
//             return(
//               <PortfolioCard key={i} link={e.link} data={e.data} title={e.title}/>
//             )
//           })
//         }
       
//       </div>
      
//       {/* Third row */}
//       <div className='flex justify-end items-end text-[#ACADAE] gap-4'>
//         <p>1 </p>
//         <p>2</p>
//         <p>3</p>
//         <p>Próximo</p>
//       </div>
//     </section>
//     </>
//   )
// }

// export default Portfolio




import React, { useState } from 'react';
import Navbar from '../Component/header/Navbar';
import PortfolioCard from '../Component/PortfolioCard/PortfolioCard';
import Button from '../Component/button/Button';
import SectionBtn from '../Component/SectionBtn/SectionBtn';
import Footer from '../Component/footer/Footer';
import { NavLink } from 'react-router-dom';

const Portfolio = () => {
  const PortfolioCardData = [
    {
      "link": "img1",
      'title': 'Delloite Building, London',
      'data': 'Energy Efficiency, LED Lighting',
      'Navlink':'/delloitebuildinglondon'
    },
    {
      "link": "img2",
      'title': 'Car Chargers, Oakland',
      'data': 'Electric Mobility'
    },
    {
      "link": "img3",
      'title': 'Amazon Headquarters, UK',
      'data': 'LED Lighting'
    },
    {
      "link": "img4",
      'title': 'Astrazeneca Lab Facilities, Nevada',
      'data': 'LED Lighting'
    },
    {
      "link": "img5",
      'title': 'Gordon’s BBQ, Las Vegas',
      'data': 'Energy Efficiency, LED Lighting'
    },
    {
      "link": "img6",
      'title': 'Car Chargers, Portugal',
      'data': 'Electric Mobility'
    },
  ];

  const btnData = [
    {
      'style': 'bg-[#A6A6AB] min-w-[90px] h-[57px] text-white rounded-full',
      'btnName': 'All',
      'filter': 'all'

    },
    {
      'style': 'bg-white min-w-[180px] h-[57px] text-black rounded-full',
      'btnName': 'LED Lighting',
      'filter': 'LED Lighting'
    },
    {
      'style': 'bg-white min-w-[180px] h-[57px] text-black rounded-full',
      'btnName': 'Energy Efficiency',
      'filter': 'Energy Efficiency'
    },
    {
      'style': 'bg-white min-w-[180px] h-[57px] text-black rounded-full',
      'btnName': 'Electric Mobility',
      'filter': 'Electric Mobility'
    },
  ];

  const [selectedFilter, setSelectedFilter] = useState('all'); 

  // Function to filter the portfolio items based on the selected filter
  const filterPortfolio = (filter) => {
    if (filter === 'all') {
      return PortfolioCardData;
    }
    return PortfolioCardData.filter(item => item.data.includes(filter));
  };

  return (
    <>
      <Navbar style='text-white' logo='logo' btnStyle={'bg-[#FFFFFF4D] w-[165px] h-[57px] text-white rounded-full'} />
      
      {/* Hero Sec */}
      <section className='w-full relative -mt-16'>
        <img src="../Img/Portfolio/portfolioSec.svg" alt="Portfolio Image" className='w-full' />
      </section>

      {/* Section 1 */}
      <section className='flex flex-col gap-10 px-10 py-20 md:p-20'>
        <h1 className='text-heading40 text-HeadingClr font-400'>
          The distinction that sets us Apart in the industry
        </h1>
        <p className='max-w-[772px] text-ParaClr text-18'>
          In a highly competitive industry, what distinguishes a company is not just its offerings but its unwavering commitment to excellence and innovation. At Oakland C.E., we understand that to rise above the competition, we must constantly strive for distinction in every aspect of our business. Our journey in the energy sector has been defined by innovation and expertise.
        </p>

        <div className='grid grid-cols-3 justify-between items-center min-w-[75%] xl:max-w-[85%]'>
          <img src="../Img/Portfolio/img1.svg" alt="Img" />
          <img src="../Img/Portfolio/img2.svg" alt="Img" />
          <img src="../Img/Portfolio/img3.svg" alt="Img" />
        </div>
      </section>

      {/* Section 2 */}
      <section className='bg-[#F4F4F4] flex flex-col gap-10 px-10 lg:px-20 py-16'>
        {/* Button */}
        <div className='flex flex-col md:flex-row gap-6'>
          {btnData.map((btn, i) => (
            <Button 
              key={i} 
              style={btn.style} 
              onClick={() => {
                setSelectedFilter(btn.filter); 
              }}
            >
              {btn.btnName}
            </Button>
          ))}
        </div>

        {/* Portfolio */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3'>
          {
            filterPortfolio(selectedFilter).map((e, i) => (

               <NavLink key={i} to={e.Navlink}> <PortfolioCard  link={e.link} data={e.data} title={e.title} /></NavLink>
            ))
          }
        </div>

        {/* Pagination (for example) */}
        <div className='flex justify-end items-end text-[#ACADAE] gap-4'>
          <p>1</p>
          <p>2</p>
          <p>3</p>
          <p>Próximo</p>
        </div>
      </section>

      {/* Section 3 */}
      <section className='px-10 lg:px-20 py-24 flex flex-col gap-8'>
        <h2 className='text-heading40 text-HeadingClr font-400'>Get in touch with us</h2>
        <p className='text-18 font-400 text-ParaClr max-w-[770px]'>If you're ready to explore how our expertise in energy efficiency, LED lighting, photovoltaic energy, and electric mobility can benefit your projects, don't hesitate to reach out. We're here to listen, collaborate, and provide you with tailored solutions that align with your specific needs and goals.</p>
        <SectionBtn>Contact us</SectionBtn>
      </section>

      <Footer/>
      
    </>
  );
};

export default Portfolio;
