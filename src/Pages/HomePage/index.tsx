import React, {  useState } from 'react'
import SearchModule from '../../Module/Search'
import NavcardModule from '../../Module/NavcardModule'
import SmartChoiceModule from '../../Module/SmartChoiceModule'
import Featured from '../../Module/Featured'
import images from '../../assets/featured.png'
import ModelModule from '../../Module/ModelModule'
import CustomButton from '../../Components/Button'
import SvgIcon from '../../assets/SvgIcon'
import CustomInput from '../../Components/Input'
import {Select} from '../../Components/Select'
import CustomOption from '../../Components/CustomOption'
import { Option } from '../../interfaces'
import NewApp from '../../Components/NewApp'
const options: Option[] = [
  {
    label: "Audi",
    value: "audi"
  },
  {
    label: "Ferrari",
    value: "ferrari"
  },
  {
    label: "Mercedes Benz",
    value: "mercedes"
  },
  {
    label: "BMW",
    value: "bmw"
  },
  {
    label: "Tesla",
    value: "tesla"
  },
];
const HomePage = () => {
  const [isOpen,setIsOpen]=useState(false)

const handleclick=()=>{
  setIsOpen(true)
      document.body.style.overflowY='hidden'
}
const handleclose=()=>{
  setIsOpen(false)
  document.body.style.overflowY = 'scroll';
}
  const featurd_data=[
    {
      name:'Product Name',
      image:images,
      price:50,
      quantity:1
    },
    {
      name:'Product Name',
      image:images,
      price:50,
      quantity:1
    },
    {
      name:'Product Name',
      image:images,
      price:50,
      quantity:1
    },
    {
      name:'Product Name',
      image:images,
      price:50,
      quantity:1
    },
    
  ]
  // const [counter,setCounter]=useState(1)
  const handleCounter=()=>{
    
    console.log("hi im handle counter function");
    
  }
  // const increment=()=>{
  //   setCounter(counter+1)
  // }
  // const decrement=()=>{
  //   setCounter(counter-1)
  // }

  
  const [selectedItem, setSelectedItem] = useState<Option | null>(null);
  return (
    <div>

      <SearchModule/>
      <NavcardModule/>
      <SmartChoiceModule/>
     { 
     featurd_data?.map((iteam)=>{
      // const {name,price,image,quantity}=iteam
      return  (<div><Featured productName={iteam.name}  image={iteam.image} onClick={handleCounter} /></div>
     )
      }
      )
     } 
    {/* <button onClick={decrement}>Sutraction</button>
    {counter}
    <button onClick={increment}>Addition</button> */}

      <CustomButton   className='color' onClick={handleclick} righticon={<SvgIcon/>}>{isOpen ? "hide":"show" } </CustomButton>
        <NewApp onClick={handleclose} onclose={handleclose}  open={isOpen} title='hi im title' description='1rem ipsum dolor sit amet consectetur adipisicing elit. Veniam, nisi sapiente iste laborum tenetur quae cumque nemo ipsam voluptates nihil. Deleniti distinctio dolor officiis nisi, rem facilis cupiditate unde vel!'>
       
        <CustomInput name='email' label='Your email' type='email' />

 {/* <Select name='condition' label='what brings you here?'>
        <option value="hi">hi how are 1</option>
        <option value="hi">hi how are 2</option>
        <option value="hi">hi how are 3</option>
        <option value="hi">hi how are 4</option>
        </Select> */}
        <Select
        label='what brings you here?'
        placeholder='Select a car'
        selected={selectedItem}
        options={options}
        onChange={(selection: Option) => setSelectedItem(selection)}
      />
        <CustomInput name='age' label='How old are you?' type='number'/>
       
        <CustomInput name='gender' rightlabel='male' type='radio' label=' whats you sex at birth?'/>
        <CustomInput name='gender' rightlabel='female' type='radio' />
        <CustomInput name='gender' rightlabel='others' type='radio' />


        <CustomInput name='identity' rightlabel='yes' type='radio' label=' would you like to add gender identity?'/>
        <CustomInput name='identity' rightlabel='no' type='radio' />
        
       
        <CustomInput name='country' label='where do you live?' type='text' />

        <CustomInput name='diagnosed' rightlabel='yes' type='radio' label=' would you like to diagnosed by doctor?'/>
        <CustomInput name='diagnosed' rightlabel='no' type='radio' />

        
        
        </NewApp>
      {/* <ModelModule onclose={handleclose} open={isOpen} title='Chronic kidney disease' description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed deleniti ipsum harum obcaecati sapiente quidem temporibus blanditiis doloribus voluptas maiores, placeat atque facere, cum voluptatem. Quia pariatur veritatis atque nihil.' /> */}
    </div>
  )
}

export default HomePage
