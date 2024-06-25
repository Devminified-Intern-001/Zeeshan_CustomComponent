import CustomButton from '../Button'
import '../../App.css'
import Profile from '../../assets/Profile'
import Buy from '../../assets/Buy'
const Navbar = () => {
  return (
    <div>
      <div className='landingnavbar'>
        <strong><img src="./Logo.png" alt="./Logo.png" /></strong>
        <nav>
        <ul className='landingnavbar_ul'>
            <li><a href="#">Home</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">About us</a></li>
            <li><a href="#">Contact us</a></li>
            <li><a href="#"><Profile/></a></li>
            <li><a href="#"><Buy/></a></li>

        {/* <li><CustomButton><Profile/></CustomButton></li>
        <li><CustomButton><Buy/></CustomButton></li> */}
        </ul>
        </nav>
      
    </div>
    </div>
  )
}

export default Navbar
