
import React from 'react';
import './LandingTemplate.scss'

const LandingTemplate = ({children}) => {
  return (
    <div className="align_center">
      {children}
    </div>
  );
}

export default LandingTemplate;