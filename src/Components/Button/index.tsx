import React, { ReactNode } from 'react'
interface IButton extends React.HTMLProps<HTMLButtonElement> {
    children:ReactNode;
    className?:string;
    disabled?: boolean;
    varient?:string;
    lefticon?:ReactNode;
    righticon?:ReactNode;
}
const CustomButton = (props:IButton) => {
    const {children,className,lefticon,righticon,...rest}=props
  
    
  return (
    <button className={className}   {...rest} >{lefticon}{children}{righticon}</button>
  )
}

export default CustomButton
