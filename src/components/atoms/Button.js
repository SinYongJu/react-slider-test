import React from 'react';

const Button = ({children,onClick}) => {
  return (
    <button type="button" onClick={(e)=>onClick(e)}>{children}</button>
  );
};

export default Button;

