import React from 'react';
import SlideTemplate from './template/SlideTemplate'
import SwiperSlide from '../components/organisms/SwiperSlide'
import SliderItem from '../components/organisms/SliderItem'

const SlidePage = () => {
  const slideItems = Array.from(Array(5)).map((item,index) => {
      return <SliderItem key={index} 
      contents={`swiper slide ${index}`}
      thumb={"./logo192.png"}
      ></SliderItem>
  }); 
  return (
    <SlideTemplate
        slide={<SwiperSlide 
          slideItems={slideItems}
          ></SwiperSlide>}
      ></SlideTemplate>
  );
};

export default SlidePage;