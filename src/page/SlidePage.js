import React from 'react';
import SlideTemplate from './template/SlideTemplate'
import NukaSlide from '../components/organisms/NukaSlide'

const SlidePage = () => {
  return (
    <SlideTemplate
      slide={<NukaSlide></NukaSlide>}
    ></SlideTemplate>
  );
};

export default SlidePage;