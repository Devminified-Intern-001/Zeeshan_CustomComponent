import React from 'react'
import CustomButton from '../Button'
import '../../App.css'
const LandingNavbar = () => {
  return (
    <div className='landingnavbar'>
        <strong><img src="./Logo.png" alt="./Logo.png" /></strong>
        <nav>
        <ul className='landingnavbar_ul'>
        <li><CustomButton>Sign in</CustomButton></li>
        <li><CustomButton>Sign up</CustomButton></li>
        </ul>
        </nav>
      
    </div>
  )
}

export default LandingNavbar
