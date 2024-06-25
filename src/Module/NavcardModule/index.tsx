import React from 'react';
import NavCards from '../../Components/NavCards';
import image1 from '../../assets/fruit1.png';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const NavcardModule = () => {
  return (
    <Swiper
 
      className='swiper_navcard_module'
       // install Swiper modules
       modules={[Navigation, Pagination, Scrollbar, A11y]}
       spaceBetween={50}
       slidesPerView={9}
       navigation
    //    pagination={{ clickable: true }}
    //    scrollbar={{ draggable: true }}
       onSwiper={(swiper) => console.log(swiper)}
       onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
        <NavCards imageSrc={image1} label="banana" />
      </SwiperSlide>
      <SwiperSlide>
        <NavCards imageSrc={image1} label="apple" />
      </SwiperSlide>
      <SwiperSlide>
        <NavCards imageSrc={image1} label="orange" />
      </SwiperSlide>
      <SwiperSlide>
        <NavCards imageSrc={image1} label="mango" />
      </SwiperSlide>
      <SwiperSlide>
        <NavCards imageSrc={image1} label="mango" />
      </SwiperSlide>
      <SwiperSlide>
        <NavCards imageSrc={image1} label="mango" />
      </SwiperSlide>
      <SwiperSlide>
        <NavCards imageSrc={image1} label="mango" />
      </SwiperSlide>
      <SwiperSlide>
        <NavCards imageSrc={image1} label="mango" />
      </SwiperSlide>
      <SwiperSlide>
        <NavCards imageSrc={image1} label="mango" />
      </SwiperSlide>
      <SwiperSlide>
        <NavCards imageSrc={image1} label="mango" />
      </SwiperSlide>
      <SwiperSlide>
        <NavCards imageSrc={image1} label="mango" />
      </SwiperSlide>
      <SwiperSlide>
        <NavCards imageSrc={image1} label="mango" />
      </SwiperSlide>
      <SwiperSlide>
        <NavCards imageSrc={image1} label="mango" />
      </SwiperSlide>
      <SwiperSlide>
        <NavCards imageSrc={image1} label="mango" />
      </SwiperSlide>
      <SwiperSlide>
        <NavCards imageSrc={image1} label="mango" />
      </SwiperSlide>
      <SwiperSlide>
        <NavCards imageSrc={image1} label="mango" />
      </SwiperSlide>
     
    </Swiper>
  );
};

export default NavcardModule;
