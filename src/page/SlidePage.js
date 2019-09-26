import React from 'react';
import SlideTemplate from './template/SlideTemplate'
import AwesomeSlide from '../components/organisms/Slide'

const SlidePage = () => {
  return (
    <>
    <SlideTemplate 
      slide={<AwesomeSlide></AwesomeSlide>}
    ></SlideTemplate>
    </>
  );
};

export default SlidePage;