import React, { InputHTMLAttributes, ReactNode } from 'react'
interface Iinput  extends InputHTMLAttributes<HTMLInputElement> {
    className?:string;
    label?:string;
    rightlabel?:string;
    righticon?:ReactNode;

}
function CustomInput(props:Iinput) {
    const {className,label,righticon,rightlabel,...rest}=props
  return (
    <div>
    {label}<br/><input className={className}  {...rest}/>{righticon}{rightlabel}
    </div>
      )
}

export default CustomInput
