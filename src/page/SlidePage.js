import React from 'react';
import SlideTemplate from './template/SlideTemplate'

import ReactAnimatedSlide from '../components/organisms/ReactAnimatedSlide'



const SlidePage = () => {
  return (
    <SlideTemplate
      slide={<ReactAnimatedSlide></ReactAnimatedSlide>}
    ></SlideTemplate>
  );
};

export default SlidePage;