import '../../App.css'
import CustomInput from '../../Components/Input'
import CustomButton from '../../Components/Button'
import Search from '../../assets/Search'
const SearchModule = () => {
  return (
    <div className='search_main'>
    <div className='search'>
      <CustomInput type='search' name='search' placeholder='What are you looking for...' className='input'/>
      <CustomButton><Search/></CustomButton>
    </div>
    </div>
  )
}

export default SearchModule
