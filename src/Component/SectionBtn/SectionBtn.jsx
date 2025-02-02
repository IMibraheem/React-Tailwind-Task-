import React from 'react'

const SectionBtn = ({children}) => {
  return (
    <button className='w-[110px] flex justify-center items-center  gap-3'> {children} <img src="../Img/Home/Sec2/arrow.svg" alt="arrow"/></button>
  )
}

export default SectionBtn