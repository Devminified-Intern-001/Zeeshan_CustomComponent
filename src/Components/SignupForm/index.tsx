import React, { useState } from 'react'
import CustomButton from '../Button'
import CustomInput from '../Input'
import SvgIcon from '../../assets/SvgIcon'
const CustomSignup = () => {
    const [formdata, setFormData]=useState({
        username:'',
        password:'',
        email:'',
        terms:false
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
        <div><img src="./signup.png" style={{width:'583px', height:'989px'}} alt="./signup.png" /></div>
    <div>
    <h1>SignUp to get started</h1>
    <p>Already a user? <a href="#">lets Sign-in</a></p>
    <br />
    <CustomInput  name='username' Ilabel='Username' value={formdata.username} onChange={(e)=>{handlechange(e)}} placeholder='Enter Username' type='text'  className='input' />
  <br/>
  <CustomInput  name='email' Ilabel='Email' value={formdata.email} onChange={(e)=>{handlechange(e)}} placeholder='Enter a vaild Email' type='email'  className='input' />
  <br/>
  <CustomInput name='password' Ilabel='Password' value={formdata.password} onChange={(e)=>{handlechange(e)}} placeholder='Enter Password' type='password' className='input'/>
  <br/>
  <CustomInput name='terms' Irightlabel="Creating an account meana you're okay with our term and services,pravicy policy and our default notification settings" checked={formdata.terms} onChange={(e)=>{handlechange(e)}}  type='checkbox'/>
<br />
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

export default CustomSignup
