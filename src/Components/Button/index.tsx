import React, { ReactNode } from 'react'
interface IButton extends React.HTMLProps<HTMLButtonElement> {
    children:ReactNode;
    className?:string;
    disabled?: boolean;
    lefticon?:ReactNode;
    righticon?:ReactNode;
}
const CustomButton = (props:IButton) => {
    const {children,className,lefticon,righticon,...rest}=props
  // console.log("im",children);
  
    
  return (
    <button className={className}   {...rest} >{lefticon}{children}{righticon}</button>
  )
}

export default CustomButton
