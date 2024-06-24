import React, { InputHTMLAttributes, ReactNode } from 'react'
interface Iinput  extends InputHTMLAttributes<HTMLInputElement> {
    IclassName?:string;
    Ilabel?:string;
    Irightlabel?:string;
    Irighticon?:ReactNode;

}
function CustomInput(props:Iinput) {
    const {IclassName,Ilabel,Irighticon,Irightlabel,...rest}=props
  return (
    <div>
    {Ilabel}<br/><input className={IclassName}  {...rest}/>{Irighticon}{Irightlabel}
    </div>
      )
}

export default CustomInput
