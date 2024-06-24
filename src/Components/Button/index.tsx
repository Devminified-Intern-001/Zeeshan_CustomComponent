import React, { ReactNode } from 'react'
interface IButton extends React.HTMLProps<HTMLButtonElement> {
    children:ReactNode;
    className?:string;
    disabled?: boolean;
    varient?:string;
    lefticon?:ReactNode;
    righticon?:ReactNode;
    variant?:string
}
const CustomButton = (props:IButton) => {
    const {children,className,lefticon,righticon,variant,...rest}=props
    console.log(variant);
    
  return (
    <button className={className}  variant={variant} {...rest} >{lefticon}{children}{righticon}</button>
  )
}

export default CustomButton
