import React from 'react';

const InputText = ({onChange,placeholder,children}) => {
  return (
    <input type="text" onChange={(e)=>onChange(e)} value={children} placeholder={placeholder}/>
  );
};

export default InputText;