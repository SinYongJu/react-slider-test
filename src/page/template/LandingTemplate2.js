
import React from 'react';
import './LandingTemplate.scss'

const LandingTemplate2 = ({tmplHeader,tmplBody,tmplFooter,children}) => {

  return (
    <div className="align_center pair">
     <div className="pair">
      {tmplHeader}
     </div>
     <div className="pair">
      {tmplBody}
     </div>
     <div className="pair">
      { tmplFooter }
     </div>
    </div>
  );
}

export default LandingTemplate2;