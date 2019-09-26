import React from 'react';

import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

const AwesomeSlide = () => {
  return (
    <AwesomeSlider>
      <div data-src="">
        <img src="https://dummyimage.com/600x400/ebcdeb/00fff7.png&text=1"/>  
      </div>
      <div data-src="https://dummyimage.com/600x400/ebffeb/00fff7.png&text=2" >
      </div>
      <div data-src="https://dummyimage.com/600x400/ffcdeb/00fff7.png&text=3" >
      </div>
  </AwesomeSlider>
  );
};


export default AwesomeSlide;