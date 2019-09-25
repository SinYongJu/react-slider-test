import React from 'react';
import InputText from '../atoms/InputText'
import Button from '../atoms/Button'

const BunddleInputButton = ({onChange,onClick,classname,btnText,placeholder}) => {
  return (
    <div className={classname}>
      <InputText onChange={onChange} placeholder={placeholder}></InputText>
      <Button onClick={onClick}>{btnText}</Button>
    </div>
  );
};

export default BunddleInputButton;