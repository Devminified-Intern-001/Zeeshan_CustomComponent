import React, { useState } from 'react'
import SearchModule from '../../Module/Search'
import NavcardModule from '../../Module/NavcardModule'
import SmartChoiceModule from '../../Module/SmartChoiceModule'
import Featured from '../../Module/Featured'
import images from '../../assets/featured.png'
const HomePage = () => {
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

    </div>
  )
}

export default HomePage
