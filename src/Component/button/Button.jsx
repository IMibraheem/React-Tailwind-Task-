import React from 'react'

const Button = ({style , children}) => {
  return (
    <button  className={`${style} cursor-pointer`}>
        {children}
    </button>
  )
}

export default Button