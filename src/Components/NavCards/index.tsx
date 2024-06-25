import React from 'react'
type INavCard={
    imageSrc?:string
    className?:string;
    label?:string;
    
}
const NavCards = (props:INavCard) => {
    const {className,label,imageSrc,...rest}=props

  return (
    <div className={className}>
        <img src={imageSrc} alt={imageSrc} />
        {label}
    </div>
  )
}

export default NavCards
