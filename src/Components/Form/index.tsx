import React from 'react'
import { useState } from 'react'
import CustomButton from '../Button'
import CustomInput from '../Input'
import SvgIcon from '../../assets/SvgIcon'
const CustomLoginForm = () => {
  const [formdata, setFormData]=useState({
    username:'',
    password:'',
    softwareExpert:false
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
    <div>
      <h1>Welocme to start</h1>
      <p>New Here? Create an Account</p>
      <br />
    <CustomInput  name='username' label='Username' value={formdata.username} onChange={(e)=>{handlechange(e)}} placeholder='Enter Username' type='text'  className='input' />
    <br/>
    <CustomInput name='password' label='Password' value={formdata.password} onChange={(e)=>{handlechange(e)}} placeholder='Enter Password' type='password' className='input'/>
    <br/>
    <CustomButton  className="btn-primary flex" onClick={handleSubmit} >Sign in</CustomButton>
    <CustomButton  className="btn-primary flex" onClick={handleSubmit} lefticon={<SvgIcon/>}>Sign in with google</CustomButton>


    </div>
  )
}

export default CustomLoginForm
