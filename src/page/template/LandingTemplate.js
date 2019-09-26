
import React from 'react';
import WireFrame from '../WireFrame'
import './LandingTemplate.scss'

const LandingTemplate = ({tmplHeader,tmplBody,tmplFooter,children}) => {
  
  return (
    <div className="align_center">
     <div className="left">
      {tmplHeader ? tmplHeader :  <WireFrame>header</WireFrame>}
     </div>
     <div className="right_overflow_hidden">
     {tmplBody ? tmplBody : <WireFrame>body</WireFrame> }
     </div>
     <div>
     {tmplFooter ? tmplFooter : <WireFrame>footer</WireFrame> }
     </div>
    </div>
  );
}

export default LandingTemplate;