import React from 'react'

const Button = ({style , children ,onClick}) => {
  return (
    <button  className={`${style} cursor-pointer`} onClick={onClick}>
        {children}
    </button>
  )
}

export default Button