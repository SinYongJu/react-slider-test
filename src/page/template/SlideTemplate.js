import React from 'react';
import WireFrameComp from '../WireFrames/WireFrameComp'
import './SlideTemplate.scss'

const SlideTemplate = ({slide}) => {
  return (
    <div className="container_slide">
      {slide}
    </div>
  );
};

export default SlideTemplate;