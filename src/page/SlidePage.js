import React from 'react';
import SlideTemplate from './template/SlideTemplate'
import SwiperSlide from '../components/organisms/SwiperSlide'

const SlidePage = () => {
  return (
    <SlideTemplate
        slide={<SwiperSlide></SwiperSlide>}
      ></SlideTemplate>
  );
};

export default SlidePage;