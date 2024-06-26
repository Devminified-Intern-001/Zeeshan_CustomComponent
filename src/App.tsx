import CustomButton from './Components/Button'
import './App.css'
import { useEffect, useState } from 'react'
import clsx from 'clsx';
import SvgIcon from './assets/SvgIcon';
import CustomInput from './Components/Input';
import DownArrow from './assets/DownArrow'
import CustomLoginForm from './Pages/LoginForm';
import CustomSignup from './Pages/SignupForm';
import LandingNavbar from './Components/LandingNavbar';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import HomePage from './Pages/HomePage';
import Model from './Components/Model';

import NewApp from './Components/NewApp';

function App() {
 
 
const [isOpen,setIsOpen]=useState(false)
const handleclick=()=>{
  setIsOpen(true)
    document.body.style.overflowY='hidden'

  // console.log(isOpen);
  // console.log('click');

}
const handleclose=()=>{
  setIsOpen(false)
  document.body.style.overflowY='scroll'
  


}
// const [formdata, setFormData]=useState({
//   username:'',
//   password:'',
//   softwareExpert:false
// })
// const handlechange=(event)=>{
//   const { name, type, checked, value } = event.target;
//   const fieldValue = type === 'checkbox' ? checked : value;
// setFormData({...formdata, [name]: fieldValue})
// }
// console.log(formdata);
// const handleSubmit=()=>{
//   if(formdata.username=="" || formdata.password==""){
//  alert( `Please Fill the credtionals`);
//   }
//   else{
//     alert( `${formdata.username} Login Successfully`);

//   }
  
// }

  return (
    <>
   
    {/* <CustomButton   className='color' onClick={handleclick} righticon={<SvgIcon/>}>{isOpen ? "hide":"show" } </CustomButton> */}
    {/* <div className={`paragraphhide ${isOpen ? "paragrapshow":"" }`}>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis eos sit culpa quos eaque, reprehenderit mollitia temporibus necessitatibus sequi tenetur aperiam doloremque voluptas impedit provident quia blanditiis doloribus nam sed.
    </div> */}
    
        {/* <NewApp onclose={handleclose} open={isOpen} title='hi im title' description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, nisi sapiente iste laborum tenetur quae cumque nemo ipsam voluptates nihil. Deleniti distinctio dolor officiis nisi, rem facilis cupiditate unde vel!'>
        </NewApp> */}
  
    {/* <div className={clsx('paragraphhide',{'paragrapshow':isOpen})}>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis eos sit culpa quos eaque, reprehenderit mollitia temporibus necessitatibus sequi tenetur aperiam doloremque voluptas impedit provident quia blanditiis doloribus nam sed.
    </div>

    <br/>
    <br/>

    <CustomButton   lefticon={<SvgIcon/>} className="btn-primary flex" >Click here</CustomButton>
    <br/>
    <br/>
    <br/> */}
    {/* <CustomInput DownArrow={<DownArrow/>} name='username' label='Username' value={formdata.username} onChange={(e)=>{handlechange(e)}} placeholder='Enter Username' type='text'  className='input' />
    <br/>
    <CustomInput name='password' label='Password' value={formdata.password} onChange={(e)=>{handlechange(e)}} placeholder='Enter Password' type='password'/>
    <br/>
    <CustomInput name='softwareExpert' label='Software expert' checked={formdata.softwareExpert} onChange={(e)=>{handlechange(e)}} placeholder='Enter Password' type='checkbox'/>
    <CustomButton  className="btn-primary flex" onClick={handleSubmit} >Login</CustomButton> */}
    <LandingNavbar/>
    <Navbar/>
    <HomePage/>

    {/* <CustomLoginForm/> */}
    {/* <CustomSignup/> */}
    <Footer/>
    </>
  )
}

export default App

