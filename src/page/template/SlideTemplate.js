import React from 'react';
import WireFrame from '../WireFrame'
import './SlideTemplate.scss'

const SlideTemplate = ({slide}) => {
  return (
    <div className="container_slide">
      {slide ? slide : <WireFrame>slide</WireFrame>}
    </div>
  );
};

export default SlideTemplate;