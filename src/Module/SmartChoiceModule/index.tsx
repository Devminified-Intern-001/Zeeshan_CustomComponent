import React from 'react'
import SmartChoice from '../../Components/SmartChoice'
import image from '../../assets/shortchoices.png'
import '../../App.css'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const SmartChoiceModule = () => {
  
  return (
   
      <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      // pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>     
         <SmartChoice className='absoposition' imageSrc={image} label='Italian pizza' description='product description is here'/>
      </SwiperSlide>
      <SwiperSlide>     
         <SmartChoice className='absoposition' imageSrc={image} label='Italian pizza' description='product description is here'/>
      </SwiperSlide>
      <SwiperSlide>     
         <SmartChoice className='absoposition' imageSrc={image} label='Italian pizza' description='product description is here'/>
      </SwiperSlide>
      <SwiperSlide>     
         <SmartChoice className='absoposition' imageSrc={image} label='Italian pizza' description='product description is here'/>
      </SwiperSlide>
      <SwiperSlide>     
         <SmartChoice className='absoposition' imageSrc={image} label='Italian pizza' description='product description is here'/>
      </SwiperSlide>
      <SwiperSlide>     
         <SmartChoice className='absoposition' imageSrc={image} label='Italian pizza' description='product description is here'/>
      </SwiperSlide>
      <SwiperSlide>     
         <SmartChoice className='absoposition' imageSrc={image} label='Italian pizza' description='product description is here'/>
      </SwiperSlide>
      <SwiperSlide>     
         <SmartChoice className='absoposition' imageSrc={image} label='Italian pizza' description='product description is here'/>
      </SwiperSlide>
     
    </Swiper>
   
  )
}

export default SmartChoiceModule
