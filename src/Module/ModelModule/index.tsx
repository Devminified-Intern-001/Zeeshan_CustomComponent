import React, { ReactNode, useEffect } from 'react';
import CustomButton from '../../Components/Button';
import ReactDOM from 'react-dom';

interface Iprops {
  className?: string;
  title?: string;
  description?: string;
  open?: boolean;
  onclose?: ReactNode;
}
const modelstyle = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%,-50%',
  backgroundColor: '#fff',
  padding: '50px',
  zIndex: 3,
};
const overlaystyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  backgroundColor: 'rgba(0,0,0,.7)',
  zIndex: 2,
};
const ModelModule = (props: Iprops) => {
  useEffect(() => {
    // document.body.style.overflowY='hidden'
    return () => {
      document.body.style.overflowY = 'scroll';
    };
  }, []);
  const { className, open, title, description, onclose, ...rest } = props;
  if (open == false) return null;
  return ReactDOM.createPortal(
    <div className="overlay" style={overlaystyle} {...rest}>  
      <div className="modal" id="moodal" style={modelstyle}>
        {title}
        <br />
        {description}
        <CustomButton {...rest}>cancel</CustomButton>
      </div>
    </div>,
    document.getElementById('portal')
  );
};

export default ModelModule;

{
  /* <div  style={overlaystyle} onClick={onclose}>
     <div  style={modelstyle}>
     {title}<CustomButton onClick={onclose}>cancel</CustomButton>
      <br />{description}
      <hr />
      <CustomInput label='Your email' type='email' placeholder='' value={email}/>
      <CustomInput label='How old are you?' type='number' placeholder=''/>
      what is your sex at birth?
      <div className='mainmodel'>
      <CustomInput rightlabel='male' type='checkbox' placeholder=''/>
      <CustomInput rightlabel='female' type='checkbox' placeholder=''/>
      <CustomInput rightlabel='other' type='checkbox' placeholder=''/>

     </div>
      </div>
    
    </div> */
}
