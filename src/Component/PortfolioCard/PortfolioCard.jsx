import React from 'react'

const PortfolioCard = ({link , title ,data}) => {
  return (
    <div className='p-5 cursor-pointer flex flex-col gap-3'>
        <img src={`../Img/Portfolio/PortfolioCard/${link}.svg`} alt="img Portfolio" className='w-full ' />
        <h4 className='text-[#212529] text-18 font-400'>{title}</h4>
        <p className='text-[14px] text-[#8B8D8F]'>{data}</p>
    </div>
  )
}

export default PortfolioCard