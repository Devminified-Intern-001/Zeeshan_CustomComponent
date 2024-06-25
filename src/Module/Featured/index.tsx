import React, { useState } from 'react';
import CustomButton from '../../Components/Button';
import '../../App.css';
interface Iprops extends React.HTMLProps<HTMLButtonElement> {
  className?: string;
  productName?: string;
  // price?: number;
  image?: string;
  // amount?: number
}
const Featured = (props: Iprops) => {
  const { productName, image,...rest } = props;
  console.log(image);
  const [counter,setCounter]=useState(1)
const [pric,setrpic]=useState(50)
  const increment=()=>{
    setrpic(pric+50)
    setCounter(counter+1)
  }
  const decrement=()=>{
    if(counter>1){
      setrpic(pric-50)
      setCounter(counter-1)
    }
    
  }
  
  return (
    <div className="featured">
      <div>
        <img src={image} alt="img not found" />
        <p>{productName}</p>
        <p>{pric}$</p>
        <CustomButton onClick={decrement}>-</CustomButton>
        {counter}
        <CustomButton onClick={increment}>+</CustomButton>
        <CustomButton {...rest}>Add to cart</CustomButton>
      </div>
    </div>
  );
};

export default Featured;
