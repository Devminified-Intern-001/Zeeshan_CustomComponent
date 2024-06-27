import React, { ReactNode } from 'react'
type Iprops={
    children?:ReactNode;
    className?: string;
    value?:string

};
const CustomOption = (props:Iprops) => {
    const {children,className,value,...rest}=props
  return (
    <div className={className}>
        
      <option value={value}>{children}</option>
    </div>
  )
}

export default CustomOption
