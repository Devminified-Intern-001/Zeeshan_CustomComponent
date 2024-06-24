import React from 'react'
import { useState } from 'react'
import CustomButton from '../Button'
import CustomInput from '../Input'
import SvgIcon from '../../assets/SvgIcon'
const CustomLoginForm = () => {
  const [formdata, setFormData]=useState({
    username:'',
    password:'',
   
  })
  const handlechange=(event)=>{
    const { name, type, checked, value } = event.target;
    const fieldValue = type === 'checkbox' ? checked : value;
  setFormData({...formdata, [name]: fieldValue})
  }
  console.log(formdata);
  const handleSubmit=()=>{
    if(formdata.username=="" || formdata.password==""){
   alert( `Please Fill the credtionals`);
    }
    else{
      alert( `${formdata.username} Login Successfully`);
  
    }
    
  }
  
  return (
    <div className='logincontainer'>
    <div><img src="./LooginImage.png" style={{width:'583px', height:'989px'}} alt="./LooginImage.png" /></div>
    <div>
      <h1>Welocme to start</h1>
      <p>New Here?<a href="#">Create an Account</a></p>
      <br />
    <CustomInput  name='username' Ilabel='Username' value={formdata.username} onChange={(e)=>{handlechange(e)}} placeholder='Enter Username' type='text'  className='input' />
    <br/>
    <CustomInput name='password' Ilabel='Password' value={formdata.password} onChange={(e)=>{handlechange(e)}} placeholder='Enter Password' type='password' className='input'/>
    <br/>
    <CustomButton  className="btn-primary flex" onClick={handleSubmit} >Sign in</CustomButton>
    <CustomButton  className="btn-primary flex" onClick={handleSubmit} lefticon={<SvgIcon/>}>Sign in with google</CustomButton>
    <br />
    <br />
    <footer>
  <a href="#">Terms and Conditions</a>
  <a href="#">Contact us</a>
  </footer>
    </div>
    </div>
  )
}

export default CustomLoginForm
