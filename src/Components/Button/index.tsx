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
    const {children,className,onClick,disabled,lefticon,righticon,...rest}=props
    // console.log({rest});
    
  return (
    <button className={className} onClick={onClick} disabled={disabled}>{lefticon}{children}{righticon}</button>
  )
}

export default CustomButton
