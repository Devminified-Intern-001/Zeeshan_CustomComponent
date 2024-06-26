import React, { useState } from 'react'
import SearchModule from '../../Module/Search'
import NavcardModule from '../../Module/NavcardModule'
import SmartChoiceModule from '../../Module/SmartChoiceModule'
import Featured from '../../Module/Featured'
import images from '../../assets/featured.png'
import ModelModule from '../../Module/ModelModule'
import CustomButton from '../../Components/Button'
import SvgIcon from '../../assets/SvgIcon'
const HomePage = () => {
  const [isOpen,setIsOpen]=useState(false)
const handleclick=()=>{
  setIsOpen(true)
}
const handleclose=()=>{
  setIsOpen(false)

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
        <ModelModule onClick={handleclose} open={isOpen} title='hi im title' description='1rem ipsum dolor sit amet consectetur adipisicing elit. Veniam, nisi sapiente iste laborum tenetur quae cumque nemo ipsam voluptates nihil. Deleniti distinctio dolor officiis nisi, rem facilis cupiditate unde vel!'>
        </ModelModule>
      {/* <ModelModule onclose={handleclose} open={isOpen} title='Chronic kidney disease' description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed deleniti ipsum harum obcaecati sapiente quidem temporibus blanditiis doloribus voluptas maiores, placeat atque facere, cum voluptatem. Quia pariatur veritatis atque nihil.' /> */}
    </div>
  )
}

export default HomePage
