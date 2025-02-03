import React from 'react'
import Navbar from '../Component/header/Navbar'
import Footer from '../Component/footer/Footer'

const Privacy = () => {
  const privacy=[
    {
      'heading': '1. Information we collect',
      'para' : 'We gather various types of information to enhance and optimize our services. This includes personal information such as your name, email address, phone number, and mailing address, collected when you register for an account, contact us, or use our services. We also gather usage information, which encompasses details about your interactions with our website and services, including your IP address, browser type, device information, pages visited, and actions taken.'
    },
    {
      'heading': '2. How we use your information',
      'para' : 'Our utilization of the information we collect serves multiple purposes. We use your personal data to furnish requested services, such as responding to inquiries, processing orders, and delivering newsletters or updates if you opt to receive them. Additionally, we analyze usage information to gain insights into how our website and services are used, which informs our continuous improvement efforts, content customization, and enhancements to user experiences.'
    },
    {
      'heading': '3. Communication',
      'para' : 'We may employ your contact information to communicate with you concerning our services, provide updates, and convey important notices. You have the option to opt out of marketing communications at any time.'
    },
    {
      'heading': '4. Cookies and Tracking Technologies',
      'para' : 'To better understand your browsing behavior and improve your website experience, we utilize cookies and similar tracking technologies. Cookies are small data files stored on your device that facilitate our comprehension of your preferences. By utilizing our website, you implicitly consent to our use of cookies, as detailed in our Cookies Policy. You maintain the ability to manage your cookie preferences through your browser settings.'
    },
    {
      'heading': '5. Security',
      'para' : 'We prioritize data security and employ reasonable measures to safeguard your information from unauthorized access, disclosure, alteration, or destruction. While we diligently strive to protect your data, its important to acknowledge that no method of transmission over the internet or electronic storage is entirely secure. Consequently, we cannot provide absolute security guarantees.'
    },
  ]
  return (
    <>
      <Navbar style='text-black' logo='logoblack' btnStyle={'bg-[#212529] w-[165px] h-[57px] text-white rounded-full'}/>
    {/* Hero Sec */}
    <section className='flex flex-col justify-end items-start px-10 md:px-20  bg-[#F4F4F4] h-[640px] w-full -mt-16 pb-16'>
      <h2 className='text-[45px] sm:text-[55px] md:text-[64px] font-400 text-HeadingClr'>Privacy and Cookies Policy</h2>
      <p className='text-18 font-400 text-ParaClr max-w-[535px]'>This privacy is designed to inform you about how we collect, use, and protect your personal information when you interact with our website.</p>
    </section>

    {/* Section Privacy Policy */}
    <section className='flex flex-col gap-10 px-10 lg:px-20 py-20'>
      {
        privacy.map((e)=>{
          return(
            <div className='flex flex-col gap-5'>
            <h2 className='text-heading40 text-HeadingClr font-400'>{e.heading}</h2>
            <p className='max-w-[1046px]'>{e.para}</p>
            </div>
          )
        })
      }
     

    </section>
    <Footer/>

    </>
  )
}

export default Privacy