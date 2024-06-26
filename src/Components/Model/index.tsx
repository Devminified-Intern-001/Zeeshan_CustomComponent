import React, { ReactNode, useEffect } from 'react'
import CustomButton from '../Button';
import  ReactDOM  from 'react-dom';

interface Iprops {
  className?: string;
  title?: string;
  description?: string;
  open?:boolean
  onclose?:ReactNode
}
const modelstyle={
  position:'fixed',
  top:'50%',
  left:'50%',
  transform:'translate(-50%,-50%',
  backgroundColor:'#fff',
  padding:'50px',
  zIndex:2
}
const overlaystyle={
  position:'fixed',
  top:0,
  left:0,
  bottom:0,
  right:0,
  backgroundColor:'rgba(0,0,0,.7)',
  zIndex:2
}
const Model = (props:Iprops) => {
  useEffect(()=>{
    // document.body.style.overflowY='hidden'
    return ()=>  {  document.body.style.overflowY='scroll'}

  },[])
  const {className,open,title,description,onclose,...rest}=props
if(open==false)return null
  return ReactDOM.createPortal (
    <div style={overlaystyle} onClick={onclose}>
    <div style={modelstyle} >
      {title}
      <br />{description}
      <CustomButton onClick={onclose}>cancel</CustomButton>
    </div>
    </div>, document.getElementById('portal')
  )
}

export default Model
