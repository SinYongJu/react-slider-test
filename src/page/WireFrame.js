import React from 'react';
import './WireFrame.scss'

const WireFrame = (props) => {
  return (
    <div className="wire" data-name={props.children}>
    </div>
  );
};

export default WireFrame;