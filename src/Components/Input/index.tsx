import React, { InputHTMLAttributes, ReactNode } from 'react'
interface Iinput  extends InputHTMLAttributes<HTMLInputElement> {
    className?:string;
    label?:string;
    righticon?:ReactNode;

}
function CustomInput(props:Iinput) {
    const {className,label,righticon,...rest}=props
  return (
    <div>
    {label}<input className={className}  {...rest}/>{righticon}
    </div>
      )
}

export default CustomInput
