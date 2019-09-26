import React from 'react';
import SlideTemplate from './template/SlideTemplate'
import SlickSlide from '../components/organisms/SlickSlide'

const SlidePage = () => {
  return (
    <SlideTemplate
      slide ={<SlickSlide></SlickSlide>} 
    ></SlideTemplate>
  );
};

export default SlidePage;