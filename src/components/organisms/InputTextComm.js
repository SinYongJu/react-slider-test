import React from 'react';
import Strong from '../atoms/Strong'
import DescriptionP from '../atoms/DescriptionP'
import BunddleInputButton from '../molecules/BunddleInputButton'

const InputTextComm = ({onClick,onChange,InputTextCommName,DescriptionPChildren}) => {

  const classname = 'bunddle_tf'
  return (
    <div calss="tf_comm">
      <Strong>{InputTextCommName}</Strong>
      <BunddleInputButton 
          onClick={onClick} 
          onChange={onChange} 
          classname={classname}
          btnText="click"
          placeholder="input"
          ></BunddleInputButton>
      <DescriptionP>{DescriptionPChildren}</DescriptionP>
    </div>
  );
};

export default InputTextComm;