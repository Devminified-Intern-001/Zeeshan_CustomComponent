import React, { InputHTMLAttributes, ReactNode } from 'react'
interface Iinput  extends InputHTMLAttributes<HTMLInputElement> {
    className?:string;
    label?:string
  
}
function CustomInput(props:Iinput) {
    const {name,placeholder,type,value,className,onChange,label,...rest}=props
  return (
    <>
    {label}
    <input name={name} placeholder={placeholder} type={type} value={value} onChange={onChange} className={className}/>
</>
      )
}

export default CustomInput
