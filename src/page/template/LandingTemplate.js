
import React from 'react';
import WireFrameComp from '../WireFrames/WireFrameComp'
import './LandingTemplate.scss'

const LandingTemplate = ({tmplHeader,tmplBody,tmplFooter,children}) => {
  
  return (
    <div className="align_center">
     <div className="left">
      {tmplHeader}
     </div>
     <div className="right_overflow_hidden">
     {tmplBody}
     </div>
     <div>
     {tmplFooter}
     </div>
    </div>
  );
}

export default LandingTemplate;