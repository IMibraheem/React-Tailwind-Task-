import React, { useState } from 'react'
import Navbar from '../Component/header/Navbar'
import Button from '../Component/button/Button'
import Footer from '../Component/footer/Footer'

const Contact = () => {
  const [inpData , setInpData] = useState({
    name:'',
    email:'',
    number:'',
    company:'',
    message:'',
  })

  const handleInpValue=(e)=>{
let {name  , value}= e.target
 setInpData((prev)=>({...prev , [name]:value}))
console.log(name,value);

  }

  const handleFormSubmit=(e)=>{
    e.preventDefault()
    setInpData({
      name:'',
      email:'',
      number:'',
      company:'',
      message:'',
    })
  }
  return (
    <>
    <Navbar style='text-black' logo='logoblack' btnStyle={'bg-[#212529] w-[165px] h-[57px] text-white rounded-full'}/>
    {/* Hero Sec */}
    <section className='flex flex-col justify-end items-start px-10 md:px-20  bg-[#F4F4F4] h-[640px] w-full -mt-16 pb-16'>
      <h2 className='text-[64px] font-400 text-HeadingClr'>Contact us</h2>
      <p className='text-18 font-400 text-ParaClr max-w-[535px]'>Our team is here to assist you on your journey towards a sustainable and efficient energy future.</p>
    </section>

    {/*Form Section  */}
    <section className=' flex flex-col lg:flex-row  justify-between items-start px-10 py-20 lg:p-20'>
      {/* Col1 */}
      <div className='flex flex-col gap-20 w-full lg:w-[40%]'>
        {/*inside Col1 this is Row1 */}
        <div className='flex flex-col gap-8'>
          <h2 className='text-HeadingClr text-heading40 font-400'>Location</h2>
          <p className='text-ParaClr text-18 font-400 max-w-[513px]'>Avenida Marta Lopes, Nº2 <br />
          8400-401 Vila Real, Portugal</p>
        </div>
        {/*inside Col1 this is Row2 */}
        <div className='flex flex-col gap-8'>
          <h2 className='text-HeadingClr text-heading40 font-400'>Open hours</h2>
          <p className='text-ParaClr text-18 font-400 max-w-[513px]'>Weekdays - 9:00am to 6:00pm <br />
          Weekends - Closed</p>
        </div>
      </div>
      {/* Col2 */}
      <div className='w-full lg:w-[60%]'>
        <h1 className='text-heading40 text-HeadingClr font-400'>Form</h1>
        <form action="" className='flex flex-col gap-10' onSubmit={handleFormSubmit}>
          <div  className='flex flex-col md:flex-row justify-start items-center gap-10  '>
            <input type="text" value={inpData.name} name='name' required className='flex-1 w-full md:w-auto  border outline-none px-7 py-4' placeholder='Name' onChange={handleInpValue}/>
            <input type="email" value={inpData.email} name="email" id=""  required className='flex-1 w-full md:w-auto border outline-none px-7 py-4' placeholder='Email' onChange={handleInpValue}/>
          </div>
          <div  className='flex flex-col md:flex-row justify-start items-center gap-10'>
            <input type="number" value={inpData.number} name='number' required className='flex-1 w-full md:w-auto border outline-none px-7 py-4' placeholder='Phone number' onChange={handleInpValue}/>
            <input type="text" value={inpData.company} name="company" id=""  className='flex-1 w-full md:w-auto border outline-none px-7 py-4' placeholder='Company (optional)' onChange={handleInpValue}/>
          </div>
          <textarea name="message" value={inpData.message} rows={10} cols={40} className='resize-none border px-7 py-4 outline-none' placeholder='Message' onChange={handleInpValue}></textarea>
          <div className='flex flex-row justify-start items-center gap-6 text-18 font-400 text-ParaClr'>
            <input type="checkbox"  id="" required/>
            <p>I consent to Oakland C.E. processing my data for contact purposes.</p>
          </div>
          <Button style ='rounded-full bg-[#212529] w-[121px] h-[57px] text-white'>Send</Button>
        </form>
      </div>
    </section>

    {/* Map Section */}
    <section className='flex flex-col md:flex-row  px-10 pb-20 md:py-20 lg:p-20 gap-10  lg:h-[80vh]'>
      {/* Map */}
      <div className='md:w-[70%]'>
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d27212.77590857159!2d74.34700550000001!3d31.5077596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1738579099996!5m2!1sen!2s" width="600" height="450" className='w-full h-full rounded-md' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <div className='md:w-[30%] '>
        <img src="../Img/Contact/Sec2-img.png" alt="Sec2-img" className='w-full h-[70vh] md:h-full  rounded-md' />
      </div>
    </section>
    <Footer/>
    </>
  )
}

export default Contact